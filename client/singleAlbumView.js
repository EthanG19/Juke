import React from "react";
import ReactDOM from "react-dom";

const SingleAlbumView = props => {
    const albumView = props.album
    return (
<div id='single-album' className='column'>
  <div className='album'>
    <a>
      <img src= {`${albumView.artworkUrl}`} />
      <p>{albumView.name}</p>
      <small>{albumView.artist.name}</small>
    </a>
  </div>
  <table id='songs'>
    <tbody>
      <tr className='gray'>
        <td />
        <td>{#}</td>
        <td>Name</td>
        <td>Artist</td>
        <td>Genre</td>
      </tr>
      <tr>
        <td><i className='fa fa-play-circle' /></td>
        <td>1</td>
        <td>Song Name</td>
        <td>Artist Name</td>
        <td>Song Genre</td>
      </tr>
    </tbody>
  </table>
</div>
)}


export default SingleAlbumView