import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar/SearchBar"
import ConcertsList from "../components/ConcertsList/ConcertsList"
import concertServices from "../services/concerts.services"
import { Container, Pagination, PaginationItem, Stack } from "@mui/material"

const Home = () => {

    const [artists, setArtists] = useState([])
    const [cities, setCities] = useState([])
    const [genres, setGenres] = useState([])
    const [pages, setPages] = useState(1)
    const [concerts, setConcerts] = useState(null)
    const [artistValue, setArtistValue] = useState('')
    const [cityValue, setCityValue] = useState('')
    const [genreValue, setGenreValue] = useState('')

    useEffect(() => {
        getArtists()
        getCities()
        getGenres()
    }, [])

    useEffect(() => {
        searchConcerts()
    }, [artistValue, cityValue, genreValue])

    const searchConcerts = () => {
        concertServices
            .searchConcerts(artistValue, cityValue, genreValue)
            .then(({ data }) => {
                setPages(Math.ceil(data.totalConcerts / 12))
                setConcerts(data.data)
            })
            .catch((err) => console.log(err))
    }



    const getArtists = () => {
        concertServices
            .getAllArtists()
            .then(({ data }) => setArtists(data.data))
            .catch((err) => console.log(err))
    }

    const getCities = () => {
        concertServices
            .getAllCities()
            .then(({ data }) => setCities(data.data))
            .catch((err) => console.log(err))
    }

    const getGenres = () => {
        concertServices
            .getAllGenres()
            .then(({ data }) => setGenres(data.data))
            .catch((err) => console.log(err))
    }

    const handlePagination = (e, page) => {
        concertServices
            .searchConcerts(artistValue, cityValue, genreValue, page)
            .then(({ data }) => setConcerts(data.data))
            .catch((err) => console.log(err))
    }

    console.log({ pages })

    return (
        <Container fixed>
            <SearchBar
                setArtistValue={setArtistValue}
                setCityValue={setCityValue}
                setGenreValue={setGenreValue}
                artists={artists}
                cities={cities}
                genres={genres}
                artistValue={artistValue}
                cityValue={cityValue}
                genreValue={genreValue}
            />
            <ConcertsList concerts={concerts} />
            {
                pages > 1 &&
                <Stack style={{ marginTop: '15px', alignItems: 'center' }}>
                    <Pagination count={pages} size="large" onChange={handlePagination} />
                </Stack>
            }

        </Container>
    )
}

export default Home