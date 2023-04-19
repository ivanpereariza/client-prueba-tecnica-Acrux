import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { useContext } from "react"
import { modalContext } from "../../contexts/modal.context"

const ConcertsDetails = ({ _id, artist, city, genre }) => {

    const { openModal } = useContext(modalContext)

    return (
        <Card onClick={() => openModal(_id)}>
            <CardActionArea>
                <CardMedia
                    component={"img"}
                    height="140"
                    image="./../../../img/image-default.jpg"
                    alt={`${artist} - ${city} concert`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {artist}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Ciudad: {city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Género: {genre}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ConcertsDetails