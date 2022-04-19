import { observer } from 'mobx-react-lite';
import React, { useContext, useState, FC } from 'react';
import { Context } from '..';


 const LoginForm: FC = () => {
	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const {store} = useContext(Context);

  return (
	 <div>
		<input
			type='text'
			placeholder='username'
			value={username}
			onChange={e => setUsername(e.target.value)}
		/>
		<input
			onChange={e => setEmail(e.target.value)}
			value={email}
			type='text'
			placeholder='email'
		/>
		<input
			onChange={e => setPassword(e.target.value)}
			value={password}
			type='password'
			placeholder='Пароль'
		/>
		<button 
			onClick={()=> store.login(email, password)}
		>Логин
		</button>
		<button 
			onClick={()=> store.registration(username, email, password)}
		>Регистрация
		</button>
	 </div>
  )
}

export default observer(LoginForm);
