import MyNavbar from './components/layout/myNavbar.jsx';
import { Container } from 'react-bootstrap';
import Showcase from './components/layout/Showcase.jsx';
import MyFooter from './components/layout/myFooter.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
        <Container>
          <Showcase/>
        </Container>
      <MyFooter/>

    </div>
  );
}

export default App;
