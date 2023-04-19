const router = require("express").Router()

const Concert = require("../models/Concert.model")

router.get('/getAllConcerts', (req, res, next) => {

    Concert
        .find()
        .sort({ artist: 1 })
        .then(concerts => res.json({ totalConcerts: concerts.length, data: concerts }))
        .catch(err => next(err))
})

router.get('/getAllArtists', (req, res, next) => {
    Concert
        .find()
        .then(concerts => {
            const artists = concerts.map(concert => concert.artist)
            const uniqueArtists = [...new Set(artists)]
            res.json({ totalArtists: uniqueArtists.length, data: uniqueArtists })
        })
        .catch(err => next(err))
})

router.get('/getAllCities', (req, res, next) => {
    Concert
        .find()
        .then(concerts => {
            const cities = concerts.map(concert => concert.city)
            const uniqueCities = [...new Set(cities)]
            res.json({ totalCities: uniqueCities.length, data: uniqueCities })
        })
        .catch(err => next(err))
})

router.get('/getAllGenres', (req, res, next) => {
    Concert
        .find()
        .then(concerts => {
            const genres = concerts.map(concert => concert.genre)
            const uniqueGenres = [...new Set(genres)]
            res.json({ totalGenres: uniqueGenres.length, data: uniqueGenres })
        })
        .catch(err => next(err))
})

router.get('/getConcert/:id', (req, res, next) => {

    const { id } = req.params

    Concert
        .findById(id)
        .then(concert => res.json(concert))
        .catch(err => next(err))
})

router.get('/getConcertsByGenre/:genre', (req, res, next) => {

    const { genre } = req.params

    Concert
        .find({ genre })
        .then(concerts => res.json({ totalConcerts: concerts.length, data: concerts }))
        .catch(err => next(err))
})

router.get('/getConcertsByCity/:cityStr', (req, res, next) => {

    let { cityStr } = req.params

    Concert
        .find({ city: { $regex: new RegExp(cityStr, 'i') } })
        .then(concerts => res.json({ totalConcerts: concerts.length, data: concerts }))
        .catch(err => next(err))
})

router.get('/getConcertsByArtist/:artistStr', (req, res, next) => {

    let { artistStr } = req.params

    Concert
        .find({ artist: { $regex: new RegExp(artistStr, 'i') } })
        .then(concerts => res.json({ totalConcerts: concerts.length, data: concerts }))
        .catch(err => next(err))
})


router.get('/searchConcerts', (req, res, next) => {

    const { artist, city, genre, page = 1 } = req.query

    const promises = [Concert.find({
        artist: { $regex: new RegExp(artist, 'i') },
        city: { $regex: new RegExp(city, 'i') },
        genre: { $regex: new RegExp(genre, 'i') }
    }).limit(12).skip((page - 1) * 10).sort({ artist: 1 }),
    Concert.count({
        artist: { $regex: new RegExp(artist, 'i') },
        city: { $regex: new RegExp(city, 'i') },
        genre: { $regex: new RegExp(genre, 'i') }
    })]

    Promise
        .all(promises)
        .then(([fiteredConcerts, allConcertsCount]) => {
            console.log(allConcertsCount)
            res.json({ totalConcertsFiltered: fiteredConcerts.length, data: fiteredConcerts, totalConcerts: allConcertsCount })
        })
        .catch(err => next(err))
})


router.get('/getConcertsByDate', (req, res, next) => {

    const { startDate, finishDate } = req.query

    Concert
        .find({ date: { $gte: startDate, $lte: finishDate } })
        .then(concerts => res.json({ totalConcerts: concerts.length, data: concerts }))
        .catch(err => next(err))
})

router.post('/createConcert', (req, res, next) => {

    const { artist, city, genre, date, description } = req.body

    Concert
        .create({ artist, city, genre, date, description })
        .then(concert => res.json(concert))
        .catch(err => next(err))
})


module.exports = router