import { Container } from 'react-bootstrap';

// Custom Imports
import MyNavbar from './components/layout/myNavbar.jsx';
import Showcase from './components/layout/Showcase.jsx';
import MyFooter from './components/layout/myFooter.jsx';
import './App.css';
import FeatureBoxes from './components/common/FeatureBoxes.jsx';
import AlertBox from './components/common/AlertBox.jsx';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
        <Container>
          <AlertBox/>
          <Showcase/>
          <FeatureBoxes/> 
        </Container>
      <MyFooter/>

    </div>
  );
}

export default App;
