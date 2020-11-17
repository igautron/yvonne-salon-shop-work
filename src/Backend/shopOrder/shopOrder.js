import React from 'react';
import {Component} from 'react';
import './shopOrder.css'


import PRIVAT from './CARD/PRIVAT'
import LIQPAY from './CARD/LIQPAY'
import VISA from './CARD/VISA'
import SHIPMENT from './CARD/SHIPMENT'


import {Link} from 'react-router-dom'

import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBInput,
    MDBCollapse


} from 'mdbreact';



class ShopOrder extends Component  {

    state = {
        radio: 0
    }

    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }))
    }


    onClick = nr => () => {
        this.setState({
            radio: nr
        })


    }

    render() {
        return (
            <div className='rgba-purple-slight'>
                <div className='container pb-5'>
                    <h1 className='h1-responsive font-weight-bolder m-0 pt-2 py-xl-5 py-lg-5 py-md-5 py-sm-5 py-5'>Форма замовлення</h1>
                    <p className='order-p w-75 justify-content-center m-auto text-center w-responsive pb-5'>Для оформлення онлайн-замовлення заповніть будь-ласка форму, яка наведена нижче. Після обробки заяки наш спеціаліст зв'яжеться з вами за номером телефону, який ви надаєте.</p>
                    <MDBCard className='mt-xl-4 mt-lg-4 mt-md-2 mt-sm-3 mt-2 border-0 z-index-0 bg-transparent'>
                        <p className='pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5 font-weight-bold'>Список замовлених товарів</p>
                        <MDBRow className='pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5 m-0 pt-xl-4 pt-lg-0 pt-md-0 pt-sm-0 pt-0'>
                            Тут зявляються товари із корзини
                        </MDBRow>
                    </MDBCard>
                    <MDBCard className='mt-xl-4 mt-lg-4 mt-md-4 mt-sm-3 mt-2 border-0 z-index-0 bg-transparent'>
                        <p className='pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5 font-weight-bold'>Контактна інформація</p>
                        <MDBRow className='m-0 pt-xl-4 pt-lg-0 pt-md-0 pt-sm-0 pt-0'>
                            <MDBCol className='d-inline pr-0'>
                                <MDBCol className='col-10 d-flex flex-column mb-3 pl-4 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="fname"><i className="fa fa-user"></i>Ім'я</label>
                                    <input className='w-100 order' type="text" id="fname" name="firstname" placeholder="Анастасія" />
                                </MDBCol>
                                <MDBCol className='col-10 d-flex  flex-column mb-3 pl-4 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="email"><i className="fa fa-user"></i>Фамілія</label>
                                    <input className='w-100 order' type="text" id="email" name="email" placeholder="Іванова" />
                                </MDBCol>
                            </MDBCol>
                            <MDBCol className='d-inline pl-0'>
                                <MDBCol className='col-10 d-flex flex-column mb-3 pr-4 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-4 pl-0'>
                                    <label htmlFor="fname"><i className="far fa-envelope"></i>Email</label>
                                    <input className='w-100 order' type="text" id="fname" name="email" placeholder="john@example.com" />
                                </MDBCol>
                                <MDBCol className='col-10 d-flex  flex-column mb-3 pr-4 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-4 pl-0'>
                                    <label htmlFor="email"><i className="fas fa-map-marked-alt"></i>Місто</label>
                                    <input className='w-100 order' type="text" id="email" name="city" placeholder="Київ" />
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='m-0 pt-0 pb-xl-4 pb-lg-0 pb-md-0 pb-sm-0 pb-0'>
                            <MDBCol className='d-inline pr-0'>
                                <MDBCol className='col-10 d-flex flex-column mb-3 pl-4 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="fname"><i className="fa fa-user"></i>По-батькові</label>
                                    <input className='w-100 order' type="text" id="fname" name="firstname" placeholder="Віталіївна" />
                                </MDBCol>
                                <MDBCol className='col-10 d-flex  flex-column mb-3 pl-4 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="email"><i className="fas fa-phone-alt"></i>Телефон</label>
                                    <input className='w-100 order' type="text" id="email" name="" placeholder="+380671010109" />
                                </MDBCol>
                            </MDBCol>
                            <MDBCol className='d-inline pl-0'>
                                <MDBCol className='col-10 d-flex flex-column mb-3 pr-4 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-4 pl-0'>
                                    <label htmlFor="adr"><i className="fas fa-map-marker-alt"></i>Вулиця</label>
                                    <input className='w-100 order' type="text" id="adr" name="address" placeholder="вулиця Данченко" />
                                </MDBCol>
                                <MDBCol className='col-10 d-flex  flex-column mb-3 pr-4 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-4 pl-0'>
                                    <label htmlFor="city"><i className="fas fa-house-user"></i>Будинок</label>
                                    <input className='w-100 order' type="text" id="city" name="address" placeholder="32" />
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard className='mt-xl-2 mt-lg-2 mt-md-2 mt-sm-3 mt-2 border-0 z-index-0 bg-transparent'>
                        <MDBRow className='m-0 py-xl-4 py-lg-0 py-md-0 py-sm-0 py-0 flex-column'>
                            <p className='font-weight-bold  pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5 font-weight-bold'>Спосіб доставки</p>
                            <p className='pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5'>Оберіть найзручніший для Вас спосіб доставки</p>
                            <SHIPMENT />
                            <p className='blue-grey-ic text-wrap font-smaller pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5 pt-4'>Як тільки ми отримаємо заявку на замовлення, одразу ж відправляємо товари на вказану Вами адресу. Після того, як товар прибуде на відділення, Вам обов'язково прийде повідомлення. Обіцяємо реалізувати замовлення якісно та швидко.</p>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard className='mt-xl-2 mt-lg-2 mt-md-2 mt-sm-3 mt-2 pb-0 border-0 z-index-0 bg-transparent'>
                        <MDBRow className='m-0 py-xl-4 py-lg-0 py-md-0 py-sm-0 py-0 flex-column'>
                            <p className='font-weight-bold  pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5 font-weight-bold'>Інформація про оплату товарів</p>
                            <p className='pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5'>Оберість найзручніший для Вас спосіб оплати. Оплату можливо здійснити наступним чином: </p>
                            <MDBCol className='pl-5'>
                                <div className="custom-control custom-radio ml-1 my-2">
                                    <MDBInput onClick={this.onClick=(1)} checked={this.state.radio===1 ? true : false} label="Оплата при отриманні товару готівкою кур'єру" type='radio' id='radio1' />
                                </div>
                                <div className="custom-control custom-radio ml-1 my-2">
                                    <MDBInput onClick={this.onClick=(2)} checked={this.state.radio===2 ? true : false} label="Оплата наложеним платежем (оплатіть при отриманні замовлення)"  type="radio" id="radio2"/>
                                </div>
                                <div className="custom-control custom-radio ml-1 my-2">
                                    <MDBInput onClick={this.toggleCollapse("basicCollapse")} checked={this.state.radio===3 ? true : false} label="Оплата картою Visa/Mastercard" type="radio" id="radio3"/>
                                </div>
                                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                                    <VISA />
                                </MDBCollapse>
                                <div className="custom-control custom-radio ml-1 my-2">
                                    <MDBInput onClick={this.toggleCollapse("basicCollapse")} checked={this.state.radio===4 ? true : false} label="Оплата LiqPay" type="radio" id="radio4"/>
                                </div>
                                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                                    <LIQPAY />
                                </MDBCollapse>
                                <div className="custom-control custom-radio ml-1 my-2">
                                    <MDBInput onClick={this.onClick=(5)} checked={this.state.radio===5 ? true : false} label="Оплата Privat24" type="radio" id="radio5"/>
                                </div>
                                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                                    <PRIVAT />
                                </MDBCollapse>
                            </MDBCol>
                                <p className='blue-grey-ic text-wrap font-smaller pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5 pt-4'>Внесені Вами дані збережено успішно. Поставте галочку давши згоду на обробку персональних даних та натисніть на кнопку замовити. Після того, як ми отримаємо Ваше замовлення, ми зв'яжемось із Вами. Дякуэмо за замовлення!</p>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard className='mt-0 border-0 z-index-0 bg-transparent pb-5'>
                        <MDBRow className='pl-1 ml-5 m-0 pt-0'>
                            <div className='d-inline-block mt-4 w-100'>
                                <div className='private-policy-text mb-0'>
                                    <MDBInput
                                        type="checkbox"
                                        value="conditions"
                                        id="materialInvalidCheck"
                                        required
                                        label=""
                                        className="p-2 ml-1"
                                    />
                                    <p className="pr-3 pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5 d-inline-flex private-policy w-75">Я ознайомлений з правилами та даю згоду на обробку персональних данних згідно положень Політики Конфіденційності</p>
                                </div>
                            </div>
                        </MDBRow>
                    </MDBCard>
                    <form method="POST" className='justify-content-center m-auto pb-5' action="https://www.liqpay.ua/api/3/checkout"
                          accept-charset="utf-8">
                        <input type="hidden" className="w-100" name="data" value="eyAidmVyc2lvbiIgOiAzLCAicHVibGljX2tleSIgOiAieW91cl9wdWJsaWNfa2V5IiwgImFjdGlvbiIgOiAicGF5IiwgImFtb3VudCIgOiAxLCAiY3VycmVuY3kiIDogIlVTRCIsICJkZXNjcmlwdGlvbiIgOiAiZGVzY3JpcHRpb24gdGV4dCIsICJvcmRlcl9pZCIgOiAib3JkZXJfaWRfMSIgfQ=="/>
                        <input type="hidden" className='w-100' name="signature" value="QvJD5u9Fg55PCx/Hdz6lzWtYwcI="/>
                        <Link to='./Congratulation'>
                           <a href="http://www.jquery2dotnet.com" className="btn-order px-2 px-sm-2 px-md-2 px-lg-4 px-xl-2 py-3 btn-deep-purple btn btn-success btn-block font-weight-bolder w-25 text-white" role="button">ЗАМОВИТИ</a>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default ShopOrder;