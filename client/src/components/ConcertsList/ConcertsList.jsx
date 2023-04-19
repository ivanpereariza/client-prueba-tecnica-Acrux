import { Grid, LinearProgress } from "@mui/material"
import ConcertsDetails from "../ConcertsDetails/ConcertsDetails"

const ConcertsList = ({ concerts }) => {

    return (
        concerts ?
            <Grid container spacing={2}>
                {
                    concerts?.length > 0 ?
                        concerts?.map(concert => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={concert._id}>
                                    <ConcertsDetails {...concert} />
                                </Grid>
                            )
                        })
                        :
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <h1 >Lo sentimos...</h1>
                            <h2 >No hay conciertos disponibles</h2>
                        </Grid>
                }
            </Grid>
            :
            <LinearProgress />
    )
}

export default ConcertsList