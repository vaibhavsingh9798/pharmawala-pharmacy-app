import './MedicineItem.css'

const MedicineItem = (props) =>{
    return(
        <>
           <div className='medi-info'>
            <div className='medi-info-content'>
        <div className='name'> {props.name}</div>
        <div className='disc'>{props.description}</div>
        <div className='price'>  &#x20B9; {props.price}</div>
        </div>
        <div className='medi-info-quantity'>
            <p>Amount {1}</p>
            <button>+Add</button>
        </div>
        </div>
        </>
    )
}

export default MedicineItem;