import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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

                        <DropdownButton variant="dark" menuVariant="dark" className="dropdown-item-button" title="About" >
                            <Dropdown.Item><LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer></Dropdown.Item>
                            <Dropdown.Item><LinkContainer to="/about/musicproduction"><Nav.Link>Music Production</Nav.Link></LinkContainer></Dropdown.Item>
                            <Dropdown.Item><LinkContainer to="/about/graphic"><Nav.Link>Graphic</Nav.Link></LinkContainer></Dropdown.Item>
                            <Dropdown.Item><LinkContainer to="/about/technology"><Nav.Link>Technology</Nav.Link></LinkContainer></Dropdown.Item>
                            <Dropdown.Item><LinkContainer to="/about/language"><Nav.Link>Language</Nav.Link></LinkContainer></Dropdown.Item>
                        </DropdownButton>

                            <LinkContainer to="/music"><Nav.Link>Music</Nav.Link></LinkContainer>
                            <LinkContainer to="/gallery"><Nav.Link>Gallery</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}