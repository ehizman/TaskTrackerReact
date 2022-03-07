import PropTypes from 'prop-types';
import { Button } from './Button';
import { useLocation } from 'react-router-dom';


const Header = ({title, onAdd, showAdd}) => { 
    const location = useLocation()
    return (
        <header style={{textAlign: "center"}}>
            <h1>{title}</h1>
            <br/>
            {location.pathname === "/" && <Button color = {showAdd?'green':'red'} text= {showAdd?'Close':'Add'} onClick= {onAdd}/>}
        </header> 
    ) 
};

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
