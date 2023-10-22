import { useContext } from 'react'
import './CartCard.css'
import CartContext from '../../Store/cart-context'
const CartCard = (props) =>{

  let  cartContext = useContext(CartContext)
 
let totalAmount = 0
  let result =    cartContext.cartItem.map((item,ind) => ( 
    <div className='medi-info' key={item.id}>
    <div className='medi-info-content'>
<div className='name'> {item.name}</div>
<div className='price-muti'>
<div className='price'>  &#x20B9; {item.price}</div>
<div className='count'>{`X${item.count}`}</div>
</div>
</div>
<div className='cart-button'>
    <button>+</button>
    <button>-</button>
</div>
</div>    
  ))
   
    return(
        <>
        <dv className="cart-card-conatiner">
            <div className='cart-card-item'>
               {result}
               <div className='total-item'>
                 <div>Total Amount</div>
                 <div>{cartContext.totalAmount}</div>
               </div>
               <div className='close-button'>
                <div> <button>order</button></div>
                <div><button onClick={()=>props.setShowCart(false)}>close</button></div>
               </div>
        </div>
        </dv>
        </>
    )
}

export default CartCard ;