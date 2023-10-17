import CartLogo from '../CartLogo/CartLogo';
import './Header.css'

const Header = () =>{
    return(
        <>
        <div className='header'>
         <h1>PharmaWala</h1>
         <CartLogo />
         </div>
        </>
    )
}

export default Header;