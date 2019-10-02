const router = require('express').Router()
const db = require('../db')



router.get('/', async (req, res, next) => {
    const albums = await db.Album.findAll({
        include: [{
            model: db.Artist, 
            as:  'artist',
        }]        
    })
    res.status(200).json(albums)
})

router.get('/:albumid', async(req, res, next)=>{
    const id = req.params.albumid
    const album = await db.Album.findOne({
        include:[{
            model: db.Song, as: 'song'
        }],
        where: {
            id: id
        }
    })
    
    res.status(200).json(album)
})

module.exports = router