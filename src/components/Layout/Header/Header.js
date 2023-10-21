
import CartLogo from '../CartLogo/CartLogo';
import './Header.css'

const Header = (props) =>{
    return(
        <>
        <div className='header'>
         <h1>PharmaWala</h1>
          <button onClick={() => props.setShowCart(true)}> 
          <CartLogo />
          </button> 
         </div>
        </>
    )
}

export default Header;