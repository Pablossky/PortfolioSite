import { Container, Image } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'

import './Home.css'

export const HomePage = () => {

    const items:{url:string, alt:string, bgpos?:string}[] = [
        {url:"https://cdnb.artstation.com/p/assets/images/images/061/504/475/large/pablossky-fg2.jpg?1680965487", alt:"Music Production", bgpos:"center"},
        {url:"https://cdnb.artstation.com/p/assets/images/images/061/511/853/large/pablossky-bez-nazwy.jpg?1680981186", alt:"Arts", bgpos:"top"},
        {url:"https://cdnb.artstation.com/p/assets/images/images/061/612/063/large/pablossky-workinprogress.jpg?1681229266", alt:"Blender", bgpos:"center"},
        {url:"https://photos.google.com/photo/AF1QipM9Nq4NvKeCAny44C06a4kCIVOFPmNKuV-z1FOu", alt:"Coding", bgpos:"center"},
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit illo molestias iure eos enim ratione, eius unde sint iusto, harum sunt odio velit tenetur magni nisi maxime corporis? Vero, cupiditate. Vitae, aliquid facilis laudantium repellat fugit rem saepe minus illum omnis ipsam doloremque modi voluptatem nihil ut fugiat quos perferendis fuga. Molestias quos aspernatur at sit dolorum soluta ullam harum! Ducimus, sapiente ab commodi, aspernatur rerum perspiciatis quis maxime, esse minus soluta non repellendus officia corrupti! Corporis sapiente aut hic consequatur, omnis enim, non nam corrupti officiis fugiat molestiae quam. Nesciunt totam voluptatum illo, odit at sint ipsa labore facilis amet quam eos? Error molestiae, tempora similique voluptatum illum voluptatem, dolorem doloremque, nostrum cumque est tempore consequatur cupiditate eum fugit. Voluptatibus dicta totam consectetur fuga qui modi, id rem ducimus sit labore fugiat natus odit suscipit consequuntur laboriosam doloribus illum quas dolor veritatis asperiores.
        </Container>
        </Container></>
    )
}