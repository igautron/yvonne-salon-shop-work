import React from 'react';
import {Component} from 'react';
import './shopAutorization.css';


const cl = console.log

function getToken(_this){
    const url = 'http://yvonne-server.loc/api/login';

    fetch(url, {
        method: 'POST', // или 'PUT'
        body: new URLSearchParams(_this.state.form).toString(), // данные могут быть 'строкой' или {объектом}!
        headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
            }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        if(data.success === 'ok') {
            _this.setState({alert:''})
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            _this.props.loginModalToggle()
        }else{
            _this.setState({alert:'Неверный логин или пароль'})
        }
    });
}

function getUser(argument) {
    // body...
}

class ShopAutorization extends Component  {


    state = {
        form: {
            email: 'kluettgen@example.com',
            password: 'password',
            remember: true,
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


    loginSubmit = () => {
        getToken(this)
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