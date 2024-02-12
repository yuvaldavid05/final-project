import Col from 'react-bootstrap/esm/Col';
import './Item.css';
import Image from 'react-bootstrap/Image';


export default function Item({ itemImage, itemName, itemColor, ItemPrice }) {
    return (
        <>
            <Image src={itemImage} />

            <div className='itemD'>
                <Col className='d1'>
                    <div>{itemName}</div>
                    <div>{itemColor}</div>
                </Col>
                <Col className='d2'>{ItemPrice} ש"ח</Col>
            </div>
        </>
    )
}