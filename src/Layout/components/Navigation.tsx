import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';

export const Navigation = () => {
    return (
        <div className="navbar-gradient">
            <Container>
                <Navbar expand="lg">
                    <LinkContainer to="/">
                        <Navbar.Brand>Pablossky</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                            <LinkContainer to="/music"><Nav.Link>Music</Nav.Link></LinkContainer>
                            <LinkContainer to="/gallery"><Nav.Link>Gallery</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}