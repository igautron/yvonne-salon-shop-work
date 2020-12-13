import React from 'react';
import {Component} from 'react';
import { MDBContainer, MDBNav, MDBNavItem, MDBNavLink, MDBTabPane, MDBTabContent, MDBCol, MDBRow} from 'mdbreact';

import './shopAccount.css'
import ShopAutorization from '../shopAutorization/shopAutorization';

let cl = console.log

class ShopAccount extends Component {

    state = {
        items: {
            content: '',
            // contentCard: '1',
        },
        alertTab1: '',
        changePasswordError: '',
        passwordInputs:{
            old:'',
            new:'',
            confirm:'',
        }
    }

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

    componentDidMount() { // получение данных с сервера
        console.log(this.props)
        this.setState({user:this.props.appState.user});
    }

    componentDidUpdate(prevProps) { // получение новых пропсов
        if(prevProps.tabIndex !== this.props.tabIndex){
            let items = { ...this.state.items };
            items.content = this.props.tabIndex
            this.setState({items});
        }
    }

    changeInputHandler = (event) => {
        let userData = {...this.props.appState.user}
        userData[event.target.name] = event.target.value
        this.props.setUserData({user: userData})
    }

    changePasswordInputHandler = (event) => {
        let passwordInputs = {...this.state.passwordInputs}
        passwordInputs[event.target.name] = event.target.value
        this.setState({passwordInputs})
    }

