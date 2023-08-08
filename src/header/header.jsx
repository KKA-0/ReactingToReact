import React from 'react';
import classes from './headerStyle.module.css';
import { Link } from 'react-router-dom';
 
const Header = () => {
    return (
    <nav>
        <Link to='/'><img className={classes.logoImage} src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo'></img></Link>
        <Link to='/contact'><h1 className={classes.contacts} >Constact us</h1></Link>
    </nav>
    );
}
      
export default Header;