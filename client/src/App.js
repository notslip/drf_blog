import React from "react";
import './styles/App.css';
import {AuthProvider} from "./hoc/AuthProvider";
import MainRoutes from "./routers/MainRouters";

//todo 
// сделать отдельную страницу и верстку тегов так же добавить её в меню под названием категории
// сделать форму создания и редактирования поста
// сделать меню логина закрывающимся по нажатию на другую область, так же добавить туда сслыку на регистрацию
// сдлеать компонет loading для отображения загрузк
// добавить теги в отдельную страницу поста
// форма редактирования профиля
// сделать страницу с ошибками и настроить ошибки
// сделать переменные-цвета в app.css

function App() {
    return(
        <div>
            <AuthProvider>
                <MainRoutes/>
            </AuthProvider>
        </div>
    )
}

export default App;
