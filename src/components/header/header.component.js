import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import {} from '@mui/material';
import './header.styles.css';

const Header = () => {
    return (
        <header>
            <img src ='' alt= '' />
            <div className="input-box">
                <SearchRounded className='search-icon'/>
                <input type='text' placeholder='search'/>
            </div>
            <div className='shopping-cart'>
                <ShoppingCartRounded className='cart' />
                <div className='cart-content'>
                    <p>2</p>
                </div>
            </div>

            <div className='profile-container'>
                <div className='img-box'>
                <img src ='' alt= '' />
                </div>
                
                <h2 className= 'user-name'>Cleo</h2>
            </div>

            <div className='toggle-menu'>
                <BarChart className= 'toggle-icon' />
            </div>


        </header>
    )
    }

    export default Header;