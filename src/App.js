
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import BannerName from './components/banner/banner-name.component';
import Header from './components/header/header.component';
import MenuContainer from './components/menu-container/menu-container.component';
import food from './components/assets/img/food.png';


function App() {
  useEffect(()=> {
    const menuLi = document.querySelectorAll('#menu li');
    
    function setMenuActive(){
      menuLi.forEach( (n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    menuLi.forEach(n=> n.addEventListener('click', setMenuActive));
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
          </div>
          <div className='rightMenu'></div>
        </main>
      {/* Bottom Menu */}
      <div className= 'bottom-menu'>
        <ul id='menu'>
          <MenuContainer link={'#'} icon ={<HomeRounded />} />
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
