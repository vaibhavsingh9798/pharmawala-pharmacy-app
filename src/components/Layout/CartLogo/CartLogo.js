import { useContext } from 'react'
import logo from '../../../images/1.png'
import './CartLogo.css'
import CartContext from '../../Store/cart-context'

const CartLogo = () =>{
   const cartItem =  useContext(CartContext )
    return(
        <>
        <div className="cart">
            <img src={logo} alt='logo' />
            <p>Your Cart</p>
            <p className='count'> {cartItem.totalItem} </p>
        </div>
       
        </>
    )
}
export default CartLogo;
