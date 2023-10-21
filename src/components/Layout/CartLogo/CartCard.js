import './CartCard.css'
const CartCard = (props) =>{

  let arr = [{name:'medi1',price:10},{name:'medi2',price:20}]
 
  let result =     arr.map((props,ind) => (
    <div className='medi-info' key={ind}>
    <div className='medi-info-content'>
<div className='name'> {props.name}</div>
<div className='price-muti'>
<div className='price'>  &#x20B9; {props.price}</div>
<div className='count'>{'x4'}</div>
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
                 <div>{20}</div>
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