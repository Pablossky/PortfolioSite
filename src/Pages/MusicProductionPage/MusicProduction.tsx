
import { Container } from "react-bootstrap"

import './MusicProduction.css'

export const MusicProductionPage = () => {

    const items:{url:string, alt:string, header:string, bgpos?:string, bottom?:string,}[] = [
        {url:"https://i.imgur.com/gsNe5Pv.png", alt:"First memories I have with me being interested in music are quite old. The thing that mostly inspired me was the chance of creating something unique. Every artist with some experience leaks own character into art they made. Years later I finally had given myself a chance to test my music capabilities. The first instrument I bought was ukulele. The reason behind this was its simplicity. After it clicking for me I was hyped enough to try another instruments and that's how I bought my next instrument - Bass guitar. I enjoy its sound and the way of how my favorite musicians use it in their art. Months later I decided to create music also on PC. I tried software named FL Studio and I stayed with it. Every way of interacting with sounds influence on our mood and thoughts. That's the great power that music have.", header:"How I started making music.", bgpos:"center"},
        {url:"https://i.imgur.com/bn5AZev.png", alt:"Years after beginning of creating music I can tell how important is to practice regurarly. Playing one instrument clearly differ from producing music. It requires more overall knowledge how various things works. It takes a lot of time to get to know how to mix sounds, compose melodies or how to properly use different instruments. Experimenting with many genres broaden your creativity. As I mention in About Me page I'm big fan of jazz music, althought musicians I respect most are known for their revolutionary approach and for not sticking with one genre. There are a lot of musicians who can change not only our perception of music, but even of the world around us. Lot of us heard about geniuses like Tchaikovsky, Mozart, Bach or these modern ones like Zimmer, Williams or Yiruma, but for me Ryuichi Sakamoto will be all-time master. Sakomoto and other personal favorites like RADWIMPS or Stromae keep me going forward not only on my music path.", header:"What it means to work with sounds.", bgpos:"top"},
        {url:"https://i.imgur.com/OFzxNUb.png", alt:"I tend to reflect on many things from a philosophical standpoint    which makes me discover bizarre connections between them.I'm   passionate about learning how different cultures shape people. I  believe that's one thing we can't learn from books alone. I hope     that my future brings me many opportunities to travel around the    world and learn it first hand. I believe that everyone treads on a     unique path and learn things in their own speed. It's important to  keep focus on your own progress, rather than comparing yourself to   the others. I keep my own pace at developing myself by balancing  work and hobbies. Even small changes can add up and make big impact  over time. That's why in I try to utilize my various skills in my    projects. I love cooperating with others and learning from them as     I'm easily inspired by people's passion as devotion to their craft.     I tend to reflect on many things from a philosophical standpoint    which makes me discover bizarre connections between them.I'm   passionate about learning how different cultures shape people. I  believe that's one thing we can't learn from books alone. I hope     that my future brings me many opportunities to travel around the    world and learn it first hand. I believe that everyone treads on a     unique path and learn things in their own speed. It's important to  keep focus on your own progress, rather than comparing yourself to   the others. I keep my own pace at developing myself by balancing  work and hobbies. Even small changes can add up and make big impact  over time. That's why in I try to utilize my various skills in my    projects. I love cooperating with others and learning from them as     I'm easily inspired by people's passion as devotion to their craft.", header:"Playing together.", bgpos:"center", bottom:"200px"},
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