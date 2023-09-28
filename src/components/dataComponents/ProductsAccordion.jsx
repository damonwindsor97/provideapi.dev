import { Col, Row, Accordion } from "react-bootstrap";

const ProductsAccordion= ({products }) => {
    return (
    <div className='m-4 mt-5'>
    {products.map((product) => (
        <Accordion defaultActiveKey={['0']} alwaysOpen data-bs-theme="dark">
        <Accordion.Item eventKey="0">
            <Accordion.Header>{products.productName}</Accordion.Header>
            <Accordion.Body>
                <Row>
                    <Col>
                        <ul>
                            <li>[+] Aimbot</li>
                            <ul>
                                <li> {product.features.Aimbot}</li>
                            </ul>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>[+] ESP</li>
                            <ul>
                                <li>{product.features.ESP}</li>
                            </ul>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>[+] Misc</li>
                            <ul>
                                <li></li>
                            </ul>
                        </ul>
                    </Col>
                </Row>
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