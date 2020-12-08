import React from 'react';
import {Component} from 'react';
import './shopRegistration.css'
import {Link} from 'react-router-dom';

let cl = console.log


function fetchRegister(_this){
    const url = 'http://yvonne-server.loc/api/register';

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
            _this.props.setUserData(data) // сохраняем данные в App.state
            _this.props.changeModalBody('successRgistration')
        }else{
            _this.setState({alert:'Неверный логин или пароль'})
            if(data.errors) _this.setState({errors: _this.getErrorsList(data.errors)})
        }
    });
}


class ShopRegistration extends Component  {


    state = {
        form: {
            name: 'TestName',
            last_name: 'LastName',
            email: 'kluettgen@esxample.com',
            phone: '13246',
            password: 'password',
            password_confirmation: 'password',
            device_name: 'chrome',
        },
        alert: '',
        errors: [],
    }

    goToAuthorization = () => {
        // cl('authorization')
        this.props.changeModalBody('authorization')
    }

    changeInputHandler = (event) => {
        let formData = {...this.state.form}
        formData[event.target.name] = event.target.value
        this.setState({form: formData})
    }

    registerSubmit = () => {
        fetchRegister(this)
    }

    getErrorsList = (errors) => {
        let errorsList = []
        for(let error in errors){
            errorsList.push(errors[error])
        }
        return errorsList
    }

    render() {
        return (
            <div>
                <div className='container registration z-index-0'>
                    <div className='card z-depth-0'>
                        <form className="text-center px-5 py-4 my-2" action="#!">
                            <ul className="errors-list">
                            {this.state.errors.map((error) => (
                                <li style={{color:'red'}}>{error}</li>
                            ))}
                            </ul>
                            <div className="form-row mb-4">
                                <div className="col">
                                    <input onChange={this.changeInputHandler} value={this.state.form.name} name="name"  type="text" id="defaultRegisterFormFirstName" className="mx-auto justify-content-center form-control form-aut" placeholder="Ім'я" />
                                </div>
                                <div className="col">
                                    <input onChange={this.changeInputHandler} value={this.state.form.last_name} name="last_name" type="text" id="defaultRegisterFormLastName" className="mx-auto justify-content-center form-control form-aut" placeholder="Фамілія" />
                                </div>
                            </div>
                            <input onChange={this.changeInputHandler} value={this.state.form.email} name="email"  type="email" id="defaultRegisterFormEmail" className="mx-auto justify-content-center w-100 form-control mb-4 form-reg" placeholder="Електронна пошта" />
                            <input onChange={this.changeInputHandler} value={this.state.form.phone} name="phone" type="text" id="defaultRegisterPhonePassword" className="mx-auto justify-content-center form-control mb-4 form-reg" placeholder="Номер телефону" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                            <input onChange={this.changeInputHandler} value={this.state.form.password} name="password" type="password" id="defaultRegisterFormPassword" className="mx-auto justify-content-center form-control form-reg" placeholder="Пароль" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                            <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-2">
                                Щонайменше 8 літер латиницею
                            </small>
                            <a href='#' onClick={this.goToAuthorization} className='p-2 m-0 text-left w-100' >
                                Авторизуватися
                             </a>
                            <button onClick={this.registerSubmit} className="btn btn-reg font-weight-bold mb-4 mt-2 mx-0 w-100" type="button">Реєстрація</button>
                            <p>В той час як ви натискаєте на<em> Реєстрація </em>, ви погоджуєтесь із<a href="/" target="_blank"> політикою конфіденційності</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopRegistration;