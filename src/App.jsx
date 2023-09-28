import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// Page Imports
import Home from './pages/Home'
import LiveData from './pages/LiveData'
import ProductsPage from './pages/dataPages/ProductsPage';
import ProvidersPage from './pages/dataPages/ProvidersPage';
import NotFound from './pages/NotFound';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/data" element={<LiveData/>}/>
          <Route path="/data/products" element={<ProductsPage/>}/>
          <Route path="/data/providers" element={<ProvidersPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
