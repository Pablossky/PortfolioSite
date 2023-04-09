import { Container } from "react-bootstrap"
import ReactPlayer from "react-player"

import './Music.css'

export const MusicPage = () => {
    return (
        <Container className="headMusic"> 
            <h1>There's some of my tracks.</h1>
            <Container className="react-player"> 
                <ReactPlayer
                    url='https://soundcloud.com/pablossky/better-of-us'
                    width='100%'
                    height='100%'
                />
                <ReactPlayer
                    url='https://soundcloud.com/pablossky/scattered-ice'
                    width='100%'
                    height='100%'
                />
                <ReactPlayer
                    url='https://soundcloud.com/pablossky/darker'
                    width='100%'
                    height='100%'
                />
            </Container>
        </Container>
    )
}