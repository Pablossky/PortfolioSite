import { Container } from "react-bootstrap"

import './Graphic.css'

export const GraphicPage = () => {

    const items:{url:string, alt:string, header:string, bgpos?:string, bottom?:string,}[] = [
        {url:"https://cdnb.artstation.com/p/assets/images/images/061/612/063/large/pablossky-workinprogress.jpg?1681229266", alt:"Creating art is one of my greatest passions. From the moment I pick up a pencil or a brush, I feel a surge of energy and excitement that propels me forward. There is something about the act of creating that fills me with a sense of purpose and joy that I can't find anywhere else. When I am creating art, I feel completely free to express myself in any way I choose. I can experiment with different colors, shapes and explore new ideas and techniques. There is no limit to what I can create, and that sense of possibility is what drives me to keep going, even when the work becomes challenging. I am constantly seeking out new sources of inspiration, from the natural world to the works of other artists, and I am always striving to improve my skills and techniques. Whether I am painting a landscape or drawing a portrait, I am doing my best to find a way to progress.", header:"Passion to create new worlds.", bgpos:"center", bottom:"100px"},
        {url:"https://i.imgur.com/TGTAiD4.png", alt:"I try to put the time and effort to create regularly, whether it's through daily sketching, creating models or painting. Practice is important to hone skills and step forward. I often study the work of other artists, who I like, both past and present, to provide valuable insights and inspiration for myself. When I'm looking at others art I try to name things that impress me mostly, it can be colors, brush strokes or atmosphere for example. After analyzing, I try to recreate or implement these elements in my work to achieve a mix that I will call my style. I think repeatability is something I lack the most at the moment. Learning it would help me to realize projects like comics or animations, because they need to keep the same style for the time when we work on it.", header:"Process of learning.", bgpos:"top", bottom:"50px"},
        {url:"https://i.imgur.com/Zj3x92X.png", alt:"Mastering art takes time and patience, so sometimes it is hard to manage for me. There are times when I make short breaks from it to regain determination and will to create. However, I set my goals and I know that I have to keep going for the sake of achieving them. I often ask for opinions to fix my works and learn for the future projects. I try to work with different mediums, or challenge yourself to create in a new style. Stepping outside from my safe zone can help me discover new techniques and tools. Finally, I think that thrive to enjoy and create art is essential for mastering it.", header:"Constant progress.", bgpos:"center", bottom:"100px"},
     ];
     
return (
        <>
         {items.map((items)=>{
                return (<Container className="headGraphic">
                <article className="article">
                <h1>{items.header}</h1>
                <div className="formatImg">
                    <img    src={items.url} 
                            style={{backgroundPosition: items.bgpos ? items.bgpos : "center",
                                    bottom: items.bottom ? items.bottom : "auto"}}>
                    </img>
                </div>
                <p>{items.alt}</p>
                </article>
            </Container>)
            })}
        </>
    )
}