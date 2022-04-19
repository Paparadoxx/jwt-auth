import React, {useContext, useState} from 'react';
import './authorization.css';
import Input from "../../utils/input/input";
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const Registration = () => {
	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
   const {store} = useContext(Context);

    return (
      <div className='authorization'>
      	<div className="authorization__header">Регистрация</div>

			<Input 
				value={username} 
				setValue={setUsername} 
				type="text" 
				placeholder="Введите имя пользователя..."/>
         <Input 
				value={email} 
				setValue={setEmail} 
				type="text" 
				placeholder="Введите email..."/>
         <Input 
				value={password} 
				setValue={setPassword} 
				type="password" 
				placeholder="Введите пароль..."/>
         <button
				className="authorization__btn" 
				onClick={() => store.registration(username ,email, password)}>
					Зарегистрироваться
			</button>
      </div>
    );
};

export default observer(Registration);