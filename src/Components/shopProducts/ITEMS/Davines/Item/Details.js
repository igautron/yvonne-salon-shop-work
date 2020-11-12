import {
    MDBCard, MDBCardBody, MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon, MDBLink,
    MDBNav,
    MDBNavItem,
    MDBNavLink, MDBRow,
    MDBTabContent, MDBTable, MDBTableBody,
    MDBTabPane
} from 'mdbreact';
import React from 'react';

import './../../Details.scss'

import Item from './Item';


class Details extends React.Component {

    state = {
        collapseID: ''
    }

    state = {
        value: 0
    }

    state = {
        items: {
            default: '1',
        },
        product:{
            title:'',
            price:'',
            articul: '',
            types: '',
            brand: '',
            seria: '',
            amount: '',
            hr1: '',
            a1: '',
            discr2: '',
            gender: '',
            discr3: '',
            country: ''
        }
    };




    togglePills = (type, tab) => e => {
        e.preventDefault();
        if (this.state.items[type] !== tab) {
            let items = { ...this.state.items };
            items[type] = tab;
            this.setState({
                items
            });
        }
    };

     componentDidMount(props) {
        // fetch('https://reqres.in/api/products/')
        //   .then(response => response.json())
        //   .then(products => this.setState({products: products.data}));
        const data = {
            "status": "ok",
            "product": {
                "title":"super product 1",
                "price":"11.99",
                "articul": "1025",
                "types": "Шампунь",
                "brand": "Davines",
                "seria": "for you",
                "amount": "200 ml",
                "hr1": "vwebertbtml",
                "a1": "vwebertbtml",
                "discr2": "vwebertbtml",
                "gender": "vwebertbtml",
                "discr3": "vwebertbtml",
                "country": "vwebertbtml"

            },
        };
        this.setState({product: data.product});
    }