    changePassword = () => {
        fetch('http://yvonne-server.loc/api/changePassword', {
            method: 'POST', // или 'PUT' 
            // body: new URLSearchParams(this.props.appState.user).toString(),
            body: JSON.stringify(this.state.passwordInputs),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.props.appState.token
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.success && data.success === 'ok') {
                this.setState({passwordInputs:{old:'',new:'',confirm:''}})
                this.setState({changePasswordError:'Success'})
            }else{
                this.setState({changePasswordError:data.message})
            }
        });
    }

    saveUserData = () => {
        this.setState({alertTab1: ''})
        fetch('http://yvonne-server.loc/api/userUpdate', {
            method: 'POST', // или 'PUT' 
            // body: new URLSearchParams(this.props.appState.user).toString(),
            body: JSON.stringify(this.props.appState.user),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.props.appState.token
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.success && data.success === 'ok') {
                this.setState({alertTab1: 'Дані збережено'})
                localStorage.setItem('user', JSON.stringify(data.user)); // объект user преобразовуем в строку (JSON.stringify)
            }else{
                this.setState({alertTab1: 'Error!'})
            }
        });
    }

    render() {
        let tabIndex = this.state.items.content || this.props.tabIndex || '1'
        let user = this.props.appState.user
        if (!user) {
            return (
                <React.Fragment>
                    <h1>Ви не авторизовані!</h1>
                    <div style={{'max-width':'350px',margin:'auto'}}>
                        <ShopAutorization changeModalBody={()=>{}}
                                     loginModalToggle={()=>{}}
                                     appState={this.props.appState}
                                     setUserData={this.props.setUserData} />
                        </div>
                </React.Fragment>
                )
        }else return (
            <MDBContainer className='pb-0 pb-sm-5'>
                <h4 className='h4-responsive text-center font-weight-bolder m-0 py-md-5 py-sm-5 py-4 py-xl-5 py-lg-5'>Особистий кабінет</h4>
                <MDBRow className='p-0 w-100 m-0'>
                    <MDBCol md="12" className='p-0 w-100'>
                        <MDBNav
                            pills
                            className="nav-justified pills-rounded pills-purple-gradient"
                        >
                            <MDBNavItem className='p-0'>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={tabIndex === "1"}
                                    onClick={this.togglePills("content", "1")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 m-0 nav-links '
                                >
                                    ПРОФІЛЬ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='p-0'>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={tabIndex === "2"}
                                    onClick={this.togglePills("content", "2")}
                                    className='font-weight-bold black-text rgba-grey-light p-3  m-0 nav-links'
                                >
                                    ЗАМОВЛЕННЯ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='p-0'>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={tabIndex === "3"}
                                    onClick={this.togglePills("content", "3")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 nav-links'
                                >
                                    СПОДОБАЛОСЬ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='p-0'>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={tabIndex === "4"}
                                    onClick={this.togglePills("content", "4")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 nav-links'
                                >
                                    ПЕРЕГЛЯНУТІ
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={tabIndex}>
                            <MDBTabPane tabId="1" className='p-2'>
                                <p style={{textAlign:'center',color:'green'}}>{this.state.alertTab1}</p>
                                <div className='py-0 py-sm-3 pb-3'>
                                    <h4 className='py-3'>Особисті дані</h4>
                                    <div col='12' className='d-inline-flex flex-wrap w-100 info-pain'>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Ім'я</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="name" value={user.name}/></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Прізвище</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="last_name" value={user.last_name}/></p>
                                        </div>
                                        <div className='py-3 px-2 py-0 py-sm-0 px-sm-3 col-6 col-sm-3 d-block m-auto mr-0 float-right'>
                                            <button onClick={this.saveUserData} className='d-block m-auto border-0 p-2 mt-2 mb-2 my-sm-5 w-100 rgba-grey-light white-ic'>Зберегти</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-0 py-sm-3 pb-3'>
                                    <h4 className='py-3'>Контактні дані</h4>
                                    <div col='12' className='d-inline-flex flex-wrap  w-100 info-pain'>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Телефон</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="phone" value={user.phone}/></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Email</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="email" value={user.email}/></p>
                                        </div>
                                        <div className='py-3 px-2 py-0 py-sm-0 px-sm-3 col-6 col-sm-3 d-block m-auto float-right'>
                                            <button onClick={this.saveUserData} className='d-block m-auto float-right border-0 p-2 mt-2 mb-2 my-sm-5 w-100 rgba-grey-light white-ic'>Зберегти</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-0 py-sm-3 pb-3'>
                                    <h4 className='py-3'>Адреса доставки</h4>
                                    <div col='12' className='d-inline-flex flex-wrap  w-100 info-pain'>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Місто</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="city" value={user.city}/></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Вулиця</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="street" value={user.street}/></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Будинок</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="house" value={user.house}/></p>
                                        </div>
                                        <div className='py-3 px-2 py-0 py-sm-0 px-sm-3 col-6 col-sm-3 d-block m-auto float-right'>
                                            <button onClick={this.saveUserData} className='d-block m-auto float-right border-0 p-2 mt-2 mb-2 my-sm-5 w-100 rgba-grey-light white-ic'>Зберегти</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-0 py-sm-3 pb-3'>
                                    <h4 className='py-3 m-0'>Изменение пароля</h4>
                                    <p style={{color:'red'}}>{this.state.changePasswordError}</p>
                                    <div col='12' className='d-inline-flex flex-wrap w-100 info-pain'>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Старий пароль</p>
                                            <p><input className='w-100'  type="password" onChange={this.changePasswordInputHandler} name="old" value={this.state.passwordInputs.old}/></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Новий пароль</p>
                                            <p><input className='w-100' type="password" onChange={this.changePasswordInputHandler} name="new" value={this.state.passwordInputs.new}/></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Новий пароль</p>
                                            <p><input className='w-100' type="password" onChange={this.changePasswordInputHandler} name="confirm" value={this.state.passwordInputs.confirm}/></p>
                                        </div>
                                        <div className='py-3 px-2 py-0 py-sm-0 px-sm-3 col-6 col-sm-3 d-block m-auto float-right'>
                                            <button onClick={this.saveUserData} className='d-block m-auto float-right border-0 p-2 mt-2 mb-2 my-sm-5 w-100 rgba-grey-light white-ic'>Змінити</button>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="2" className='p-2'>
                                        <div className='py-3'>
                                            <h4 className='py-3'>Замовлені товари</h4>
                                            <div col='12' className='d-inline-flex w-100 info-pain'>
                                                <div className="form-input d-inline-flex w-100 py-4 w-responsive p-3">
                                                    <div className="col-2 px-0">
                                                        <img src="./01_color_shampoo.jpg" className="w-100 img-fluid" alt="Responsive" />
                                                    </div>
                                                    <div className="col-6 px-1">
                                                        <p className='w-100 order-item px-sm-3 px-1 mb-0'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                                    </div>
                                                    <div className="col-3 px-1">
                                                        <p className='w-100 m-0 px-sm-3 px-1'>1500<span>грн</span></p>
                                                    </div>
                                                    <div className="col-1 px-1">
                                                        <button type="button" className="w-100 px-sm-3 px-1 py-0 btn m-0 text-center bg-transparent border-0 z-depth-0">
                                                            <i className="fas fa-times px-0 justify-content-start"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="3" className='p-2'>
                                <div className='py-3'>
                                    <h4 className='py-3'>Товари, що сподобались</h4>
                                    <div col='12' className=' w-100 info-pain'>
                                        <div className="form-input d-inline-flex w-100 py-4 w-responsive p-3">
                                            <div className="col-2 px-0">
                                                <img src="./01_color_shampoo.jpg" className="w-100 img-fluid" alt="Responsive" />
                                            </div>
                                            <div className="col-6 px-1">
                                                <p className='w-100 order-item px-sm-3 px-1 mb-0'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                            </div>
                                            <div className="col-3 px-1">
                                                <p className='w-100 m-0 px-sm-3 px-1'>1500<span>грн</span></p>
                                            </div>
                                            <div className="col-1 px-1">
                                                <button type="button" className="w-100 px-sm-3 px-1 py-0 btn m-0 text-center bg-transparent border-0 z-depth-0">
                                                    <i className="fas fa-times px-0 justify-content-start"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="4" className='p-2'>
                                <div className='py-3'>
                                    <h4 className='py-3'>Переглянуті товари</h4>
                                    <div col='12' className='d-inline-flex w-100 info-pain'>
                                        <div className="form-input d-inline-flex w-100 py-4 w-responsive p-3">
                                            <div className="col-2 px-0">
                                                <img src="./01_color_shampoo.jpg" className="w-100 img-fluid" alt="Responsive" />
                                            </div>
                                            <div className="col-6 px-1">
                                                <p className='w-100 order-item px-sm-3 px-1 mb-0'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                            </div>
                                            <div className="col-3 px-1">
                                                <p className='w-100 m-0 px-sm-3 px-1'>1500<span>грн</span></p>
                                            </div>
                                            <div className="col-1 px-1">
                                                <button type="button" className="w-100 px-sm-3 px-1 py-0 btn m-0 text-center bg-transparent border-0 z-depth-0">
                                                    <i className="fas fa-times px-0 justify-content-start"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabPane>
                        </MDBTabContent>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default ShopAccount;