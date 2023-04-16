
import { Container } from "react-bootstrap"

import './MusicProduction.css'

export const MusicProductionPage = () => {

    const items:{url:string, alt:string, header:string, bgpos?:string, bottom?:string,}[] = [
        {url:"https://i.imgur.com/gsNe5Pv.png", alt:"The first memories I have with me being interested in music are quite old. The thing that mostly inspired me was the chance of creating something unique. Every artist with some experience leaks the own character into art they made. Years later, I finally had given myself a chance to test my music capabilities. The first instrument I bought was a ukulele. The reason behind this was its simplicity. After it clicking for me, I was hyped enough to try another instruments and that's how I bought my next instrument - Bass guitar. I enjoy its sound and the way of how my favorite musicians use it in their art. Months later I decided to create music also on PC. I tried software named FL Studio and I stayed with it. Every way of interacting with sounds influence on our mood and thoughts. That's the great power that music has.", header:"How I started making music.", bgpos:"center"},
        {url:"https://i.imgur.com/bn5AZev.png", alt:"Years after beginning of creating music, I can tell how important it is to practice regularly. Playing one instrument clearly differ from producing music. It requires more overall knowledge of how various things works. It takes a lot of time to get to know how to mix sounds, compose melodies or how to properly use different instruments. Experimenting with many genres broaden your creativity. As I mention in About Me page, I'm a big fan of jazz music, although musicians I respect most are known for their revolutionary approach and for not sticking with one genre. There are a lot of musicians who can change not only our perception of music, but even of the world around us. Lot of us heard about geniuses like Tchaikovsky, Mozart, Bach or these modern ones like Zimmer, Williams or Yiruma, but for me Ryuichi Sakamoto will be all-time master. Sakamoto and other personal favorites like RADWIMPS or Stromae keep me going forward, not only on my music path.", header:"What it means to work with sounds.", bgpos:"top"},
        {url:"https://i.imgur.com/OFzxNUb.png", alt:"Collaborating with others can also bring fresh perspectives and ideas. Playing music together with friends makes us having even more fun. Shared experience can deepen the bond between people. Even small talks about musical stuff are a great way to express your creativity. I enjoy discussing favorite musician's pieces, genres or even about music theory. Together with two of my childhood friends, we practice and play as a garage band. I wish I had more time to practice together, but even I have breaks from it and forget some tracks, we have a lot of fun learning to play them together again. Maybe if we stick to training regularly, we'll start to release our own songs.", header:"Playing together.", bgpos:"center", bottom:"200px"},
     ];
     
return (
        <>
         {items.map((items)=>{
                return (<Container className="headMusicProd">
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