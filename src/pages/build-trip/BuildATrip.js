import './BuildATrip.css';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';


const states = [
    { state: 'איטליה', cities: ['רומא', 'פירנצה'] },
    { state: 'פריז', cities: ['מארסיי', 'ניס', 'עוד משהו'] }
]

export default function BuildATrip() {
    return (
        <div className='frameQATrip'>
            <h3>הכנס את הפרטים</h3>
            <div className='placeInput'>
                {/* <Form.Select size="lg">

                    <option></option>

                </Form.Select>
                <Button>הבא</Button> */}

                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        </div>
    )
}