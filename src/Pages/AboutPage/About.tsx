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
                <img  className="left" src="https://cdnb.artstation.com/p/assets/images/images/061/456/197/large/pablossky-av.jpg?1680826790"></img>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit illo molestias iure eos enim ratione, eius unde sint iusto, harum sunt odio velit tenetur magni nisi maxime corporis? Vero, cupiditate.
                Vitae, aliquid facilis laudantium repellat fugit rem saepe minus illum omnis ipsam doloremque modi voluptatem nihil ut fugiat quos perferendis fuga. Molestias quos aspernatur at sit dolorum soluta ullam harum!
                Ducimus, sapiente ab commodi, aspernatur rerum perspiciatis quis maxime, esse minus soluta non repellendus officia corrupti! Corporis sapiente aut hic consequatur, omnis enim, non nam corrupti officiis fugiat molestiae quam.
                Nesciunt totam voluptatum illo, odit at sint ipsa labore facilis amet quam eos? Error molestiae, tempora similique voluptatum illum voluptatem, dolorem doloremque, nostrum cumque est tempore consequatur cupiditate eum fugit.
                Voluptatibus dicta totam consectetur fuga qui modi, id rem ducimus sit labore fugiat natus odit suscipit consequuntur laboriosam doloribus illum quas dolor veritatis asperiores. Harum laudantium sed laboriosam soluta doloribus!
                Quo ipsam odio sint veritatis inventore, sed eveniet, et officia laudantium earum, animi quisquam dolorum! Officia earum accusantium sit totam quibusdam, omnis excepturi quia illo labore minus laborum deserunt explicabo?
                Cupiditate iusto, repellat eius accusantium aliquid beatae molestias? Error voluptas magnam recusandae! Molestias repellendus, aliquam dolorum, consequatur blanditiis optio quod labore necessitatibus, incidunt accusantium odio! Neque, suscipit. Quas, hic pariatur.
                Veritatis quasi deserunt cumque vero fuga cupiditate illo eveniet iste adipisci. Qui, praesentium expedita fugit quibusdam quaerat ullam ducimus, iste voluptates ab error, voluptatibus nostrum quo atque sunt tenetur facere?
                Assumenda suscipit repudiandae molestiae! Harum placeat repellat voluptas deleniti, qui et deserunt dolor impedit suscipit reiciendis nobis ex veritatis vel eligendi quaerat at temporibus blanditiis dicta minima sequi repudiandae molestiae!
                Repellat, voluptatem? Natus rem facilis incidunt eaque ullam mollitia quasi magni nostrum, exercitationem aliquam eius labore, delectus sint recusandae debitis! Eligendi nemo exercitationem esse nobis obcaecati optio sequi provident quidem?</p>
              </article>
            <h1>Skills / Hobbies / Learning</h1>
            
            <div className="gridAbout row">
            <div className="col-lg-1 col-sm-6 music tag" >
            <LinkContainer to="/music">
                <Nav.Link>
                  FL Studio
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 music tag">
              <LinkContainer to="/music">
                <Nav.Link>
                  Music Production
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 art tag">
              <LinkContainer to="/gallery">
                <Nav.Link>
                  Blender
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 art tag">
              <LinkContainer to="/gallery">
                <Nav.Link>
                  Digital Drawing
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 art tag">
              <LinkContainer to="/gallery">
                <Nav.Link>
                  Traditional Art
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 art tag">
              <LinkContainer to="/gallery">
                <Nav.Link>
                  Animations
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 art tag">
              <LinkContainer to="/gallery">
                <Nav.Link>
                  Video Editing
                </Nav.Link>
              </LinkContainer>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
              <a href="https://github.com/Pablossky/" className="nav-link">JAVA</a>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
              <a href="https://github.com/Pablossky/" className="nav-link">C</a>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
              <a href="https://github.com/Pablossky/" className="nav-link">C#</a>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
              <a href="https://github.com/Pablossky/" className="nav-link">HTML</a>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
              <a href="https://github.com/Pablossky/" className="nav-link">React</a>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
              <a href="https://github.com/Pablossky/" className="nav-link">Typescript</a>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
              <a href="https://github.com/Pablossky/" className="nav-link">Matlab</a>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
              <a href="https://github.com/Pablossky/" className="nav-link">Linux</a>
            </div>
            <div className="col-lg-1 col-sm-6 techno tag">
              <a href="https://github.com/Pablossky/" className="nav-link">LaTeX</a>
            </div>
            <div className="col-lg-1 col-sm-6 empty tag"></div>
            <div className="col-lg-1 col-sm-6 empty tag"></div>
            <div className="col-lg-1 col-sm-6 language tag">English</div>
            <div className="col-lg-1 col-sm-6 language tag">Polish</div>
            <div className="col-lg-1 col-sm-6 language tag">Italian</div>
            <div className="col-lg-1 col-sm-6 language tag">Japanese</div>
            <div className="col-lg-1 col-sm-6 empty tag"></div>
            <div className="col-lg-1 col-sm-6 empty tag"></div>
            </div>
        </Container>
  );
}