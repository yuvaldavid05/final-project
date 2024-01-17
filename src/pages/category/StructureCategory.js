import './StructureCategory.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default function StructureCategory() {
    return (
        <div className='categoryPage'>
            <h4>שם הקטגוריה</h4>

            <div className='d-flex flex-wrap'>
                <div className='filter'>
                    vhh
                </div>

                <div className='itemsDiv'>
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
                    <div className='item'>פריט 3</div>
                    <div className='item'>פריט 4</div>
                    <div className='item'>פריט 5</div>
                    <div className='item'>פריט 6</div>
                </div>
            </div>
        </div>
    );
}

// d-flex justify-content-center 