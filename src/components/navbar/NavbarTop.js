import './NavbarTop.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { GrActions, GrCircleInformation, GrPhone } from "react-icons/gr";


export default function NavbarTop() {
    return (
        <>
            <Navbar expand="lg" className=" navTop">
                <Container>
                    <Navbar.Brand href="/">Icon</Navbar.Brand>
                    {/* <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwV1VGlueUquV1LDWI--DbRKrbYAlG_ahhg&usqp=CAU"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Icon
                    </Navbar.Brand> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto navFrame">
                            <Nav.Link className='aFrame'>
                                <Link to="">
                                    התחבר
                                </Link>
                            </Nav.Link>
                            <div className="vr" />
                            <Nav.Link className='aFrame'>
                                <Link to="/contact-us">
                                    צור קשר
                                    <GrPhone />
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='aFrame'>
                                <Link to="/about">
                                    אודות
                                    <GrCircleInformation />
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='aFrame'>
                                <Link to="/build-trip">
                                    תכנן מסלול
                                    <GrActions />
                                </Link>
                            </Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
