import React, {useState} from 'react';
import {useAuth} from "../hook/useAuth";
import MyButton from "./UI/button/MyButton";
import "../styles/login.css";
import MyInput from "./UI/input/MyInput";
import MyForm from "./UI/form/MyForm";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();

    const loginHandler = async e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        };
        login(user);
    }

    const menuButtonHandler = (e)=>{
        e.target.nextElementSibling.classList.toggle("active");
        
    }

    return(
        <div>
            <MyButton onClick={menuButtonHandler}>Войти</MyButton>
            <div className="Auth-form-container">
                <MyForm  onSubmit={loginHandler}>
                            <MyInput
                                placeholder="Введите логин"
                                name='username'
                                type='text'
                                value={username}
                                required
                                onChange={e => setUsername(e.target.value)}
                            />
                            <MyInput
                                name='password'
                                type="password"
                                placeholder="Введите пароль"
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                            />
                            <MyButton type="submit">
                                Подтвердить
                            </MyButton>
                </MyForm>
            </div>
        </div>
    );
};

export default Login;

