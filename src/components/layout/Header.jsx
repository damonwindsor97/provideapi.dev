import { Link } from "react-router-dom"
import { Container} from "react-bootstrap"

// Icon Imports
import { IoLogInOutline } from 'react-icons/io5';
import { LuHome } from 'react-icons/lu'
import { AiOutlineDatabase } from 'react-icons/ai'
import { SlDocs } from 'react-icons/sl'
import { RiRobot2Fill } from 'react-icons/ri'
import { AiOutlineAim } from "react-icons/ai";


const Header = () => {
  return (
    <nav className="topNav">
        <Container>
             <div className="logo">
                <AiOutlineAim  className="mb-2" style={{color: "aqua"}}/>{" "}
            </div>
            
            <ul>
                <li>
                    <Link to="/"><LuHome/></Link>
                </li>
                <li>
                    <Link className="" to="/data">Data <AiOutlineDatabase/></Link>
                </li>
                <li>
                    <Link className="disabled-link" to="/docs">Docs <SlDocs/></Link>
                </li>
                <li>
                    <Link className="disabled-link" to="/bot">Bot <RiRobot2Fill/></Link>
                </li>
                <li>
                    <Link className="disabled-link" to="/login">Login<IoLogInOutline/></Link>
                </li>
            </ul> 
        </Container>
    </nav>
  )
}

export default Header