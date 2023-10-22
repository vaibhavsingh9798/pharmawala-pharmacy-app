import { createContext,useState } from "react";
import CartContext from "./cart-context";



export const CartContextProvider = (props) =>{
 const [totalItem, setTotalItem] =  useState(0)
 const [cartItem,setCartItem] = useState([])
 const [totalAmount,setTotalAmount] = useState(0)
   const handleInc = ()=>{
    setTotalItem(totalItem+1)
    console.log('inc hit..')
   }
   const handleDec = ()=>{
    setTotalItem(toString-1)
   }

   const handleCart = (data) =>{
        let cartData = {...data}
        let existingProduct = cartItem.find((item,ind) => item.id == data.id)
      if(existingProduct){
        
         existingProduct.count += 1
      }
      else{
        cartData.count=1;
        setCartItem([...cartItem,cartData])
      }
     let total = totalAmount + cartData.price
     total =  +total.toFixed(2);
     console.log('total..',total)
     setTotalAmount(total)
   }
  
    return(
        <>
        
        <CartContext.Provider value={{totalItem:totalItem,onInc:handleInc,onDec:handleDec,onCart:handleCart,cartItem:cartItem,totalAmount:totalAmount}}>
          {props.children} 
        </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;

