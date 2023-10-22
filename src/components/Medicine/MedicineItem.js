import { useContext, useState } from 'react';
import './MedicineItem.css'
import CartContext from '../Store/cart-context';


const MedicineItem = (props) =>{
   const [amout,setAmount]  =  useState(0)
    const storeContext = useContext(CartContext)
    const handleAdd = ()=>{
        setAmount(amout+1)
       // storeContext.onInc()
        storeContext.onCart(props)
    }
    return(
        <>
           <div className='medi-info'>
            <div className='medi-info-content'>
        <div className='name'> {props.name}</div>
        <div className='disc'>{props.description}</div>
        <div className='price'>  &#x20B9; {props.price}</div>
        </div>
        <div className='medi-info-quantity'>
            <p>Amount {amout}</p>
            <button onClick={handleAdd}>+Add</button>
        </div>
        </div>
        </>
    )
}

export default MedicineItem;