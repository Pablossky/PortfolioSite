import { Masonry } from 'react-plock';
import { Container } from "react-bootstrap"

import './Graphic.css'

export const GraphicPage = () => {

    const items:{url:string, alt:string, header:string, bgpos?:string, bottom?:string,}[] = [
        {url:"https://cdnb.artstation.com/p/assets/images/images/061/612/063/large/pablossky-workinprogress.jpg?1681229266", alt:"to do-", header:"Passion to create new worlds.", bgpos:"center", bottom:"100px"},
        {url:"https://i.imgur.com/TGTAiD4.png", alt:"to do-", header:"Process of learning.", bgpos:"top", bottom:"50px"},
        {url:"https://i.imgur.com/Zj3x92X.png", alt:"to do-", header:"Constant progress.", bgpos:"center", bottom:"100px"},
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