import React from 'react';
import {Component} from 'react';
import './shopAutorization.css';
import {Link} from 'react-router-dom';


async function postData(data){
    const url = 'http://yvonne-server.loc/api/login';

    try {
      const response = await fetch(url, {
        method: 'POST', // или 'PUT'
        // body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        body: data, // данные могут быть 'строкой' или {объектом}!
        headers: {
          // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      const json = await response.json();
      console.log(json)
      // console.log('Успех:', JSON.stringify(json));
    } catch (error) {
      console.error('Ошибка:', error);
    }
}

class ShopAutorization extends Component  {


    state = {
        email: '',
        password: '',
        remember: false,
    }

    changeEmailHandler = (event) => {
        let email = event.target.value
        this.setState({email})
    }

    changePasswordHandler = (event) => {
        let password = event.target.value
        this.setState({password: event.target.value})
    }

    loginSubmit = () => {
        postData(this.state)
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
                                <input onChange={this.changeEmailHandler} type='email' className="form-control mb-4 form-reg" placeholder="Електронна пошта" />
                                <input onChange={this.changePasswordHandler} type='password' className="form-control mb-4 form-reg" placeholder="Пароль" />
                                <div className="d-flex justify-content-around">
                                    <div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                            <label className="custom-control-label py-1 form-text" htmlFor="defaultLoginFormRemember">Запам'ятати мене</label>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="/" className='py-1 form-text'>Забули пароль?</a>
                                    </div>
                                </div>
                                <button onClick={this.loginSubmit} className="btn btn-reg font-weight-bold my-4 w-100" type="button">Авторизація</button>
                                <p>Ще не зареєстровані?
                                    <Link to='/shopRegistration'>
                                            <a href="/" className='pl-3' >Зареєструватись</a>
                                    </Link>
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