import axios from 'axios'

class ConcertServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/concerts`,
        })
    }

    getAllConcerts() {
        return this.api.get('/getAllConcerts')
    }

    getAllArtists() {
        return this.api.get('/getAllArtists')
    }

    getAllCities() {
        return this.api.get('/getAllCities')
    }

    getAllGenres() {
        return this.api.get('/getAllGenres')
    }

    getConcert(id) {
        return this.api.get(`/getConcert/${id}`)
    }

    getConcertsByGenre(genre) {
        return this.api.get(`/getConcertsByGenre/${genre}`)
    }

    getConcertsByCity(cityStr) {
        return this.api.get(`/getConcertsByCity/${cityStr}`)
    }

    getConcertsByArtist(artistStr) {
        return this.api.get(`/getConcertsByArtist/${artistStr}`)
    }

    searchConcerts(artist, city, genre, page) {
        return this.api.get(`/searchConcerts?artist=${artist}&city=${city}&genre=${genre}&page=${page}`)
    }
}

const concertServices = new ConcertServices()

export default concertServices