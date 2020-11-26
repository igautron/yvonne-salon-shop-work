import React from 'react';
import {Component} from 'react';
import './shopAutorization.css';
import {Link} from 'react-router-dom';

const cl = console.log

async function postData(_this){
    const url = 'http://yvonne-server.loc/api/sanctum/token';

    try {
      const response = await fetch(url, {
        method: 'POST', // или 'PUT'
        body: new URLSearchParams(_this.state.form).toString(), // данные могут быть 'строкой' или {объектом}!
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      const json = await response.json();

      _this.setState({alert:''})
    } catch (error) {
      _this.setState({alert:'Неверный логин или пароль'})
    }
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

    rememberInputChange = () => {
        let formData = {...this.state.form}
        formData.remember = !this.state.form.remember
        this.setState({form: formData})
    }

    loginSubmit = () => {
        postData(this)
    }

    goToRegistration = () => {
        this.props.goToRegistration()
    }


    render() {
            return (
                <div>
                    <div className='w-100'>
                    <div className='autorization'>
                        <div className='card z-index-5'>
                            <h5 className='card-header white-text text-center py-4'>
                                <strong className='logo-autorization'>Авторизація</strong>
                            </h5>
                            <form className='text-center border border-light p-5' action="#!">
                                <p style={{color:'red'}}>
                                    {this.state.alert}
                                </p>
                                <input onChange={this.changeEmailHandler} value={this.state.form.email} type='email' className="form-control mb-4 form-reg" placeholder="Електронна пошта" />
                                <input onChange={this.changePasswordHandler} value={this.state.form.password} type='password' className="form-control mb-4 form-reg" placeholder="Пароль" />
                                <div className="d-flex justify-content-around">
                                    <div>
                                        <div className="custom-control custom-checkbox">
                                            <input onChange={this.rememberInputChange} checked={this.state.form.remember} type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                            <label className="custom-control-label py-1 form-text" htmlFor="defaultLoginFormRemember">Запам'ятати мене</label>
                                        </div>
                                    </div>
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