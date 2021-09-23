import React from 'react';
import Menubar from '../Menubar/Menubar';
 import './Header.css';

const Header = () => {
    return (
        <div className="menubar-fixed">
           <Menubar></Menubar>
        </div>
    );
};

export default Header;