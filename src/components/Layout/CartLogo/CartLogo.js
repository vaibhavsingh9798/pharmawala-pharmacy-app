import logo from '../../../images/1.png'

import './CartLogo.css'
const CartLogo = () =>{
    return(
        <>
        <div className="cart">
            <img src={logo} alt='logo' />
            <p>Your Cart</p>
            <p className='count'>10</p>
        </div>
       
        </>
    )
}
export default CartLogo;
