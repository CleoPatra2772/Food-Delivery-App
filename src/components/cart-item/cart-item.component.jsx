import { AddRounded, RemoveRounded } from '@mui/icons-material';
import { useState } from 'react';
import './cart-item.styles.css';


const CartItem = ({name, imgSrc, price}) => {
    const [quantity, setQuantity] = useState(1);
    
return (
    <div className="cart-item">
        <div className='img-box'>
            <img src={imgSrc} alt="" />
        </div>
        <div className='item-section'>
            <h2 className='item-name'>{name}</h2>
            <div className='item-quantity'>
                <span>x {quantity}</span>
                <div className = 'quantity'>
                <RemoveRounded className='item-remove'/>

                <AddRounded className='add-item'/>
                </div>
            </div>
        </div>

        <p className='item-price'>
            <span className='dollar-sign'></span>
            <span className='item-price-value'>{price}</span>
        </p>
    </div>
)
}

export default CartItem;