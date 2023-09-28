import { Fragment } from 'react';
import { Container } from 'react-bootstrap';


// Custom Imports
import AlertBox from '../components/common/AlertBox'
import Showcase from '../components/common/Showcase';
import About from '../components/common/About'
import Media from '../components/common/Media'



const Home = () => {
  return (
      <Fragment>
        <AlertBox/>
        <Showcase/>
        <Container>   
          <About/>
          <Media/>
        </Container>
      </Fragment>

  )
}

export default Home