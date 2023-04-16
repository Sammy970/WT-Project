import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

import './FormComp.css'

// Name, Organization, Desc, Price, Image, Category

const FormComp = () => {

    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        select: '',
        price: '',
    })

    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create FormData object

        const formDataFinal = new FormData();
        formDataFinal.append('image', file); // append file to FormData
        formDataFinal.append('title', formData.title);
        formDataFinal.append('desc', formData.desc);
        formDataFinal.append('select', formData.select);
        formDataFinal.append('price', formData.price);

        // console.log(formDataFinal);

        fetch('https://wt-backend.onrender.com/api/data', {
            method: 'POST',
            body: formDataFinal,
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

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name + ":" + value)
        setFormData({
            ...formData,
            [name]: value
        });

        // console.log(formData)
    }

    const handleFileChange = (event) => {
        event.preventDefault();
        const selectedFile = event.target.files[0]
        setFile(selectedFile);
    }

    // Name, Organization, Desc, Price, Image, Category

    return (
        <>
            <br />
            <br />
            <div className='body'>

                <Container className='containsForm'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='Form.Group' controlId="formFile">
                            <Form.Label className='Form.Label'>Upload an Image</Form.Label>
                            <Form.Control type="file" onChange={handleFileChange} />
                        </Form.Group>

                        <br />

                        <Form.Group className='Form.Group' controlId="formTitle">
                            <Form.Label className='Form.Label'>Art Title</Form.Label>
                            <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
                        </Form.Group>

                        <br />

                        <Form.Group className='Form.Group' controlId="formDesc">
                            <Form.Label className='Form.Label'>Short Description</Form.Label>
                            <Form.Control type="text" name="desc" value={formData.desc} onChange={handleChange} />
                        </Form.Group>

                        <br />

                        <Form.Group className='Form.Group' controlId="formCategory">
                            <Form.Label className='Form.Label'>Select a value</Form.Label>
                            <Form.Control as="select" name="select" value={formData.select} onChange={handleChange}>
                                <option value="">Select an Category</option>
                                <option value="Sketches and Paintings">Sketches and Paintings</option>
                                <option value="Ornaments">Ornaments</option>
                                <option value="Gift-Cards">Gift Cards</option>
                                <option value="Pottery">Pottery</option>
                                <option value="Crafts">Crafts</option>
                            </Form.Control>
                        </Form.Group>

                        <br />

                        <Form.Group className='Form.Group' controlId="formPrice">
                            <Form.Label className='Form.Label'>Price</Form.Label>
                            <Form.Control type="text" name="price" value={formData.price} onChange={handleChange} />
                        </Form.Group>

                        <br />

                        <Button className='submitBtn' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default FormComp