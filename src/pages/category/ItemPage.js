import './ItemPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';



export default function ItemPage() {
    return (
        <section id="item-page" className='item-page-body'>

            <Container fluid>
                <Row xs={1} md={2} className='item-page-header'>
                    <Col className='item-page-img-left'>
                        <Image src="https://kides.co.il/wp-content/uploads/2017/09/12484-01d561b95ed55a495d26ee450bc4cf46.jpg" fluid />
                    </Col>
                    <Col className='item-page-info-right'>
                        <u> <h3>item Name</h3></u>
                        <div>price:</div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>color :</div>
                            <span className='color-of-item'></span>
                        </div>

                        <div className='size-div'>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                        </div>
                        {/* <Form.Select aria-label="select-sizes">
                            <option>sizes  </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select> */}
                    </Col>
                </Row>
            </Container>
        </section >
    )
}