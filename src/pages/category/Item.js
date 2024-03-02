import './Item.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { IoHeartOutline } from "react-icons/io5";

export default function Item({ itemImage, itemName, itemColor, ItemPrice }) {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={itemImage} />
                <div className='like'>
                    <IoHeartOutline />
                </div>
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text> {ItemPrice} nis</Card.Text>
                    <Card.Text> color: {itemColor}</Card.Text>
                    <div className='footerCard'>
                        <Card.Link> more info</Card.Link>
                        <Button variant="primary">+ add item</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}