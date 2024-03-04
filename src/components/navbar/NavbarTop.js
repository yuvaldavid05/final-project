import './NavbarTop.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BsBagPlus } from "react-icons/bs";
import { BsBookmarkHeart } from "react-icons/bs";

export default function NavbarTop() {
    const category = [
        { name: '/dresses', title: ' שמלות', number: '0' },
        { name: '/jeans', title: ' גינסים', number: '1' },
        { name: '/shirts', title: ' חולצות', number: '2' },
        { name: '/shoes', title: ' נעליים', number: '3' },
        { name: '/category', title: ' קטגוריה', number: '4' },
    ]

    return (
        <>
            <div className='top d-flex '>
                <div className='flex-grow-1'>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                </div>
                <div>contact</div>
            </div>

            <Navbar collapseOnSelect expand="lg" className="mainNav" sticky="top">
                <Container>
                    <Navbar.Brand>
                        {/* React-Bootstrap */}
                        <Nav.Link>
                            <Link to="shopping-basket">
                                <BsBagPlus />
                            </Link>
                        </Nav.Link>
                        <span>|</span>
                        <Nav.Link>
                            <Link to="wish-list">
                                <BsBookmarkHeart />
                            </Link>
                        </Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto justify-content-center flex-grow-1 ">
                            {
                                category.map((c, i) => (
                                    <Nav.Link key={i} className=' text-break fw-bolder'>
                                        <Link to={c.name} className='linkCategory text-decoration-none'>{c.title}</Link>
                                    </Nav.Link>
                                )
                                )
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}
