import './StructureCategory.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function StructureCategory() {
    return (
        <div className='categoryPage'>
            <h4>שם הקטגוריה</h4>

            {/* <div className='d-flex '> */}
            <Row>
                <Col md={2} className='filter' >
                    <div>filter</div>
                </Col>
                <Col md={10}>


                    {/* <div className='item'>
                    <Card>
                        <Card.Img variant="top" src="https://top-selfie.co.il/wp-content/uploads/2021/05/sunset-1373171.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                price
                            </Card.Text>
                            <Card.Text>
                                color
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='item'>
                    <Image src="https://www.photo-art.co.il/wp-content/uploads/2015/09/BY1A4457.jpg" rounded />
                    <h5>type</h5>
                </div> */}

                    <Row className='itemsDiv' >
                        <Col xs={3} md className='item'>1 of 3</Col>
                        <Col xs={3} md className='item'>2 of 3</Col>
                        <Col xs={3} md className='item'>3 of 3</Col>

                    </Row>
                    <Row className='itemsDiv' xs={4} md={6}>
                        <Col md className='item'>1 of 3</Col>
                        <Col md className='item'>2 of 3</Col>
                        <Col md className='item'>3 of 3</Col>
                        <Col md className='item'>3 of 3</Col>
                    </Row>
                    <Row className='itemsDiv'>
                        <Col md className='item'>1 of 3</Col>
                        <Col md className='item'>2 of 3</Col>
                        <Col md className='item'>3 of 3</Col>
                    </Row>
                    {/* <div className='item'>פריט 3</div>
                    <div className='item'>פריט 4</div>
                    <div className='item'>פריט 5</div>
                    <div className='item'>פריט 6</div> */}

                </Col>
            </Row>
        </div>
        // </div>
    );
}

// d-flex justify-content-center 