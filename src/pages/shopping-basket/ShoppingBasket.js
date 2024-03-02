import './ShoppingBasket.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';

export const list = [
    {
        itemName: 'חולצת פסים',
        itemPrice: '120 ש"ח',
        itemImg: 'https://www.stickdecor.co.il/files/products/image1_1697_2016-09-19_10-43-16.jpg'
    },
    {
        itemName: 'גינס ארוך',
        itemPrice: '70 ש"ח',
        itemImg: 'https://www.zico-fashion.co.il/wp-content/uploads/2023/07/20230705_121956-scaled.jpg'
    },
    {
        itemName: 'חצאית קצרה',
        itemPrice: '50 ש"ח',
        itemImg: 'https://xversi.com/wp-content/uploads/2023/06/shskirt_black.jpg'
    }
]
export default function ShoppingBasket() {
    const [sum, setSum] = useState(0);

    useEffect(() => {
        list.map((y, i) => {
            while (i < list.length) {
                setSum(sum + y.itemPrice)
            }
        }
        );
    }, [])





    return (
        <div className='basket-page'>
            <h3>welcome to SHOPPINGBASKET</h3>

            <div className='basket-body'>
                <ListGroup as="ol" numbered>
                    {
                        list.map((x, i) => (
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                                key={i}
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{x.itemName}</div>
                                    {x.itemPrice}
                                </div>
                                <div className='item-img-basket'>
                                    <Image src={x.itemImg} />
                                </div>

                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>

                <div>
                    סה"כ {sum}
                </div>

            </div>
        </div>
    );
}