import { useContext } from "react";
import { AlbumContext } from "./AlbumContext";
import { useParams } from "react-router-dom";

export const AlbumPage = () => {

    const albums = useContext(AlbumContext);
    const {id} = useParams();
    const album = albums.find((album) => album.id === Number(id));

    if(!album) {
        return <h1>Album not found :(</h1>
    };

    return(
        <div id = "albumPage">
            <div id = "imageSection">
                <img src = {`${import.meta.env.BASE_URL}/assets/${album.id}.jpg`} alt = "album cover" />
            </div>
            <div id = "contentSection">

                <div id = "genre-section">
                    <p>Genres:</p>
                    <div id = "genre-list">{
                        album.genre.map((individualgenre) => {return <span className = "genre" key = {album.genre.indexOf(individualgenre)}>{individualgenre}</span>})
                    }</div>
                </div>
                
                <h1>{album.title}</h1>
                <h4>{album.artist}</h4>
                <small>Released in {album.year}</small>

                <div id = "tracklist">
                    <h6>Tracklist: </h6>
                    <ol>
                        {
                            album.tracks.map((track) => {return <li key = {album.tracks.indexOf(track)}>{track}</li>})
                        }
                    </ol>
                </div>
                
            </div>
        </div>
        
    );

};