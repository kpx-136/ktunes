import { Link } from "react-router-dom";

export const AlbumCard = ({album}) => {
    return(
        <Link to = {`/album/${album.id}`}>
            <div className = "albumCard" key = {album.id}>
                <img src = {`${import.meta.env.BASE_URL}assets/${album.id}.jpg`} alt = {`cover image of ${album.title}`} />
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
            </div>
        </Link>
    );
};