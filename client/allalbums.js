import React from "react";
import ReactDOM from "react-dom";

const SingleAlbum = props => {
  const album = props.album;
  return (
    <div id="albums" className="row wrap">
      <div className="album">
        <a onClick = {props.selectalbum && props.selectalbum(album.id)}>
          <img src={`${album.artworkUrl}`} />
          <p>{album.name}</p>
          <small>{album.artist.name}</small>
        </a>
      </div>
    </div>
  );
};

export default SingleAlbum;
