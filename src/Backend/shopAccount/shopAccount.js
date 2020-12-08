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
                this.setState({alertTab1: 'Данные успешно сохранены'})
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
                    <h1>Вы не авторизованы!</h1>
                    <div style={{'max-width':'350px',margin:'auto'}}>
                        <ShopAutorization changeModalBody={()=>{}}
                                     loginModalToggle={()=>{}}
                                     appState={this.props.appState}
                                     setUserData={this.props.setUserData} />
                        </div>
                </React.Fragment>
                )
        }else return (
            <MDBContainer className='pb-5'>
                <h1 className='h1-responsive font-weight-bolder m-0 pt-2 py-xl-5 py-lg-5 py-md-5 py-sm-5 py-5'>Особистий кабінет</h1>
                <MDBRow className='p-0 w-100 m-0'>
                    <MDBCol md="12" className='p-0 w-100'>
                        <MDBNav
                            pills
                            className="nav-justified pills-rounded pills-purple-gradient"
                        >
                            <MDBNavItem>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={tabIndex === "1"}
                                    onClick={this.togglePills("content", "1")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 nav-links'
                                >
                                    ПРОФІЛЬ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={tabIndex === "2"}
                                    onClick={this.togglePills("content", "2")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 nav-links'
                                >
                                    ЗАМОВЛЕННЯ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
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
                            <MDBNavItem>
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
                                <div className='py-3'>
                                    <h4 className='py-3'>Особисті дані</h4>
                                    <div col='12' className='d-inline-flex w-100 info-pain'>
                                        <div className='p-3 col-3'>
                                            <p>Ім'я</p>
                                            <p><input onChange={this.changeInputHandler} name="name" value={user.name}/></p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Прізвище</p>
                                            <p><input onChange={this.changeInputHandler} name="last_name" value={user.last_name}/></p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p></p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <button onClick={this.saveUserData} className='bg-transparent border-0 m-2'>Сохранить</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <h4 className='py-3'>Контактні дані</h4>
                                    <div col='12' className='d-inline-flex  w-100 info-pain'>
                                        <div className='p-3 col-3'>
                                            <p>Телефон</p>
                                            <p><input onChange={this.changeInputHandler} name="phone" value={user.phone}/></p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Email</p>
                                            <p><input onChange={this.changeInputHandler} name="email" value={user.email}/></p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p></p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <button onClick={this.saveUserData} className='bg-transparent border-0 m-2'>Зберегти</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <h4 className='py-3'>Адреса доставки</h4>
                                    <div col='12' className='d-inline-flex  w-100 info-pain'>
                                        <div className='p-3 col-3'>
                                            <p>Місто</p>
                                            <p><input onChange={this.changeInputHandler} name="city" value={user.city}/></p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Вулиця</p>
                                            <p><input onChange={this.changeInputHandler} name="street" value={user.street}/></p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Будинок</p>
                                            <p><input onChange={this.changeInputHandler} name="house" value={user.house}/></p>
                                        </div>
                                        <div>
                                            <button onClick={this.saveUserData} className='bg-transparent border-0 m-2'>Зберегти</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <h4 className='py-3'>Изменение пароля</h4>
                                    <p style={{color:'red'}}>{this.state.changePasswordError}</p>
                                    <div col='12' className='d-inline-flex  w-100 info-pain'>
                                        <div className='p-3 col-3'>
                                            <p>Старый пароль</p>
                                            <p><input type="password" onChange={this.changePasswordInputHandler} name="old" value={this.state.passwordInputs.old}/></p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Новый пароль</p>
                                            <p><input type="password" onChange={this.changePasswordInputHandler} name="new" value={this.state.passwordInputs.new}/></p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Подтверждение нового пароля</p>
                                            <p><input type="password" onChange={this.changePasswordInputHandler} name="confirm" value={this.state.passwordInputs.confirm}/></p>
                                        </div>
                                        <div>
                                            <button onClick={this.changePassword} className='bg-transparent border-0 m-2'>Змінити пароль</button>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="2" className='p-2'>
                                        <div className='py-3'>
                                            <h4 className='py-3'>Замовлені товари</h4>
                                            <div col='12' className='d-inline-flex w-100 info-pain'>
                                                <div className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 w-responsive p-3">
                                                    <MDBCol className='col-2 p-0 m-0'>
                                                        <img src="./01_color_shampoo.jpg" className="img-fluid w-100 h-25" alt="Responsive" />
                                                    </MDBCol>
                                                    <MDBCol className='mx-1 col-5 col-sm-5 col-md-6 col-lg-6 col-xl-5 p-1 py-1 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                                        <p className='order-item p-2'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                                    </MDBCol>
                                                    <MDBCol className='col-1 p-1 py-3 mx-0'>
                                                        <form>
                                                            <input className='input-q' type='number' min='1' value='1'></input>
                                                        </form>
                                                    </MDBCol>
                                                    <MDBCol className='col-2 px-3 py-1 mx-0'>
                                                        <p className='px-lg-2 px-xl-2 px-md-2 px-sm-2 px-2 py-3'>1500<span>грн</span></p>
                                                    </MDBCol>
                                                    <MDBCol className='col-1 p-1 py-2'>
                                                        <button type="button" className="btn btn-m m-0 text-center bg-transparent border-0 z-depth-0">
                                                            <i className="fas fa-times mr-2"></i>
                                                        </button>
                                                    </MDBCol>
                                                </div>
                                            </div>
                                        </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="3" className='p-2'>
                                <div className='py-3'>
                                    <h4 className='py-3'>Товари, що сподобались</h4>
                                    <div col='12' className='d-inline-flex w-100 info-pain'>
                                        <div className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 w-responsive p-3">
                                            <MDBCol className='col-2 p-0 m-0'>
                                                <img src="./01_color_shampoo.jpg" className="img-fluid w-100 h-25" alt="Responsive" />
                                            </MDBCol>
                                            <MDBCol className='mx-1 col-5 col-sm-5 col-md-6 col-lg-6 col-xl-5 p-1 py-1 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                                <p className='order-item p-2'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                            </MDBCol>
                                            <MDBCol className='col-1 p-1 py-3 mx-0'>
                                                <form>
                                                    <input className='input-q' type='number' min='1' value='1'></input>
                                                </form>
                                            </MDBCol>
                                            <MDBCol className='col-2 px-3 py-1 mx-0'>
                                                <p className='px-lg-2 px-xl-2 px-md-2 px-sm-2 px-2 py-3'>1500<span>грн</span></p>
                                            </MDBCol>
                                            <MDBCol className='col-1 p-1 py-2'>
                                                <button type="button" className="btn btn-m m-0 text-center bg-transparent border-0 z-depth-0">
                                                    <i className="fas fa-times mr-2"></i>
                                                </button>
                                            </MDBCol>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="4" className='p-2'>
                                <div className='py-3'>
                                    <h4 className='py-3'>Переглянуті товари</h4>
                                    <div col='12' className='d-inline-flex w-100 info-pain'>
                                        <div className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 w-responsive p-3">
                                            <MDBCol className='col-2 p-0 m-0'>
                                                <img src="./01_color_shampoo.jpg" className="img-fluid w-100 h-25" alt="Responsive" />
                                            </MDBCol>
                                            <MDBCol className='mx-1 col-5 col-sm-5 col-md-6 col-lg-6 col-xl-5 p-1 py-1 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                                <p className='order-item p-2'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                            </MDBCol>
                                            <MDBCol className='col-1 p-1 py-3 mx-0'>
                                                <form>
                                                    <input className='input-q' type='number' min='1' value='1'></input>
                                                </form>
                                            </MDBCol>
                                            <MDBCol className='col-2 px-3 py-1 mx-0'>
                                                <p className='px-lg-2 px-xl-2 px-md-2 px-sm-2 px-2 py-3'>1500<span>грн</span></p>
                                            </MDBCol>
                                            <MDBCol className='col-1 p-1 py-2'>
                                                <button type="button" className="btn btn-m m-0 text-center bg-transparent border-0 z-depth-0">
                                                    <i className="fas fa-times mr-2"></i>
                                                </button>
                                            </MDBCol>
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