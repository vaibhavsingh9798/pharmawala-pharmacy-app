import { createContext,useState } from "react";
import CartContext from "./cart-context";

export const CartContextProvider = (props) =>{
 const [totalItem, setTotalItem] =  useState(0)
 const [cartItem,setCartItem] = useState([])
 const [totalAmount,setTotalAmount] = useState(0)
 
   const handleDec = (props)=>{
    let item = {...props}
    if(item.count > 1)
    {
      let existingProduct = cartItem.find((data) => data.id == item.id)
      existingProduct.count -= 1
    }
    else if(item.count == 1){
    let filterItems =   cartItem.filter((data,ind) => item.id != data.id)
     setCartItem(filterItems)
    }
    let total = totalAmount-item.price
    total = +total.toFixed(2)
    setTotalAmount(total)
    setTotalItem(totalItem-1)
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
     setTotalAmount(total)
     setTotalItem(totalItem+1)
   }

    return(
        <>
        <CartContext.Provider value={{totalItem:totalItem,onDec:handleDec,onCart:handleCart,cartItem:cartItem,totalAmount:totalAmount}}>
          {props.children} 
        </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;

