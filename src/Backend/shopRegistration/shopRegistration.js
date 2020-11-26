import React from 'react';
import {Component} from 'react';
import './shopRegistration.css'
import {Link} from 'react-router-dom';

class ShopRegistration extends Component  {


    render() {
        return (
            <div>
                <div className='container registration z-index-0'>
                    <div className='card z-depth-0'>
                        <form className="text-center px-5 py-4 my-2" action="#!">
                            <div className="form-row mb-4">
                                <div className="col">
                                    <input type="text" id="defaultRegisterFormFirstName" className="form-control form-aut" placeholder="Ім'я" />
                                </div>
                                <div className="col">
                                    <input type="text" id="defaultRegisterFormLastName" className="form-control form-aut" placeholder="Фамілія" />
                                </div>
                            </div>
                            <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4 form-reg" placeholder="Електронна пошта" />
                            <input type="text" id="defaultRegisterPhonePassword" className="form-control mb-4 form-reg" placeholder="Номер телефону" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                            <input type="checkbox" className="custom-control-input form-reg" id="defaultRegisterFormNewsletter" />
                            <input type="password" id="defaultRegisterFormPassword" className="form-control form-reg" placeholder="Пароль" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                            <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-2">
                                Щонайменше 8 літер латиницею
                            </small>
                            <a href='' className='p-2 m-0 text-left w-100' >
                                Авторизуватися
                             </a>
                            <button className="btn btn-reg font-weight-bold mb-4 mt-2 mx-0 w-100" type="submit">Реєстрація</button>
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