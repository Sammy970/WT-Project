import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Components/Navbar.css'
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';

const Navbar2 = () => {

    const handleDropdownChange = (eventKey) => {
        sendVal(eventKey);
    };

    const sendVal = (value) => {

        fetch('https://wt-backend.onrender.com/api/getSelection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ selectedValue: value }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle success
                console.log("Good");
            })
    }

    return (
        <>
            <Navbar className='Navbar' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src='Images/logocnf.png' alt="logo" width="80px"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Button variant="dark" className='NavLink' href="/">Home</Button>
                            <Button variant="dark" className='NavLink'>About</Button>
                            <Dropdown className="NavLink" as={ButtonGroup}>
                                <Button variant="dark" href="/products" onClick={() => handleDropdownChange("all-category")}>Products</Button>
                                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/products" onClick={() => handleDropdownChange("sketch")}>Sketches & Paintings</Dropdown.Item>
                                    <Dropdown.Item href="/products" onClick={() => handleDropdownChange("crafts")}>Crafts</Dropdown.Item>
                                    <Dropdown.Item href="/products" onClick={() => handleDropdownChange("pottery")}>Pottery</Dropdown.Item>
                                    <Dropdown.Item href="/products" onClick={() => handleDropdownChange("ornaments")}>Ornaments</Dropdown.Item>
                                    <Dropdown.Item href="/products" onClick={() => handleDropdownChange("gift-cards")}>Gift Cards</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button variant="dark"  className='NavLink' href="/additems">Add Items</Button>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-end text-light'><span className='text'>Call Us!</span> <br /> 123456789</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbar2;