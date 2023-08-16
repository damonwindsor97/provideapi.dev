import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertBox = () => {
    const [show, setShow] = useState(true);

  return (
    <div>
        <Alert show={show} variant="info" className='mt-3'>
        <Alert.Heading>Are you a Cheat Developer?</Alert.Heading>
        <p>
            Please feel free to message me on Discord if you're interested in being featured in ProvideAPI - Details are; 
        </p>
        <p>swegnesium OR Swegnesium#0001</p>
        <hr />
            <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-danger">
                X
            </Button>
            </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </div>
  )
}

export default AlertBox