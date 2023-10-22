
import { useState } from 'react';
import './App.css';
import CartCard from './components/Layout/CartLogo/CartCard';
import Header from './components/Layout/Header/Header';
import Medicine from './components/Medicine/Medicine';
import CartContextProvider from './components/Store/CartContextProvider';

function App() {
  const [showCart,setShowCart] = useState(false)
  return (
    <CartContextProvider>
    <div className="App">
       <Header  setShowCart={setShowCart}/>
     { showCart && <CartCard setShowCart={setShowCart} /> }
       <Medicine />
    </div>
    </CartContextProvider>
  );
}

export default App;
