import { Container } from "react-bootstrap"

import './Technology.css'

export const TechnologyPage = () => {

    const items:{url:string, alt:string, header:string, bgpos?:string, bottom?:string,}[] = [
        {url:"https://i.imgur.com/9xOAumD.png", alt:"I've started being interested in programming when I was in technical school. I've started from C++. Later I tried Python, but it didn't work for me. During education at University I've returned to C++ and C. I enjoy talking about different technologies and their capabilities. I've decided what I want to do professionally in the future and started learning different tools and concepts that helps in IT. There will be always something new to learn to broaden my perspective.", header:"The path I take.", bgpos:"center", bottom:"100px"},
        {url:"https://i.imgur.com/Kda0wCL.png", alt:"Studies make us learn plenty of different languages and softwares. With most of them my journeys were short, but some of them like at example Matlab are quite handy and I got used to like them. Fortunately I had chance to learn better the basics of C and JAVA. During one of the intersemestral breaks I've learned bacics of C#. Today I'm still working with it on my side project. In the meantime I'm learning more front-end technologies.I'm starting to like HTML, React and Typescript, however my main goal is to be able to create full applications.", header:"Process of learning.", bgpos:"top", bottom:"50px"},
        {url:"https://i.imgur.com/FilM8u7.png", alt:"I tend to reflect on many things from a philosophical standpoint    which makes me discover bizarre connections between them.I'm   passionate about learning how different cultures shape people. I  believe that's one thing we can't learn from books alone. I hope     that my future brings me many opportunities to travel around the    world and learn it first hand. I believe that everyone treads on a     unique path and learn things in their own speed. It's important to  keep focus on your own progress, rather than comparing yourself to   the others. I keep my own pace at developing myself by balancing  work and hobbies. Even small changes can add up and make big impact  over time. That's why in I try to utilize my various skills in my    projects. I love cooperating with others and learning from them as     I'm easily inspired by people's passion as devotion to their craft.     I tend to reflect on many things from a philosophical standpoint    which makes me discover bizarre connections between them.I'm   passionate about learning how different cultures shape people. I  believe that's one thing we can't learn from books alone. I hope     that my future brings me many opportunities to travel around the    world and learn it first hand. I believe that everyone treads on a     unique path and learn things in their own speed. It's important to  keep focus on your own progress, rather than comparing yourself to   the others. I keep my own pace at developing myself by balancing  work and hobbies. Even small changes can add up and make big impact  over time. That's why in I try to utilize my various skills in my    projects. I love cooperating with others and learning from them as     I'm easily inspired by people's passion as devotion to their craft.", header:"Constant progress.", bgpos:"center", bottom:"100px"},
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