import { Container, Image } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'

import './Home.css'

export const HomePage = () => {

    return (
        <Container className="headHome"> 
            <h1>Hi from homepage!</h1>
            <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Lighthouse_Rubjerg_Knude%2C_Denmark%2C_2004_ubt.jpeg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="images.musicicon"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../../Assets/img/articon.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </Container>

        
    )
}