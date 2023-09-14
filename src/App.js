import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact Component={ProductListing} />
          <Route path='/product/:productId'  Component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
