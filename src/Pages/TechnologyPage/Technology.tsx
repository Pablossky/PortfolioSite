import { Container } from "react-bootstrap"

import './Technology.css'

export const TechnologyPage = () => {

    const items:{url:string, alt:string, header:string, bgpos?:string, bottom?:string,}[] = [
        {url:"https://i.imgur.com/9xOAumD.png", alt:"I've started being interested in programming when I was in technical school. I've started from C++. Later I tried Python, but it didn't work for me. During education at University, I've returned to C++ and C. I enjoy talking about different technologies and their capabilities. I've decided what I want to do professionally in the future and started learning different tools and concepts that help in IT. There will always be something new to learn to broaden my perspective.", header:"The path I take.", bgpos:"center", bottom:"100px"},
        {url:"https://i.imgur.com/Kda0wCL.png", alt:"Studies make us learn plenty of different languages and software programs. With most of them my journeys were short, but some of them like for example Matlab are quite handy, and I got used to liking them. Fortunately, I had chance to learn better the basics of C and JAVA. During one of the intersemestral breaks, I've learned basics of C#. Today I'm still working with it on my side project. In the meantime, I'm learning more front-end technologies. I'm starting to like HTML, React and Typescript, however my main goal is to be able to create full applications.", header:"Process of learning.", bgpos:"top", bottom:"50px"},
        {url:"https://i.imgur.com/FilM8u7.png", alt:"There are plenty of branches of IT that are interesting to me, so I hope I'll have enough determination to learn about all of them in the future. Some of them probably will be a tough nut to crack, but I hope I'll manage somehow learning them.", header:"Constant progress.", bgpos:"center", bottom:"100px"},
     ];
     
return (
        <>
         {items.map((items)=>{
                return (<Container className="headTechno">
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