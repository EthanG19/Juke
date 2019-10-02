const db = require("./db");
const Artist = require("./artist.js");
const Album = require("./album.js");
const Song = require("./song.js");

// ...and give them some nice associations here!

Song.belongsTo(Album, { as: "album" });
Song.belongsTo(Artist, { as: "artist" });
Album.belongsTo(Artist, { as: "artist" });
Album.hasMany(Song, { as: "song" });
Artist.hasMany(Album, { as: "album" });
Artist.hasMany(Song, { as: "song" });

module.exports = {
  db,
  Artist,
  Album,
  Song
};
