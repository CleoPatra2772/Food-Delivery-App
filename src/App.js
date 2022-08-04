
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import BannerName from './components/banner/banner-name.component';
import Header from './components/header/header.component';
import MenuContainer from './components/menu-container/menu-container.component';
import food from './components/assets/img/food.png';
import { SubMenuContainer } from './components/sub-menu-container/sub-menu-container.component';
import { MenuCard } from './components/menu-card/menu-card.component';
import burger from './components/assets/food-img/burger.png';
import { MenuItems, Items } from './components/data';

function App() {
  useEffect(()=> {
    const menuLi = document.querySelectorAll('#menu li');
    
    function setMenuActive(){
      menuLi.forEach( (n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    menuLi.forEach(n=> n.addEventListener('click', setMenuActive));

    //Menu Card Active Toggle
    const menuCards = document.querySelector('.row-container').querySelectorAll('.row-menu-card');

    function setMenuCardActive() {
      menuCards.forEach( (n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    menuCards.forEach(n => n.addEventListener('click', setMenuCardActive))
  },[]);


  return (
    <div className="App">
      {/* Header section */}
      <Header />
      {/* Main Container */}
        <main>
          <div className='mainContainer'>
            {/* banner */}
            <div className='banner'>
            <BannerName name={'Cleo'} discount={'20'} link={'#'} />
            <img src={food} alt='' className='delivery-pic'/>
            </div>

            {/* dishContainer */}
            <div className='dish-container'>
              <div className='menu-card'>
                <SubMenuContainer name={"Menu Category"} />
              </div>
              <div className='row-container'>

              {
                MenuItems && MenuItems.map((data) => (
                  <div key={data.id}>
                <MenuCard 
                imgSrc={data.imgSrc} 
                name={data.name} 
                isActive = {data.id === 1 ? true : false} />
                </div>

                ) )
              }

              </div>
              <div className='dish-item-container'></div>
            </div>
          </div>

          <div className='rightMenu'></div>
        </main>
      {/* Bottom Menu */}
      <div className= 'bottom-menu'>
        <ul id='menu'>
          <MenuContainer link={'#'} icon ={<HomeRounded />} isHome/>
          <MenuContainer link={'#'} icon ={<Chat />} />
          <MenuContainer link={'#'} icon ={<AccountBalanceWalletRounded />} />
          <MenuContainer link={'#'} icon ={<Favorite />} />
          <MenuContainer link={'#'} icon ={<SummarizeRounded />} />
          <MenuContainer link={'#'} icon ={<Settings />} />

          <div className='indicator'></div>
          

        </ul>
      </div>
    </div>
  );
}

export default App;
