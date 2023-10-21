
import { useState } from 'react';
import './App.css';
import CartCard from './components/Layout/CartLogo/CartCard';
import Header from './components/Layout/Header/Header';
import Medicine from './components/Medicine/Medicine';

function App() {
  const [showCart,setShowCart] = useState(false)
  //  const updateShowCart = () =>{
  //    setShowCart(!showCart)
  //  }
  return (
    <div className="App">
       <Header  setShowCart={setShowCart}/>
     { showCart && <CartCard setShowCart={setShowCart} /> }
       <Medicine />
    </div>
  );
}

export default App;
