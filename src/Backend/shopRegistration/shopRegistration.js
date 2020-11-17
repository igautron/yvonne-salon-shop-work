import React from 'react';
import {Component} from 'react';
import './shopRegistration.css'


class ShopRegistration extends Component  {

    render() {
        return (
            <div>
                <div className='container registration z-index-5'>
                    <div className='card'>
                        <h5 className='card-header white-text text-center py-4'>
                            <strong className='logo-autorization'>Реєстрація</strong>
                        </h5>
                        <form className="text-center border border-light px-5 py-4 my-2" action="#!">
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
                            <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                Щонайменше 8 літер латиницею
                            </small>
                            <button className="btn btn-reg font-weight-bold my-4 mx-0 w-100" type="submit">Реєстрація</button>
                            <p>В той час як ви натискаєте на<em> Реєстрація </em>, ви погоджуєтесь із<a href="" target="_blank"> політикою конфіденційності</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopRegistration;