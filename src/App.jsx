import { Container } from 'react-bootstrap';

// Custom Imports
import MyNavbar from './components/layout/myNavbar.jsx';
import Media from './components/layout/Media.jsx';
import MyFooter from './components/layout/myFooter.jsx';
import './App.css';
import FeatureBoxes from './components/common/FeatureBoxes.jsx';
import AlertBox from './components/common/AlertBox.jsx';
import Showcase from './components/layout/Showcase.jsx';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
        <Showcase/>
        <Container>
          <AlertBox/>
          <Media/>
          <FeatureBoxes/> 
        </Container>
      <MyFooter/>

    </div>
  );
}

export default App;
