import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

import "./About.css"

const divElement = document.querySelector('div');
if (divElement) {
  divElement.style.backgroundColor = "#F2F2F2";
}

export const AboutPage = () => {
    return (
        <Container className="headAbout">
            <h1>Hi from About!</h1>
              <article className="article">
                <img src="https://cdnb.artstation.com/p/assets/images/images/061/456/197/large/pablossky-av.jpg?1680826790"></img>
                <p>
                I'm Paweł, as you probably have guessed, a 22 year old robotics and automation engineering student at Silesian University of Technology. Beeing powered by jazz music, decadent literature and cinemtic maasterpieces my mind is filled with ideas, both in and outside of my area of study.
                </p>
                <p>
                That's one among plenty of reasons which led me to develop many hobbies connected with music, art and technology. The best and the worst thing about having such a selection of hobbies is that I can't rally decide which one I love the most. I subscribe to a philosophy that treats every hobby as a form of art. Because of that, every music track or art piece I make, or piece of code I write gives me real sense of accomplishment and fullfilment. The reason I wake up each morning is to make progress in these fields as much as I can, that's why I'm putting a lot of time and effort into my projects. I like to challenge myself to improve my skills every day.
                </p>
                <p>
                I tend to reflect on many things from a philosophical standpoint which makes me discover bizarre connections between them.I'm passionate about learning how different cultures shape people. I believe that's one thing we can't learn from books alone. I hope that my future brings me many opportunities to travel around the world and learn it first hand. I believe that everyone treads on a unique path and learn things in their own speed. It's important to keep focus on your own progress, rather than comparing yourself to the others. I keep my own pace at developing myself by balancing work and hobbies. Even small changes can add up and make big impact over time. That's why in I try to utilize my various skills in my projects. I love cooperating with others and learning from them as I'm easily inspired by people's passion as devotion to their craft.
                </p>
              </article>
            <h1>Skills / Hobbies / Learning</h1>
            
            <div className="gridAbout row">
            <div className="col-lg-1 col-sm-6 music tag" >
            <LinkContainer to="/about/musicproduction">
                <Nav.Link>
                  FL Studio
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 music tag">
              <LinkContainer to="/about/musicproduction">
                <Nav.Link>
                  Music Production
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 art tag">
              <LinkContainer to="/about/graphic">
                <Nav.Link>
                  Blender
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 art tag">
              <LinkContainer to="/about/graphic">
                <Nav.Link>
                  Digital Drawing
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 art tag">
              <LinkContainer to="/about/graphic">
                <Nav.Link>
                  Traditional Art
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 art tag">
              <LinkContainer to="/about/graphic">
                <Nav.Link>
                  Animations
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 art tag">
              <LinkContainer to="/about/graphic">
                <Nav.Link>
                  Video Editing
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
            <LinkContainer to="/about/technology">
                <Nav.Link>
                  JAVA
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
            <LinkContainer to="/about/technology">
                <Nav.Link>
                  C
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
            <LinkContainer to="/about/technology">
                <Nav.Link>
                  C#
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
            <LinkContainer to="/about/technology">
                <Nav.Link>
                  HTML
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
            <LinkContainer to="/about/technology">
                <Nav.Link>
                  React
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
            <LinkContainer to="/about/technology">
                <Nav.Link>
                  Typescript
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
            <LinkContainer to="/about/technology">
                <Nav.Link>
                  Matlab
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
            <LinkContainer to="/about/technology">
                <Nav.Link>
                  Linux
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
            <LinkContainer to="/about/technology">
                <Nav.Link>
                  LaTeX
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 empty tag"></div>
            <div className="col-lg-1 col-sm-6 empty tag"></div>
            <div className="col-lg-1 col-sm-6 language tag">
              <LinkContainer to="/about/language">
                <Nav.Link>
                  English
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 language tag">
              <LinkContainer to="/about/language">
                <Nav.Link>
                  Polish
                </Nav.Link>
              </LinkContainer></div>
            <div className="col-lg-1 col-sm-6 language tag">
              <LinkContainer to="/about/language">
                <Nav.Link>
                  Italian
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 language tag">
              <LinkContainer to="/about/language">
                <Nav.Link>
                  Japanese
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 empty tag"></div>
            <div className="col-lg-1 col-sm-6 empty tag"></div>
            </div>
        </Container>
  );
}