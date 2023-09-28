import { Col, Row, Accordion } from "react-bootstrap";

const ProductsAccordion= ({products }) => {


    return (
    <div className='m-4 mt-5'>
    {products.map((product) => (
        <Accordion defaultActiveKey={['0']} alwaysOpen data-bs-theme="dark">
        <Accordion.Item eventKey="0">
            <Accordion.Header>{product.productName}</Accordion.Header>
            <Accordion.Body>
                Developer: {product.developer}
            </Accordion.Body>
            <Accordion.Body>
                <Row>
                    <Col>
                        <ul className="list-style-none">
                            <li>[+] Aimbot</li>
                            <ul className="list-style-none">
                                {product.features.Aimbot.map((feature => (
                                    <li key={product.id}>{feature}</li>
                                )))}
                            </ul>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="list-style-none">
                            <li>[+] ESP</li>
                            <ul className="list-style-none">
                                <li>{product.features.ESP}</li>
                            </ul>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="list-style-none">
                            <li>[+] Misc</li>
                            <ul className="list-style-none">
                                <li>{product.features.Misc}</li>
                            </ul>
                        </ul>
                    </Col>
                </Row>

                <h5>Detections</h5>
                <ul  className="list-style-none">
                    <li>{product.detectionHistory}</li>
                </ul>
            </Accordion.Body>
        </Accordion.Item>
        {/* <Accordion.Item eventKey="1">
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
        </Accordion.Item> */}
        </Accordion>
    ))}
</div>
    );
}

export default ProductsAccordion