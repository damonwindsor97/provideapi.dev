import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeatureBoxes = () => {
  return (
    <div>
        <Container>
            <h3 className='p-3 text-white'>Keep up to date with your favourite Providers!</h3>
            <Row>
                <Col>
                    <Card className='mb-5' border="info" >
                        <Card.Body>
                        <Card.Title>Docs (later)</Card.Title>
                        <Card.Text>
                            Documentation to get you started using our RESTful API.
                        </Card.Text>
                        <Card.Text>
                            not available for a while
                        </Card.Text>
                        <Button disabled variant="dark">To Docs</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='mb-3' border="info" >
                        <Card.Body>
                        <Card.Title>Discord Bot (soon)</Card.Title>
                        <Card.Text>
                            A Discord Bot to invite to your server.
                        </Card.Text>
                        <Card.Text>
                            Display Providers and what Products they have!
                        </Card.Text>
                        <Button disabled variant="dark">To Bot</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FeatureBoxes