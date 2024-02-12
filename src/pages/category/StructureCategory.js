import './StructureCategory.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Item from './Item';

export default function StructureCategory() {
    return (
        <div className='categoryPage'>
            <h4>שם הקטגוריה</h4>

            <Row>

                {/* <Col></Col> */}
                <Col md={10} >
                    <Container>
                        <Row className='itemsDiv'>

                            <Col className='item'>
                                <Row className='itemDetails'>
                                    <Image src="https://www.photo-art.co.il/wp-content/uploads/2015/09/BY1A4457.jpg" />
                                    <Col>
                                        <div>שם המוצר</div>
                                        <div>צבע</div>
                                    </Col>
                                    <Col>מחיר</Col>
                                </Row>
                            </Col>

                            <Col className='item'>
                                <Image src="https://www.stickdecor.co.il/files/products/image1_1697_2016-09-19_10-43-16.jpg" />

                                <div className='itemD'>
                                    <div className='d1'>
                                        <div>שם המוצר</div>
                                        <div>צבע</div>
                                    </div>
                                    <div className='d2'>מחיר</div>
                                </div>
                            </Col>
                            <Col className='item'>
                                <Item itemImage={'https://www.stickdecor.co.il/files/products/image1_1697_2016-09-19_10-43-16.jpg'} itemName={'מכנסי עור'} itemColor={'red'} ItemPrice={'100'} />
                            </Col>
                            <Col className='item'>אופציה שלישית</Col>
                            <Col className='item'>אופציה שלישית</Col>
                        </Row>
                    </Container>

                </Col>
                {/* <Col></Col> */}

            </Row>


        </div>
        // </div>
    );
}

// d-flex justify-content-center 