import React from 'react';
import {Component} from 'react';
import './shopAutorization.css'
import {
    MDBBtn,
    MDBIcon
} from 'mdbreact';

import $ from 'jquery';
import {Link} from 'react-router-dom';



class ShopAutorization extends Component  {
    render() {
            return (
                <div>
                    <div className='container autorization z-index-5'>
                        <div className='card'>
                            <h5 className='card-header white-text text-center py-4'>
                                <strong className='logo-autorization'>Авторизація</strong>
                            </h5>
                            <form className='text-center border border-light p-5' action="#!">
                                <input type='email' className="form-control mb-4 form-reg" placeholder="Електронна пошта" />
                                <input type='password' className="form-control mb-4 form-reg" placeholder="Пароль" />
                                <div className="d-flex justify-content-around">
                                    <div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                            <label className="custom-control-label py-1 form-text" htmlFor="defaultLoginFormRemember">Запам'ятати мене</label>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="" className='py-1 form-text'>Забули пароль?</a>
                                    </div>
                                </div>
                                <button className="btn btn-reg font-weight-bold my-4 w-100" type="submit">Авторизація</button>
                                <p>Ще не зареєстровані?
                                    <Link to='/shopRegistration'>
                                        <a href="" className='pl-3'>Зареєструватись</a>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default ShopAutorization;