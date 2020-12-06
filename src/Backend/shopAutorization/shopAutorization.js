import React from 'react';
import {Component} from 'react';
import './shopAutorization.css';


const cl = console.log

function doLogin(_this){
    const url = 'http://yvonne-server.loc/api/login'; // урл UserController->login 

    // получение данных с сервера
    fetch(url, {
        method: 'POST', // или 'PUT'
        body: new URLSearchParams(_this.state.form).toString(), // отправляем данные из формы
        headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
            }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if(data.success === 'ok') {
            _this.setState({alert:''}) // очищаем alert
            localStorage.setItem('token', data.token); // сохраняем данные в localStorage
            localStorage.setItem('user', JSON.stringify(data.user)); // объект user преобразовуем в строку (JSON.stringify)
            _this.props.setUserData(data) // сохраняем данные в App.state
            _this.props.loginModalToggle() // скрываем модальное окно
        }else{
            _this.setState({alert:'Неверный логин или пароль'}) // выводим сообщение об ошибке
        }
    });
}

function getUser(argument) {
    // body...
}

class ShopAutorization extends Component  {


    state = {
        form: {
            email: 'grady.anabelle@example.net',
            password: 'password',
            device_name: 'chrome'
        },
        alert: '',
    }

    changeEmailHandler = (event) => {
        let formData = {...this.state.form}
        formData.email = event.target.value
        this.setState({form: formData})
    }

    changePasswordHandler = (event) => {
        let formData = {...this.state.form}
        formData.password = event.target.value
        this.setState({form: formData})
    }


    loginSubmit = () => { // срабатывает при клике на "Авторизоваться"
        doLogin(this) // вызываем функцию doLogin
    }


    goToRegistration = () => {
        // cl('registration')
        this.props.changeModalBody('registration')
    }

    render() {
            return (
                <div>
                    <div className='w-100'>
                    <div className='m-0'>
                        <div className='card z-depth-0 border-0'>
                            <form className='text-center px-5 pb-5 pt-3' action="#!">
                                <p style={{color:'red'}}>
                                    {this.state.alert}
                                </p>
                                <input onChange={this.changeEmailHandler} value={this.state.form.email} type='email' className="form-control mb-4 form-reg" placeholder="Електронна пошта" />
                                <input onChange={this.changePasswordHandler} value={this.state.form.password} type='password' className="form-control mb-4 form-reg" placeholder="Пароль" />
                                <div className="d-flex justify-content-around">
                                     <div>
                                        <a href="/" className='py-1 form-text'>Забули пароль?</a>
                                    </div>
                                </div>
                                <button onClick={this.loginSubmit} className="btn btn-reg font-weight-bold my-4 w-100" type="button">Авторизація</button>
                                <p>Ще не зареєстровані?
                                    <a href="#" onClick={this.goToRegistration} className='pl-3' >Зареєструватись</a>
                                </p>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            )
        }
    }

export default ShopAutorization;