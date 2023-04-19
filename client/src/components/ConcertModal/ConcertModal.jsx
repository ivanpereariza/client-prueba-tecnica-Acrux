import { Button, Card, CardContent, CardMedia, Modal, Skeleton, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import concertServices from "../../services/concerts.services"

const ConcertModal = ({ showModal, setShowModal, selectedConcert }) => {

    const [concert, setConcert] = useState(undefined)

    useEffect(() => {
        getConcert()

        return () => {
            setConcert(undefined)
        }
    }, [showModal])

    const getConcert = () => {
        if (selectedConcert) {
            concertServices
                .getConcert(selectedConcert)
                .then(({ data }) => setConcert(data))
                .catch((err) => console.log(err))
        }
    }

    const newDate = new Date(concert?.date)

    const date = newDate.toLocaleString().split(',')[0]

    const time = newDate.toLocaleTimeString().split(' ')[0]
    const timeFormed = time.slice(0, 2) + ':' + time.slice(3, 5)

    return (
        <>
            {
                selectedConcert &&

                <Modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    disablePortal
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '30px',
                    }}

                >
                    <Card style={{ maxWidth: '700px' }}>
                        {
                            concert ?
                                <>
                                    <CardMedia
                                        component={"img"}
                                        height="140"
                                        image="./../../../img/image-default.jpg"
                                        alt={`${concert?.artist} - ${concert?.city} concert`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {concert?.artist} - {concert?.city} - {date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Ciudad:</b> {concert?.city}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Género:</b> {concert?.genre}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Descripción:</b> {concert?.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Fecha:</b> {date} · <b>Hora:</b> {timeFormed}
                                        </Typography>
                                        <Typography align="center">
                                            <Button
                                                color="info"
                                                size="large"
                                                variant="contained"

                                            >¡Compra tus entradas!</Button>
                                        </Typography>
                                    </CardContent>
                                </>
                                :
                                <Stack style={{ margin: '15px' }}>
                                    <Skeleton variant="rectangular" animation='wave' width={700} height={100} />
                                    <Skeleton style={{ marginTop: '-15px' }} variant="text" animation='wave' width={700} height={200} />
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-30px' }}>
                                        <Skeleton variant="text" animation='wave' width={230} height={75} />
                                    </div>
                                </Stack>
                        }
                    </Card>

                </Modal>
            }
        </>
    )
}

export default ConcertModal