import { AddRounded, Favorite, StarRounded } from "@mui/icons-material"
import './item-card.styles.css';
import { useEffect, useState } from "react";
import { Items } from "../data";
import { useStateValue } from "../state-provider/state-provider";
import { ActionTypes } from "@mui/base";
import { actionType } from "../reducer/reducer";
let cartData = [];

export const ItemCard = ({imgSrc, name, ratings, price, itemId}) => 

{
    const [isFavorite, setFavorite] = useState(false);
    const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
    const [isCart, setCart] = useState(null);
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        if(isCart) {
            cartData.push(isCart);
            dispatch({
                type: actionType.SET_CART,
                cart: cartData,
            });
        }
    }, [isCart]);

    const handleClick = (value) => {
        setCurrentValue(value);
    }

    return (
        <div className="item-card" id={itemId}>
            <div className={`is-favorite ${isFavorite ? "active" : ""}`}
            onClick = { () => setFavorite(!isFavorite)}
            >
                <Favorite />
            </div>
            <div className='img-box'>
                <img src={imgSrc} alt='' className="item-img" />
            </div>
            <div className='item-content'>
                <h3 className="item-name">{name}</h3>
                <div className= 'bottom'>
                    <div className= 'ratings'>
                        {Array.apply(null, {length : 5}).map((e, i) => (
                            <i key={i} className= {`rating ${currentValue > i ? "orange" : "gray"}`}
                            onClick={() => handleClick(i + 1)}
                            >
                                <StarRounded />
                            </i>
                        ))}
                        <h3 className="price"><span>$ </span>{price}</h3>
                    </div>
                    <i className= 'add-to-cart' onClick= {() => setCart(Items.find(n => n.id === itemId))}>
                        <AddRounded />
                    </i>
                </div>
            </div>
        </div>
    )
}