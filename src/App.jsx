import { Container } from 'react-bootstrap';

// Custom Imports
import MyNavbar from './components/layout/myNavbar.jsx';
// import topNav from './components/layout/topNav.jsx';
import Media from './components/layout/Media.jsx';
import MyFooter from './components/layout/myFooter.jsx';
import './styles/App.css';
import FeatureBoxes from './components/common/FeatureBoxes.jsx';
import AlertBox from './components/common/AlertBox.jsx';
import Showcase from './components/layout/Showcase.jsx';
import About from './components/common/About.jsx';


function App() {
  return (
    <div className="App">
      {/* <topNav/> */}
      <MyNavbar/>
        <Showcase/>
        <Container>
          <AlertBox/>
          <Media/>
          <FeatureBoxes/> 
          <About/>
        </Container>
      <MyFooter/>

    </div>
  );
}

export default App;