       render() {
           let title, price, articul, types, brand, seria, amount, hr1, a1, discr2, gender, discr3, country;
           if (this.state.product) {
               title = this.state.product.title;
               price = this.state.product.price;
               articul = this.state.product.articul;
               types = this.state.product.types;
               brand = this.state.product.brand;
               seria = this.state.product.seria;
               amount = this.state.product.amount;
               hr1 = this.state.product.hr1;
               a1 = this.state.product.a1;
               discr2 = this.state.product.discr2;
               gender = this.state.product.gender;
               discr3 = this.state.product.discr3;
               country = this.state.product.country;
           }else{
               title = '';
               price = '';
               articul = '';
               types = '';
               brand = '';
               seria = '';
               amount = '';
               hr1 = '';
               a1 = '';
               discr2 = '';
               gender = '';
               discr3 = '';
               country = '';
           }

        return (
            <div>
                <div className='container'>
                    <div className='pt-3 mt-2 mt-lg-5'>
                        <button type="button" className="btn btn-link float-left bg-transparent "><MDBIcon icon="arrow-left" className='text-left float-left '/></button>
                       <div className='d-inline-flex flex-wrap'>
                            <MDBCol sm='6' md='6' lg='6' xl='5' className='m-0'>
                                <div className='p-1 m-0 p-2'>
                                    <img className='m-auto w-100 justify-content-center d-block' src={require('../../../../../img/catalogue/f45.jpg')} />
                                </div>
                            </MDBCol>
                            <MDBCol sm='6' md='6' lg='6' xl='7' className='p-2 m-0'>
                                <div className='p-2'>
                                    <h3 className='font-weight-normal'>{title}</h3>
                                    <p className='font-weight-bold py-1 m-0 grey-text'>Артикул:<span className='font-weight-normal'>{articul}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Вид товару: <span className='font-weight-normal'>{types}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Виробник: <span className='font-weight-normal'>{brand}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Серія: <span className='font-weight-normal'>{seria}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Об'єм: <span className='font-weight-normal'>{amount}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Тип волосся: <span className='font-weight-normal'>{hr1}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Призначення: <span className='font-weight-normal'>{a1}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Пол: <span className='font-weight-normal'>{gender}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Опис: <span className='font-weight-normal'>{discr2}</span></p>
                                    <p className='bg-white p-0 green-text py-1 m-0'><span className='font-weight-bold'><i className="fas fa-check green-text font-weight-bold p-2"></i>В наявності</span></p>
                                    <p className='font-weight-bold py-1 m-0 price'>Ціна: <span className='font-weight-bold py-1 m-0'>{price}</span></p>
                                    <div className='d-inline-flex flex-wrap text-center py-4 w-100'>
                                        <button className='m-0 item-to-cart border-0 z-depth-1 mx-3 my-2 white-text' id='to-cart'>В КОРЗИНУ</button>
                                        <button className='m-0 item-to-cart border-0 z-depth-1 mx-3 my-2 white-text'>КУПИТИ</button>
                                    </div>
                                </div>
                            </MDBCol>
                        </div>
                    </div>
                    <div>
                        <MDBNav  className='item-pills pills'>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal px-1 py-3 discription-link text-center'
                                    to='#'
                                    active={this.state.items['default'] === '1'}
                                    onClick={this.togglePills('default', '1')}
                                >
                                    ОПИС
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal  px-1 py-3 discription-link text-center'
                                    to='#'
                                    active={this.state.items['default'] === '2'}
                                    onClick={this.togglePills('default', '2')}
                                >
                                    ДЕТАЛІ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal discription-link px-1 py-3 text-center'
                                    to='#'
                                    active={this.state.items['default'] === '3'}
                                    onClick={this.togglePills('default', '3')}
                                >
                                    СХОЖІ ТОВАРИ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal discription-link px-1 py-3 text-center'
                                    to='#'
                                    active={this.state.items['default'] === '4'}
                                    onClick={this.togglePills('default', '4')}
                                >
                                    ДОСТАВКА
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={this.state.items['default']} className='m-2 mb-5'>
                            <MDBTabPane tabId='1' className='mt-4 p-2'>
                                <p className='font-weight-bold'>
                                    Детальний опис товару:
                                </p>
                                <div className='item-method-of-use'>
                                    {discr3}
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId='2'  className='mt-4 p-2'>
                                <MDBTable>
                                    <MDBTableBody>
                                        <tr>
                                            <td>Артикул товару:</td>
                                            <td>{articul}</td>
                                        </tr>
                                        <tr>
                                            <td>Об'єм:</td>
                                            <td>{amount} мл</td>
                                        </tr>
                                        <tr>
                                            <td>Тип товару:</td>
                                            <td>{types}</td>
                                        </tr>
                                        <tr>
                                            <td>Країна виробник:</td>
                                            <td>{country}</td>
                                        </tr>
                                        <tr>
                                            <td>Виробник:</td>
                                            <td>{brand}</td>
                                        </tr>
                                        <tr>
                                            <td>Серія:</td>
                                            <td>{seria}</td>
                                        </tr>
                                        <tr>
                                            <td>Призначення:</td>
                                            <td>{a1}</td>
                                        </tr>
                                        <tr>
                                            <td>Категорія:</td>
                                            <td>{gender}</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBTabPane>
                            <MDBTabPane tabId='3' className='m-1 p-2'>
                                <MDBRow className='mt-4 p-0'>
                                    <MDBCol lg='4' md='4' xl='4' sm='6' className='pb-5 p-2 col-8' >
                                        <Item />
                                    </MDBCol>
                                    <MDBCol lg='4' md='4' xl='4' sm='6' className='pb-5 p-2 col-8' >
                                        <Item />
                                    </MDBCol>
                                    <MDBCol lg='4' md='4' xl='4' sm='6' className='pb-5 p-2 col-8' >
                                        <Item />
                                    </MDBCol>
                                </MDBRow>
                            </MDBTabPane>
                            <MDBTabPane tabId='4'  className='mt-4 m-1 p-2'>
                                <p className='font-weight-bold'>
                                    Доставка
                                </p>
                                <MDBTable>
                                    <MDBTableBody>
                                        <p className='pl-0 w-100'>Відправлення товарів відбувається одразу ж після отримання замовлення.</p>
                                        <tr>
                                            <td><a href='#'>Самовивіз із салону ІВОН (вул. Данченко 32)</a></td>
                                            <td className='text-green'>Безкоштовно</td>
                                        </tr>
                                        <tr>
                                            <td><a href='https://novaposhta.ua/'>Самовивіз із НОВОЇ ПОШТИ</a></td>
                                            <td className='text-green'>Безкоштовно</td>
                                        </tr>
                                        <tr>
                                            <td><a href='www.ukrposhta.ua'>Самовивіз із УКРПОШТИ</a></td>
                                            <td className='text-green'>Безкоштовно</td>
                                        </tr>
                                        <tr>
                                            <td><a href='#'>Доставка кур'єром (м. Київ)</a></td>
                                            <td className='text-green'>50 грн</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                                <p className='font-weight-bold'>
                                    Оплата
                                </p>
                                <p className='pl-0'>Оплата товарів відбувається  через передплату на карту Приват Банка, також наложеним платежем</p>
                                <div className='item-payment mb-5'>
                                    <p>
                                        <a href='https://www.privat24.ua/' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../../img/shipment/privat.png')} /></span>
                                            PRIVAT 24
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.visa.com.ua/uk_UA' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../../img/shipment/Visa.jpg')}/></span>
                                            VISA
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.mastercard.ua/uk-ua.html' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../../img/shipment/MasterCard.png')} /></span>
                                            MASTERCARD
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.liqpay.ua/uk' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../../img/shipment/liqpay.png')} /></span>
                                            LIQPAY
                                        </a>
                                    </p>
                                </div>
                                <p className='font-weight-bold'>
                                    Гарантія
                                </p>
                                <div>
                                    <span className='font-weight-bold'>Повернення замовлених товарів неможливе згідно із Законом України 'Про захист справ споживачів'.</span>
                                    (Відповідно до Постанови Кабінету Міністрів України від 19 березня 1994 р. № 172 "Про реалізацію окремих положень Закону України "Про захист прав споживачів", затверджено перелік товарів належної якості, що не підлягають обміну (поверненню): Парфюмерно-косметичні вироби. )
                                </div>
                            </MDBTabPane>
                        </MDBTabContent>
                    </div>
                </div>
            </div>
        )
    }
}


export default Details;
