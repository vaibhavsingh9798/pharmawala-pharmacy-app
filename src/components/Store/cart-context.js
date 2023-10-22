import { createContext } from "react"


const CartContext = createContext({
    totalItem:0,
    totalAmount:0,
    cartItem:[],
    onInc:()=>{},
    onDec:()=>{},
    onCart:()=>{}
   })

   export default CartContext