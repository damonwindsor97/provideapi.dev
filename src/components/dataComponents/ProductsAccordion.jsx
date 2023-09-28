import { Col, Row, Accordion } from "react-bootstrap";

const ProductsAccordion= ({products }) => {


    return (
    <div className='m-4 mt-5'>
    {products.map((product, index) => (
        <Accordion defaultActiveKey={['0']} alwaysOpen data-bs-theme="dark">
        <Accordion.Item eventKey={index}>
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
                                {product.features.Aimbot.map((aimFeature => (
                                    <li key={product.id}>{aimFeature}</li>
                                )))}
                            </ul>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="list-style-none">
                            <li>[+] ESP</li>
                            <ul className="list-style-none">
                                {product.features.ESP.map((espFeature => (
                                    <li key={product.id}>{espFeature}</li>
                                )))}
                            </ul>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="list-style-none">
                            <li>[+] Misc</li>
                            <ul className="list-style-none">
                                {product.features.Misc.map((miscFeature => (
                                    <li key={product.id}>{miscFeature}</li>
                                )))}
                            </ul>
                        </ul>
                    </Col>
                </Row>

                <h5 className="text-info">Detections</h5>
                <ul className="list-style-none">
                {product.detectionHistory.map((dtcHistory => (
                    <li key={product.id}>{dtcHistory}</li>
                    )))}
                </ul>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    ))}
</div>
    );
}

export default ProductsAccordion