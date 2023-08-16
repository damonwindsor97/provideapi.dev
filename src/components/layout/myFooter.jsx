
import Navbar from 'react-bootstrap/Navbar';


const myFooter = () => {
  return (
    <div>
    <Navbar className="mt-4" bg="dark" data-bs-theme="dark">
        <Navbar.Text class="m-2 text-white Karla" href="#">Developed by Swegnesium | <span class="text-danger">Development in Progress</span></Navbar.Text>
    </Navbar>
    </div>
  )
}

export default myFooter