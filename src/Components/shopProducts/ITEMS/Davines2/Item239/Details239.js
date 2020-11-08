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

import Item8 from '../../Davines/Item8/Item8'
import Item10 from '../../Davines/Item10/Item10'
import Item3 from '../../Davines/Item3/Item3'
import Item9 from '../../Davines/Item9/Item9';


class Details239 extends React.Component {
    state = {
        collapseID: ''
    }


    state = {
        value: 0
    }

    state = {
        items: {
            default: '1',
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


    decrease = () => {
        this.setState ({value: this.state.value - 1 })
    }

    increase = () => {
        this.setState ({value: this.state.value + 1 })
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='pt-3'>
                        <button type="button" className="btn btn-link float-left w-100 border-danger"><MDBIcon icon="arrow-left" className='text-left float-left '/></button>
                        <div className='d-inline-flex '>
                            <MDBCol sm='6' md='6' lg='6' xl='5' className='m-0'>
                                <div className='p-1 m-0 p-2'>
                                    <img className='m-auto w-100 justify-content-center d-block' src={require('../../../../../img/catalogue/s239.jpg')} />
                                </div>
                            </MDBCol>
                            <MDBCol sm='6' md='6' lg='6' xl='7' className='p-2 m-0'>
                                <div className='p-2'>
                                    <h3 className='font-weight-normal'>Гель для волосся Davines PURIFYING Gel, 150 мл</h3>
                                    <p className='font-weight-bold py-1 m-0 grey-text'>Артикул:<span className='font-weight-normal'>1239</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Вид товару: <span className='font-weight-normal'>Гель</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Виробник: <span className='font-weight-normal'>Davines</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Об'єм: <span className='font-weight-normal'>150 мл</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Призначення: <span className='font-weight-normal'>Захист, салонний догляд</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Тип шкіри: <span className='font-weight-normal'>Для усіх типів</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Опис: <span className='font-weight-normal'>Лікування гелем для очищення шкіри голови, схильної до лупи. Складено протигрибкові та антибактеріальні дії, щоб зберегти шкіру голови чистою та здоровою.</span></p>
                                    <p className='bg-white p-0 green-text py-1 m-0'><span className='font-weight-bold'><i className="fas fa-check green-text font-weight-bold p-2"></i>В наявності</span></p>
                                    <p className='font-weight-bold py-1 m-0 price'>Ціна: <span className='font-weight-bold py-1 m-0'> грн</span></p>
                                    <div className='d-inline-flex flex-wrap text-center w-100 py-4 m-0'>
                                        <button className='float-left m-0 item-to-cart white-text border-0 z-depth-1 mr-5'>В КОРЗИНУ</button>
                                        <button className='float-left m-0 item-to-cart white-text border-0 z-depth-1'>КУПИТИ</button>
                                    </div>
                                </div>
                            </MDBCol>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <MDBNav pills className='item-pills'>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    link
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
                                    link
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
                                    link
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
                                    link
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
                            <MDBTabPane tabId='1' className='mt-4'>
                                <p className='font-weight-bold'>
                                    Детальний опис товару:
                                </p>
                                <div className='item-method-of-use'>
                                    Лікування гелем для очищення шкіри голови, схильної до лупи. Складено протигрибкові та антибактеріальні дії, щоб зберегти шкіру голови чистою та здоровою.</div>
                            </MDBTabPane>
                            <MDBTabPane tabId='2'  className='mt-4'>
                                <MDBTable>
                                    <MDBTableBody>
                                        <tr>
                                            <td>Артикул товару:</td>
                                            <td>1239</td>
                                        </tr>
                                        <tr>
                                            <td>Об'єм:</td>
                                            <td>250 мл</td>
                                        </tr>
                                        <tr>
                                            <td>Тип товару:</td>
                                            <td>Кондиціонер</td>
                                        </tr>
                                        <tr>
                                            <td>Країна виробник:</td>
                                            <td>Італія</td>
                                        </tr>
                                        <tr>
                                            <td>Виробник:</td>
                                            <td>Davines</td>
                                        </tr>
                                        <tr>
                                            <td>Категорія:</td>
                                            <td>Для жінок</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBTabPane>
                            <MDBTabPane tabId='3' className='m-1'>
                                <MDBRow className='mt-4 p-0'>
                                    <MDBCol lg='4' md='4' xl='3' className='pb-5 p-2' >
                                        <Item8 />
                                    </MDBCol>
                                    <MDBCol lg='4' md='4' xl='3' className='pb-5 p-2' >
                                        <Item10 />
                                    </MDBCol>
                                    <MDBCol lg='4' md='4' xl='3' className='pb-5 p-2' >
                                        <Item3 />
                                    </MDBCol>
                                    <MDBCol lg='4' md='4' xl='3' className='pb-5 p-2' >
                                        <Item9 />
                                    </MDBCol>
                                </MDBRow>
                            </MDBTabPane>
                            <MDBTabPane tabId='4'  className='mt-4 m-1'>
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


export default Details239;
