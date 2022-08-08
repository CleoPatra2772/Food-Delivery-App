
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import './App.css';
import BannerName from './components/banner/banner-name.component';
import Header from './components/header/header.component';
import MenuContainer from './components/menu-container/menu-container.component';
import food from './components/assets/img/food.png';
import { SubMenuContainer } from './components/sub-menu-container/sub-menu-container.component';
import { MenuCard } from './components/menu-card/menu-card.component';
import burger from './components/assets/food-img/burger.png';
import { MenuItems, Items } from './components/data';
import { ItemCard } from './components/item-card/item-card.component';
import DebitCard from './components/debit-card/debit-card.component';
import CartItem from './components/cart-item/cart-item.component';

function App() {
  //Main dish state
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );

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
  },[isMainData]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  }

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
                  <div key={data.id} onClick = {() => setData(data.itemId)}>
                <MenuCard 
                imgSrc={data.imgSrc} 
                name={data.name} 
                isActive = {data.id === 1 ? true : false} />
                </div>

                ) )
              }

              </div>
              <div className='dish-item-container'>
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
              
              {/* {
                isMainData && isMainData.map((data => (
                  <ItemCard key={data.id} imgSrc={data.imgSrc} 
                name={data.name} ratings={data.ratings} price={data.price}/>
                )))
              } */}
                
              </div>
            </div>
          </div>

          <div className='right-menu'>
              <div className='debit-card-container'>
                <div className='debit-card'>
                  <DebitCard />
                </div>
              </div>
            
            <div className='cart-checkout-container'>
              <div className='cart-container'>
                <SubMenuContainer name={"Cart Items"}/>

                <div className='cart-items'>
                  <CartItem 
                    name={'Burger'}
                    imgSrc= {"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"}
                    qty = {"3"}
                    price = {"7.99"}
                  />
                </div>
              </div>
              <div className='total-section'>
                <h3>Total</h3>
                <p><span>$</span>45.5</p>
              </div>

              <button className='checkout'>Check Out</button>
            </div>
          </div>
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
