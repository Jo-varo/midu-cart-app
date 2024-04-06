import './App.css';
import Cart from './components/Cart';
import Filters from './components/Filters';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <h1 className="title">Cart react</h1>
      <Filters />
      <ProductList />
      <Cart />
    </>
  );
}

export default App;
