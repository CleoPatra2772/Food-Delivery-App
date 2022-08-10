import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import {} from '@mui/material';
import './header.styles.css';
import foodLogo from '../assets/img/food.svg';
import userLogo from '../assets/img/user.png';
import { useEffect } from 'react';

const Header = () => {
    // useEffect(() => {
    //     const toggleMenu = document.querySelector(".toggle-menu");

    //     toggleMenu.addEventListener('click', ()=> {
    //         document.querySelector('.right-menu').classList.toggle('active');
    //     });
    // },[]);

    useEffect(() => {
        const toggleIcon = document.querySelector(".toggle-menu");
        toggleIcon.addEventListener("click", () => {
          document.querySelector(".right-menu").classList.toggle("active");
        });
      }, []);
    
    
    return (
      

        <header>
            <img src ={foodLogo} alt= '' className='logo'/>
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
                <img src ={userLogo} alt= '' className='profilepic'/>
                </div>
                
                <h2 className= 'username'>Cleo</h2>
            </div>

            <div className='toggle-menu'>
                <BarChart className= 'toggle-icon' />
            </div>


        </header>
    )
    }

    export default Header;