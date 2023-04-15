import { Container, Image } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'

import './Home.css'

export const HomePage = () => {

    const items:{url:string, alt:string, bgpos?:string}[] = [
        {url:"https://i.imgur.com/gsNe5Pv.png", alt:"Music Production", bgpos:"center"},
        {url:"https://i.imgur.com/TGTAiD4.png", alt:"Arts", bgpos:"top"},
        {url:"https://cdnb.artstation.com/p/assets/images/images/061/612/063/large/pablossky-workinprogress.jpg?1681229266", alt:"Blender", bgpos:"center"},
        {url:"https://i.imgur.com/9xOAumD.png", alt:"Programming", bgpos:"center"},
     ];
     
    return (
         <>
        <Carousel variant="dark" interval={5000}>
            {items.map((items)=>{
                return (<Carousel.Item className="slideshow">
                <div
                style={{backgroundImage: "url("+items.url+")", 
                        backgroundPosition: items.bgpos ? items.bgpos : "center"}}
                ></div>
                <Carousel.Caption>
                <h3>{items.alt}</h3>
                </Carousel.Caption>
            </Carousel.Item>)
            })}
            
        </Carousel><Container className="headHome">
        <Container className="textHome">
            <p>Hi! I'm Paweł ("Pablossky") and this site was made to introduce myself better. I wanted to have some internet medium where I can freely present everything I want in a way that I like and what I'm doing in free time. Since I work with various media (music, art, coding... etc.) I had to had some space to share it. Keeping these things in mind I created project of my personal site in my mind.</p>
            <p>When it came to realisation first attempt I made was using JAVA framework Spring with MAVEN (Front-end was just basic HTML code). As I keep progressing with it learning new tools, thought, that I'm overkilling it has crossed my mind. I've started everything from scratch again. This version is written using REACT, JavaScript and TypeScript including HTML and Bootstrap. I like how it works and I'm proud to share it since it's my first "front-end" project.</p>
            <p>Thank you for visiting. </p>
        </Container>
        </Container></>
    )
}