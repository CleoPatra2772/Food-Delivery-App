import { ChevronRightRounded } from '@mui/icons-material';
import './sub-menu-container.styles.css';

export const SubMenuContainer = ({name}) => {
    return (
        <div className='sub-menu-container'>
            <h3>{name}</h3>
            <div className='view-all'>
                <p>View All</p>
                <i><ChevronRightRounded /></i>
            </div>
        </div>
    );
}