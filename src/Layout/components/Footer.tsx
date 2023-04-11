import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArtstation, faBandcamp, faGithub, faInstagram, faSoundcloud, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container';

export const Footer = () => {
    const getYear = () => {
        let baseYear = 2023;
        let currentYear = new Date().getFullYear();

        return currentYear === baseYear ? currentYear : `${baseYear} - ${currentYear}`; 
    }

    return (
        <Container>
            <div id="footer" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <Col className="col-md-4 d-flex align-items-center"><span className="text-muted">&copy; { getYear() } Pablossky</span></Col>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex branding">
                    <li className="ms-3"><a className="text-muted" href="https://www.youtube.com/@pablossky2846" target="_blank"><FontAwesomeIcon icon={ faYoutube } /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/pablosskys/" target="_blank"><FontAwesomeIcon icon={ faInstagram } /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://soundcloud.com/pablossky" target="_blank"><FontAwesomeIcon icon={ faSoundcloud }/></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://pablossky.bandcamp.com/" target="_blank"><FontAwesomeIcon icon={ faBandcamp }/></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.artstation.com/pablossky" target="_blank"><FontAwesomeIcon icon={ faArtstation }/></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.github.com/pablossky" target="_blank"><FontAwesomeIcon icon={ faGithub }/></a></li>
                </ul>
            </div>
        </Container>
    )
}