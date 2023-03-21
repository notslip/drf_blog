import React, {useState} from 'react';
import MyForm from "../components/UI/form/MyForm";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import UserService from "../API/UserService";

const Registration = () => {
    const [username, setUsername]=useState();
    const [password, setPassword]=useState();
    async function regHandler(e){
        e.preventDefault();
        const user = {
            username: username,
            password: password
        };
        const response = await UserService.regUser(user);
        console.log(response);
    }
    return (
        <div>
            <MyForm  onSubmit={regHandler}>
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
    );
};

export default Registration;