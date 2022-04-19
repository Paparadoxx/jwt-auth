import { observer } from 'mobx-react-lite';
import React,{FC, useContext, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Context } from '.';
import Login from './components/authorization/Login';
import Registration from './components/authorization/Registration';
import Home from './components/home/Home';
import Header from './components/header/Header';
import './app.css';


const  App: FC = () => {

		const {store} = useContext(Context);
		useEffect(()=> {
				if (localStorage.getItem('token')){
						store.checkAuth()
				}
		}, []);

		if (store.isLoading){
				return <div>Загрузка...</div>
		}

		return (
			<BrowserRouter>
				<div className='app'>
					<Header/>
						<div className="container">
							{!store.isAuth ?
								<Routes>
									<Route path="/registration" element={<Registration/>}/>
									<Route path="/login" element={<Login/>}/>
									</Routes>:
									<Routes>
										<Route path="/" element={<Home/>}/>
									</Routes>
							}
							</div>
					</div>
			</BrowserRouter>
				// <div>
				//   <Navbar/>
				//   <h3>{store.isAuth ? store.user.username: "Пользователь не авторизован"}</h3>
				// </div>
		);
}

export default observer(App);
