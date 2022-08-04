import { ChevronRightRounded } from '@mui/icons-material';
import './menu-card.styles.css';


export const MenuCard = ({imgSrc, name, isActive}) => {
    return <div className={`row-menu-card ${isActive ? `active`: ``} `}>
    <div className='img-box'> 
    <img src={imgSrc} alt='' />
    </div>
    <h3>{name}</h3>
    <i className='load-menu'>
        <ChevronRightRounded />
    </i>
    </div>
}