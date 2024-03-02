import './StruCategory.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Item from './Item';



export default function StruCategory() {
    return (
        <section id="category" className='body-category'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>שם הקטגוריה</h2>
                    <div>jjdfnafnd</div>
                    <hr></hr>
                </div>
                <Row xs={2} md={5}>
                    <Col>
                        <div className='holder'>
                            <Item itemImage={'https://dalicanvas.co.il/wp-content/uploads/2022/10/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%A0%D7%95%D7%A3-%D7%99%D7%9D-%D7%A0%D7%A7%D7%99.jpg'} itemName={'מכנסי עור'} itemColor={'שחור'} ItemPrice={'100'} />
                        </div>
                    </Col>
                    <Col>
                        <div className='holder'>
                            <Item itemImage={'https://dalicanvas.co.il/wp-content/uploads/2022/10/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%A0%D7%95%D7%A3-%D7%99%D7%9D-%D7%A0%D7%A7%D7%99.jpg'} itemName={'מכנסי עור'} itemColor={'שחור'} ItemPrice={'100'} />
                        </div>
                    </Col>
                    <Col>
                        <div className='holder'>
                            <Item itemImage={'https://dalicanvas.co.il/wp-content/uploads/2022/10/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%A0%D7%95%D7%A3-%D7%99%D7%9D-%D7%A0%D7%A7%D7%99.jpg'} itemName={'מכנסי עור'} itemColor={'שחור'} ItemPrice={'100'} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}