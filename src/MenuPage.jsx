import { useContext, useReducer, useState } from "react";
import { AlbumContext } from "./AlbumContext";
import { AlbumCard } from "./AlbumCard";

export const MenuPage = () => {

    const albums = useContext(AlbumContext);

    const initialFilters = {
        filterSearch: "", 
        filterGenre: [], 
        filterSort: "default"
    };

    const reducer = (state, action) => {
        switch(action.type) {

            case "SET_SEARCH":
                return {
                    ...state, 
                    filterSearch: action.payload
                }
            break;

            case "SET_FILTER":
                return {
                    ...state, 
                    filterGenre: state.filterGenre.includes(action.payload) ? 
                        state.filterGenre.filter((filter) => filter !== action.payload) : 
                        [...state.filterGenre, action.payload]
                }
            break;

            case "SET_SORT": 
                return {
                    ...state, 
                    filterSort: action.payload
                }
            break;

            default: 
                return state;
            break;

        }
    };

    const [state, dispatch] = useReducer(reducer, initialFilters);

    let filteredAlbums = albums;

    if(state.filterSearch !== "") {
        filteredAlbums = filteredAlbums.filter((album) => {
            return(
                album.title.toLowerCase().includes(state.filterSearch.toLowerCase()) ||
                album.artist.toLowerCase().includes(state.filterSearch.toLowerCase()) ||
                album.tracks.some((track) => track.toLowerCase().includes(state.filterSearch.toLowerCase()))
            )
        });
    }

    if(state.filterGenre.length > 0) {
        filteredAlbums = filteredAlbums.filter((album) => {
            return(
                state.filterGenre.some((gen) => album.genre.includes(gen))
            )
        })
    }

    if (state.filterSort === "title") {
        filteredAlbums = filteredAlbums.toSorted((a,b) => a.title.localeCompare(b.title));
    } else if (state.filterSort === "year") {
        filteredAlbums = filteredAlbums.toSorted((a,b) => a.year - b.year);
    } else {
        filteredAlbums = filteredAlbums.toSorted((a,b) => a.id - b.id);
    }
    

    let genres = [];
    albums.map((album) => {
        album.genre.map((genre) => {
            if (genres.includes(genre)) return;
            else genres.push(genre);
        })
    })

    return(
        <div id = "menuPage">

            <div id = "search">
                <label htmlFor = "searchBar"><i className="fa-solid fa-magnifying-glass"></i></label>
                <input id = "searchBar" type = "text" placeholder = "Search the name of albums, songs or artists" onChange = {(e) => {dispatch({type: "SET_SEARCH", payload: e.target.value})}} />
            </div>

            <div id = "filters">
                <p>Filter by genre: </p>
                <div id = "filterOptions" onChange = {(e) => {dispatch({type: "SET_FILTER", payload: e.target.value})}}>
                    {
                        genres.map((genre) => {return (
                            <div className = "filterOption" key = {genre}>
                                <input type = "checkbox" id = {genre}value = {genre} />
                                <label htmlFor = {genre}>{genre}</label>
                            </div>
                        );})
                    }
                </div>
            </div>

            <div id = "sort">
                <p>Sort by: </p>
                <div id = "sortOptions" onChange = {(e) => {dispatch({type: "SET_SORT", payload: e.target.value})}}>
                    <div className = "sortOption">
                        <input type = "radio" name = "sortBy" value = "default" id = "default" checked = {state.filterSort === "default"} />
                        <label htmlFor = "default">Default</label>
                    </div>
                    <div className = "sortOption">
                        <input type = "radio" name = "sortBy" value = "year" id = "year" checked = {state.filterSort === "year"} />
                        <label htmlFor = "year">Year</label>
                    </div>
                    <div className = "sortOption">
                        <input type = "radio" name = "sortBy" value = "title" id = "title" checked = {state.filterSort === "title"} />
                        <label htmlFor = "title">Title</label>
                    </div>
                </div>
            </div>

            <div id = "albumSection">

                <p id = "albumCount">{filteredAlbums.length} albums found.</p>
                
                <div id = "albumList">
                {
                    filteredAlbums.map((album) => {return(
                        <AlbumCard album = {album} key = {album.id}/>
                    )})
                }
            </div>
            
            </div>
            
        </div>
    );
};