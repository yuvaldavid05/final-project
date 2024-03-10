import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { RiLoginBoxLine } from "react-icons/ri";
import { FaInfo } from "react-icons/fa";
import Button from 'react-bootstrap/esm/Button';


export default function Footer() {

    return (
        <section id="footer-section" className='footer'>
            <Container fluid>
                <Row className='footer-div'>
                    <Col xs={12} md={3} className='divs' >
                        login/signup
                        <RiLoginBoxLine />
                        <br></br>
                        <Button>click here</Button>
                    </Col>
                    <Col xs={6} md={3} className='divs' >
                        about
                        <FaInfo />

                    </Col>
                    <Col xs={6} md={3} className='divs'>contact</Col>
                    <Col xs={12} md={3} className='divs'>4</Col>
                </Row >
            </Container>
        </section>
    );
}