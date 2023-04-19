import { Autocomplete, Grid, TextField } from "@mui/material"

const SearchBar = ({ artists, cities, genres, setArtistValue, setCityValue, setGenreValue, artistValue, cityValue, genreValue }) => {

    return (
        <Grid container>
            <Grid item xs={12} sm={4}>
                <Autocomplete
                    disablePortal
                    value={artistValue}
                    isOptionEqualToValue={(option, value) => option.name === value.name}
                    onInputChange={(event, newValue) => { setArtistValue(newValue) }}
                    id="combo-box-artist"
                    options={artists}
                    xs={{ width: 300 }}
                    sm={{ width: 300 }}
                    md={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Artista" />}
                    style={{ margin: '10px' }}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Autocomplete
                    disablePortal
                    value={cityValue}
                    isOptionEqualToValue={(option, value) => option.name === value.name}
                    onInputChange={(event, newValue) => { setCityValue(newValue) }}
                    id="combo-box-city"
                    options={cities}
                    xs={{ width: 300 }}
                    sm={{ width: 300 }}
                    md={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Ciudad" />}
                    style={{ margin: '10px' }}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Autocomplete
                    disablePortal
                    value={genreValue}
                    isOptionEqualToValue={(option, value) => option.name === value.name}
                    onInputChange={(event, newValue) => { setGenreValue(newValue) }}
                    id="combo-box-gender"
                    options={genres}
                    xs={{ width: 300 }}
                    sm={{ width: 300 }}
                    md={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Género" />}
                    style={{ margin: '10px' }}
                />
            </Grid>
        </Grid>
    )
}

export default SearchBar