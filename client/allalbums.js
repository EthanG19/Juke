import React from "react";
import ReactDOM from "react-dom";

const SingleAlbum = props => {
  const album = props.album;
  console.log("this is album", album);
  return (
    <div id="albums" className="row wrap">
      <div className="album">
        <a>
          <img src={`${album.artworkUrl}`} />
          <p>{album.name}</p>
          <small>{album.artist.name}</small>
        </a>
      </div>
    </div>
  );
};

export default SingleAlbum;
