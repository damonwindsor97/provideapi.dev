
import { Container, Button,Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Fragment } from "react"
import Hands from '../assets/images/shoeib-abolhassani-ukDEbYnyDsU-unsplash-removebg-preview.png'

const liveData = () => {

  
  return (
    <Fragment>

      <Container>
        {/* Small Warning / Announcement Div */}
        <div className="m-5 pt-5">
          <h1>Begin your search...</h1>
          <h5 className="m-3 mt-5">Our Live Data is displayed by using our ProvideAPI, information is updated in our database as fast as I can update it.</h5>
          <p><span className="text-danger m-2">Please keep in mind this Project is still in Development and far from a finished product. It's a project that I attend to when I'm free from classes, work and life</span></p>
        </div>
      
        <Link to="/data/products">
          <Button size='lg' variant='outline-info' className="m-4">Products</Button>
        </Link>
        <Link to='/data/providers'>
          <Button size='lg' variant='outline-info' className="m-4">Providers</Button>
        </Link>
        



       
      </Container>
      <Image className="hands" src={Hands} alt="provide" fluid/>
    </Fragment>
  )
}

export default liveData