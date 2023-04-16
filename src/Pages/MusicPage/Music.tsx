import { Container } from "react-bootstrap"
import ReactPlayer from "react-player"

import './Music.css'

export const MusicPage = () => {
    return (
        <Container className="headMusic"> 
            <h1>There's some of my tracks.</h1>

            <article className="article">
                <p>Welcome to my evolving musical world, where my different ideas and experiments meet in a constantly evolving creative process. I'm very passionate about music, and I'm trying my best to get better at it every time I create. I want to share with you some of my tracks. From beginning to my recent works I've changed a lot not only in knowledge but also in picking genres or inspirations. I'm exploring the huge world of music, trying to find my own places in it. I humbly invite you to follow my growth and development as a musician, and to join me on a journey of musical discovery or just a simple chat about it. With a range of styles and influences, my music is always evolving and changing, not always in a good way, but in art nothing is straightforward. The beginning was quite hard. My next step was to upload tracks on social media.
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
                <p>I believe that music should be a source of fun and excitement, and I try to influence every composition with a sense of joy and playfulness. I want to be able to create sounds that will inspire others to express their feelings and thoughts. From the upbeat rhythms of jazz-inspired pieces to the electrifying sounds of synthesizers and electronic basses, I will let you loose and have fun with my music. Behind all the jokes and funny aspects, I treat producing seriously. I won't give up doing this, even if I'll be running out of the time in the future.
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