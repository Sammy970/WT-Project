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
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radiobtn" id="all" onChange={() => handleCheckboxChange("all")} />
                        <label class="form-check-label" for="all">
                            Everything
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radiobtn" id="sketch" onChange={() => handleCheckboxChange("sketch")} />
                        <label class="form-check-label" for="sketch">
                            Sketches & Paintings
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radiobtn" id="crafts" onChange={() => handleCheckboxChange("crafts")} />
                        <label class="form-check-label" for="crafts">
                            Crafts
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radiobtn" id="pottery" onChange={() => handleCheckboxChange("pottery")} />
                        <label class="form-check-label" for="pottery">
                            Pottery
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radiobtn" id="gift-cards" onChange={() => handleCheckboxChange("gift-cards")} />
                        <label class="form-check-label" for="gift-cards">
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