import {Container, Col, Row, Accordion } from 'react-bootstrap';

import {useEffect, useState} from 'react';

function ProductsData() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const headers = {'cross-origin-resource-policy': 'disabled'}
        fetch('https://provide-api-ss5x.onrender.com/api/products', headers)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
        })
    }, []);


  return (

    <Container>
        <div class="customBox p-1">
            <p className='m-2'>Our list of Products range for a multitude of First Person Shooters to help better enhance your gameplay. Each Product has been used by Provides Team and peers to ensure the products we recommend, are actually worth it - and to ensure the products we deem a risk, are actually a risk.</p>
            <ul className='list-style-none'>
                <li>Apex Legends</li>
                <li>Call of Duty</li>
                <li>Counter-Strike 2</li>
                <li>Overwatch 2</li>
                <li>More to come..</li>
            </ul>

            <br/>
            <p className='m-2 text-danger'>Please select a product below to drop-down its info!</p> 

            <p className='m-1'>We are <span className='text-danger'>not sponsored or endorsed</span> by any of the providers that develop these products.</p>
        </div>


        <div className='m-4 mt-5'>
            <Accordion defaultActiveKey={['0']} alwaysOpen data-bs-theme="dark">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Product Name #1</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col>
                            <ul>
                                <li>[+] Aimbot</li>
                                <ul>
                                    <li>Feature list..</li>
                                    <li>Feature list..</li>
                                    <li>Feature list..</li>
                                </ul>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>[+] Wallhacks</li>
                                <ul>
                                    <li>Feature list...</li>
                                    <li>Feature list...</li>
                                    <li>Feature list...</li>
                                </ul>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>[+] Misc</li>
                                <ul>
                                    <li>Feature list...</li>
                                </ul>
                            </ul>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Product Name #2</Accordion.Header>
                <Accordion.Body>
                <Row>
                        <Col>
                            <ul>
                                <li>[+] Aimbot</li>
                                <ul>
                                    <li>Feature list..</li>
                                    <li>Feature list..</li>
                                    <li>Feature list..</li>
                                </ul>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>[+] Wallhacks</li>
                                <ul>
                                    <li>Feature list...</li>
                                    <li>Feature list...</li>
                                    <li>Feature list...</li>
                                </ul>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>[+] Misc</li>
                                <ul>
                                    <li>Feature list...</li>
                                </ul>
                            </ul>
                        </Col>
                    </Row>                
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Product Name #3 </Accordion.Header>
                <Accordion.Body>
                
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    </Container>
  )
}

export default ProductsData