const Sequelize = require("sequelize");
const db = require("./db.js");

const Album = db.define("album", {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  artworkURL: {
    type: Sequelize.STRING,
    defaultValue: "default-album.jpg"
  }
});

module.exports = Album;
