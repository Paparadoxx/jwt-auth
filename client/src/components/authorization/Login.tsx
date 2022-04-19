import React, {useState, FC, useContext} from 'react';
import './authorization.less';
import Input from "../../utils/input/input";
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const Login: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
   const {store} = useContext(Context);

   return (
      <div className='authorization'>
         <div className="authorization__header">Авторизация</div>
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
        	<button className="authorization__btn" 
				onClick={() => store.login(email, password)}>
				Войти
			</button>
      </div>
    );
};

export default observer(Login);