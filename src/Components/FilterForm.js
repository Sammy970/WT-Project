import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const FilterForm = () => {

    const [show, setShow] = useState(false);
    const [selectedValues, setSelectedValues] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckboxChange = (value) => {
        setSelectedValues(value);
    };

    const handleSubmit = () => {
        // Send selectedValues to backend server
        fetch('http://localhost:5000/api/submit', {
            method: 'POST',
            body: JSON.stringify({ selectedValues }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response) {
                    // window.location.reload();
                }
            })
            .catch(error => {
                // Handle error
                // ...
            });
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                Filter
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radiobtn" id="all" onChange={() => handleCheckboxChange("all")} />
                        <label className="form-check-label" htmlFor="all">
                            Everything
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radiobtn" id="sketch" onChange={() => handleCheckboxChange("sketch")} />
                        <label className="form-check-label" htmlFor="sketch">
                            Sketches & Paintings
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radiobtn" id="crafts" onChange={() => handleCheckboxChange("crafts")} />
                        <label className="form-check-label" htmlFor="crafts">
                            Crafts
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radiobtn" id="pottery" onChange={() => handleCheckboxChange("pottery")} />
                        <label className="form-check-label" htmlFor="pottery">
                            Pottery
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radiobtn" id="gift-cards" onChange={() => handleCheckboxChange("gift-cards")} />
                        <label className="form-check-label" htmlFor="gift-cards">
                            Gift Cards
                        </label>
                    </div>

                    <Button onClick={handleSubmit}>Submit</Button>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default FilterForm