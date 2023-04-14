import { Masonry } from 'react-plock';
import { Container } from "react-bootstrap"

import './Graphic.css'

export const GraphicPage = () => {

    const items:{url:string, alt:string, header:string, bgpos?:string, bottom?:string,}[] = [
        {url:"https://cdnb.artstation.com/p/assets/images/images/061/612/063/large/pablossky-workinprogress.jpg?1681229266", alt:"That's one among plenty of reasons which led me to develop many     hobbies connected with music, art and technology. The best and the  worst thing about having such a selection of hobbies is that I   can't rally decide which one I love the most. I subscribe to a    philosophy that treats every hobby as a form of art. Because of    that, every music track or art piece I make, or piece of code I    write gives me real sense of accomplishment and fullfilment. The   reason I wake up each morning is to make progress in these fields     as much as I can, that's why I'm putting a lot of time and effort   into my projects. I like to challenge myself to improve my skills     every day.", header:"Passion to create new worlds.", bgpos:"center", bottom:"100px"},
        {url:"https://i.imgur.com/TGTAiD4.png", alt:"That's one among plenty of reasons which led me to develop many     hobbies connected with music, art and technology. The best and the  worst thing about having such a selection of hobbies is that I   can't rally decide which one I love the most. I subscribe to a    philosophy that treats every hobby as a form of art. Because of    that, every music track or art piece I make, or piece of code I    write gives me real sense of accomplishment and fullfilment. The   reason I wake up each morning is to make progress in these fields     as much as I can, that's why I'm putting a lot of time and effort   into my projects. I like to challenge myself to improve my skills     every day.", header:"Process of learning.", bgpos:"top", bottom:"50px"},
        {url:"https://i.imgur.com/Zj3x92X.png", alt:"I tend to reflect on many things from a philosophical standpoint    which makes me discover bizarre connections between them.I'm   passionate about learning how different cultures shape people. I  believe that's one thing we can't learn from books alone. I hope     that my future brings me many opportunities to travel around the    world and learn it first hand. I believe that everyone treads on a     unique path and learn things in their own speed. It's important to  keep focus on your own progress, rather than comparing yourself to   the others. I keep my own pace at developing myself by balancing  work and hobbies. Even small changes can add up and make big impact  over time. That's why in I try to utilize my various skills in my    projects. I love cooperating with others and learning from them as     I'm easily inspired by people's passion as devotion to their craft.     I tend to reflect on many things from a philosophical standpoint    which makes me discover bizarre connections between them.I'm   passionate about learning how different cultures shape people. I  believe that's one thing we can't learn from books alone. I hope     that my future brings me many opportunities to travel around the    world and learn it first hand. I believe that everyone treads on a     unique path and learn things in their own speed. It's important to  keep focus on your own progress, rather than comparing yourself to   the others. I keep my own pace at developing myself by balancing  work and hobbies. Even small changes can add up and make big impact  over time. That's why in I try to utilize my various skills in my    projects. I love cooperating with others and learning from them as     I'm easily inspired by people's passion as devotion to their craft.", header:"Constant progress.", bgpos:"center", bottom:"100px"},
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