import './menu-container.styles.css';

const MenuContainer = ({link, icon}) => {


    return (
    <li>
        <a href={link}>
            <span className='icon' >{icon}</span>
        </a>
    </li>
)
}

export default MenuContainer;