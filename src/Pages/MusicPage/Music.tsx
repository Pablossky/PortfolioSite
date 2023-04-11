import { Container } from "react-bootstrap"
import ReactPlayer from "react-player"

import './Music.css'

export const MusicPage = () => {
    return (
        <Container className="headMusic"> 
            <h1>There's some of my tracks.</h1>

            <article className="article">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit illo molestias iure eos enim ratione, eius unde sint iusto, harum sunt odio velit tenetur magni nisi maxime corporis? Vero, cupiditate.
                Vitae, aliquid facilis laudantium repellat fugit rem saepe minus illum omnis ipsam doloremque modi voluptatem nihil ut fugiat quos perferendis fuga. Molestias quos aspernatur at sit dolorum soluta ullam harum!
                Ducimus, sapiente ab commodi, aspernatur rerum perspiciatis quis maxime, esse minus soluta non repellendus officia corrupti! Corporis sapiente aut hic consequatur, omnis enim, non nam corrupti officiis fugiat molestiae quam.
                Nesciunt totam voluptatum illo, odit at sint ipsa labore facilis amet quam eos? Error molestiae, tempora similique voluptatum illum voluptatem, dolorem doloremque, nostrum cumque est tempore consequatur cupiditate eum fugit.
                Voluptatibus dicta totam consectetur fuga qui modi, id rem ducimus sit labore fugiat natus odit suscipit consequuntur laboriosam doloribus illum quas dolor veritatis asperiores. Harum laudantium sed laboriosam soluta doloribus!
                Quo ipsam odio sint veritatis inventore, sed eveniet, et officia laudantium earum, animi quisquam dolorum! Officia earum accusantium sit totam quibusdam, omnis excepturi quia illo labore minus laborum deserunt explicabo?
                </p>
            </article>

            <Container className="react-player-cointainer"> 
                <ReactPlayer
                    className="react-player"
                    url='https://soundcloud.com/pablossky/hiskbit59aoa'
                    width='100%'
                    height='100%'
                />
                <ReactPlayer
                    className="react-player"
                    url='https://soundcloud.com/pablossky/scattered-ice'
                    width='100%'
                    height='100%'
                />
                <ReactPlayer
                    className="react-player"
                    url='https://soundcloud.com/pablossky/darker'
                    width='100%'
                    height='100%'
                />
            </Container>

            <article className="article">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit illo molestias iure eos enim ratione, eius unde sint iusto, harum sunt odio velit tenetur magni nisi maxime corporis? Vero, cupiditate.
                Vitae, aliquid facilis laudantium repellat fugit rem saepe minus illum omnis ipsam doloremque modi voluptatem nihil ut fugiat quos perferendis fuga. Molestias quos aspernatur at sit dolorum soluta ullam harum!
                Ducimus, sapiente ab commodi, aspernatur rerum perspiciatis quis maxime, esse minus soluta non repellendus officia corrupti! Corporis sapiente aut hic consequatur, omnis enim, non nam corrupti officiis fugiat molestiae quam.
                Nesciunt totam voluptatum illo, odit at sint ipsa labore facilis amet quam eos? Error molestiae, tempora similique voluptatum illum voluptatem, dolorem doloremque, nostrum cumque est tempore consequatur cupiditate eum fugit.
                Voluptatibus dicta totam consectetur fuga qui modi, id rem ducimus sit labore fugiat natus odit suscipit consequuntur laboriosam doloribus illum quas dolor veritatis asperiores. Harum laudantium sed laboriosam soluta doloribus!
                Quo ipsam odio sint veritatis inventore, sed eveniet, et officia laudantium earum, animi quisquam dolorum! Officia earum accusantium sit totam quibusdam, omnis excepturi quia illo labore minus laborum deserunt explicabo?
                </p>
            </article>

            <Container className="react-player-cointainer"> 
                <ReactPlayer
                    className="react-player"
                    url='https://www.youtube.com/watch?v=o9eYnu6DB80'
                    controls={true}
                />
                <ReactPlayer
                    className="react-player"
                    url='https://www.youtube.com/watch?v=vxNZL_Vno24'
                    controls={true}
                />
                <ReactPlayer
                    className="react-player"
                    url='https://www.youtube.com/watch?v=BoNpZk_-s-I'
                    controls={true}
                />
            </Container>

        </Container>
    )
}