import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./sidebar";
import SingleAlbum from "./allalbums";
import Player from "./player";
import axios from "axios";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      selectedAlbum: {}
    };
    this.selectedAlbum = this.selectedAlbum.bind(this)
  }
  selectedAlbum(albumid)  {
  return async () => {
    const res = await axios.get(`/api/albums/${albumid}`)
    const selectedAlbum = res.data
    console.log('this was clicked')
    this.setState({selectedAlbum: selectedAlbum})
  }
    
}

  async componentDidMount() {
    try {
      const res = await axios.get("/api/albums");
      const albums = res.data;
      this.setState({ albums });
    } catch (error) {
      console.log("this is error");
    }
  }

  render() {
    return (
      <div id="main" className="row container">
        <Sidebar />
        <div className="container">
          <div id="albums" className="row wrap">
            {this.state.albums.map(album => {
              return <SingleAlbum selectalbum = {this.selectedAlbum}  key={album.id} album={album} />;
            })}
          </div>
        </div>
        <Player />
      </div>
    );
  }
}
