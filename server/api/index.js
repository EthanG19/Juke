const router = require('express').Router()
const song = require('./song')
const album = require('./album')
const artist = require('./artist')




router.use('/albums', album)
// router.use('/artist', artist)
// router.use('/song', song)



module.exports = router
