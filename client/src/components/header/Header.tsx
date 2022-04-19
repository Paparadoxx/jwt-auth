import React, {useContext} from 'react';
import './header.css';
import {NavLink} from "react-router-dom";
import { Context } from '../..';


const Header = () => {
	const {store} = useContext(Context);
  
   return (
      <div className="container">
         <div className="header">
            <div className="navbar__logo">NavBar</div>
               {!store.isAuth &&  <div className="navbar__link">
					<NavLink to="/login">Войти</NavLink>
					<NavLink to="/registration">Регистрация</NavLink>
				</div>}
               {store.isAuth && <div className="navbar__login"
					onClick={() => store.logout()}
					>Выход</div>}
         </div>
      </div>
   );
};

export default Header;