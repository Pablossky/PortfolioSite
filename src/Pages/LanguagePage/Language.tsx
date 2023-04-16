import { Container } from "react-bootstrap"

import './Language.css'

export const LanguagePage = () => {

    const items:{url:string, alt:string, header:string, bgpos?:string, bottom?:string,}[] = [
        {url:"https://images.unsplash.com/photo-1599488059863-ac95a7f49193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", alt:"Knowing multiple languages allows you to communicate with a wider range of people. The world is full of amazing people to spend your time with. Many say that in today's world knowing English is a must-have quality and that's a fact, but there are a lot of people or societies, where some people can't speak various languages. If we are planning to spend a while in another country, learning its language is a good thing to do. I was doing my technical school apprenticeship in Italy, so months before flight I learned some basics and became a communicative worker, because not everybody in the workplace knew English. Learning a language gives us insight into its cultural background. For me, it's a valuable aspect, because I want to learn how different cultures have impacted on its representatives.", header:"Key to connect people.", bgpos:"center"},
        {url:"https://images.unsplash.com/photo-1632807062425-253c284c3b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", alt:" Learning multiple languages can expose you to different cultures and ways of thinking. This can help you develop a more nuanced and empathetic understanding of the world around you. The reason that's keeping me in the decision to become a polyglot is the fact that you may be more attuned to the ways that language shapes our perceptions. Learning multiple languages requires a certain level of flexibility and adaptability, which I think I have. For example, Japanese is totally different from Polish or English and learning it already has influenced even my philosophical way of being. I hope I become communicative Japanese user till end of 2023. Open-mind is a great quality to have in a constantly evolving world. The second important ability is to accept the changes and adapt to them.", header:"Different perspective.", bgpos:"top", bottom:"150px"},
        {url:"https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", alt:"Additional languages can provide you with a larger vocabulary to express your thoughts and feelings. This can be especially helpful when trying to express complex or nuanced ideas.  Every language has its own rules for grammar and syntax, which might affect the way you express yourself. By learning different languages, you can gain a better understanding of how language works and use that knowledge to communicate more effectively. This is also another advantage of having different perspectives - you can better understand and name your feelings. Also, excluding idioms, you can discover new metaphors to convey complex ideas.", header:"Express yourself.", bgpos:"center", bottom:"150px"},
     ];
     
return (
        <>
         {items.map((items)=>{
                return (<Container className="headLanguage">
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