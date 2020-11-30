import React from 'react';
import {Component} from 'react';
import './shopNav.css'
import './../../Backend/shopBin/shopBin.css'
import {Link} from 'react-router-dom';
import {
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBBtn,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer, MDBRow, MDBCol,
    MDBLink
} from 'mdbreact';


import './../../Backend/shopAutorization/shopAutorization.css'
import './../../Backend/shopRegistration/shopRegistration.css'
import './../../Backend/shopLike/shopLike.css'
import ShopAutorization from '../../Backend/shopAutorization/shopAutorization';
import ShopBin from '../../Backend/shopBin/shopBin';
import ShopRegistration from '../../Backend/shopRegistration/shopRegistration';
import ShopLike from '../../Backend/shopLike/shopLike';
import ShopForgetPassword from '../../Backend/shopForgetPassword/shopForgetPassword';
import ModalAutorization from './../../Backend/modalAutorization/modalAutorization'
let cl = console.log

class ShopNav extends Component  {


    // name: 'app',
    // components: {
    //     mdbFilter,
    // },

    state = {
        collapseID: '',
        isCartModalOpened: false,
        isCartLikeModalOpened: false,
        isCartCircleModalOpened: false,
        isLoginModalOpened: false,
        modalBody: 'authorization', // registration
        modalTitle: 'Авторизація',
        showProfileMenu: true,
        isSearchModalOpened: false
    }


    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    }


    cartLikeModalToggle = () => {
        this.setState({
            isCartLikeModalOpened: !this.state.isCartLikeModalOpened
        });
    }

    cartModalToggle = () => {
        this.setState({
            isCartModalOpened: !this.state.isCartModalOpened
        });
    }


    loginModalToggle = () => {
        this.setState({
            isLoginModalOpened: !this.state.isLoginModalOpened
        });
    }


    cartModalToggle = () => {
        this.setState({
            isCartModalOpened: !this.state.isCartModalOpened
        });
    }


    cartCirclesModalToggle = () => {
        this.setState({
            isCartCirclesModalOpened: !this.state.isCartCirclesModalOpened
        });
    }


    changeModalBody = (where_to_go) => {
        this.setState({modalBody: where_to_go})

        if (where_to_go === 'authorization') {
            this.setState({modalTitle: 'Авторизація'})
        }else if(where_to_go === 'registration'){
            this.setState({modalTitle: 'Регистрація'})
        }
    }


    modalBody = () => {
        if (this.state.modalBody === 'authorization') {
            return <ShopAutorization changeModalBody={this.changeModalBody} loginModalToggle={this.loginModalToggle}/>

        }else if(this.state.modalBody === 'registration'){
            return <ShopRegistration changeModalBody={this.changeModalBody} loginModalToggle={this.loginModalToggle}/>

        }else if(this.state.modalBody === 'successRgistration'){
            return <div>Вы успешно зарегистрированы!</div>
        }else{
            return <div>Error!</div>
        }
    }


    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.setState({showProfileMenu: false})
    }


    profileMenu = () => {
        let user = localStorage.getItem('user', 1);
        if (user && this.state.showProfileMenu) {
            return (
                <ul className="profile-menu">
                    <li>Личный кабинет</li>
                    <li>Заказы</li>
                    <li>Избранное</li>
                    <li onClick={this.logout}>Выход</li>
                </ul>
                )
        }else{
            return false
        }
    }



    searchHandleToggle = () => {
        this.setState( {
            isSearchModalOpened: !this.state.isSearchModalOpened
        })
    }


    render() {
        return (
            <div>
                <div className='shop-nav-first'>
                    <header>
                        <MDBNavbar expand='md' scrolling fixed='top' className='navbar-bg p-0 p white'>
                            <div className='container'>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <Link to='/'  className='nav-text white-text text-decoration-none d-inline p-4 pl-lg-2 p-md-0 pr-md-2 font-weight-normal'>Головна</Link>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <Link to='/shopAboutShop' className='nav-text white-text text-decoration-none d-inline p-3 p-md-0 pr-md-2 font-weight-normal pl-lg-2'>Про магазин</Link>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <Link to='/shopContacts' className='nav-text white-text text-decoration-none d-inline p-3 p-md-0 pr-md-2 font-weight-normal pl-lg-3'>Контакти</Link>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <p className='nav-text adr white-text text-decoration-none d-inline pt-3 p-3 m-0 pr-md-2 font-weight-normal font-small font-weight-lighter'>+38
                                    073 500 55 33 </p>
                                <p className='nav-text adr white-text text-decoration-none d-inline pt-3 p-3 m-0 font-weight-normal font-small font-weight-lighter'>+38
                                    093 500 55 33 </p>
                                <p className='nav-text adr white-text text-decoration-none d-inline pt-3 p-3 m-0 font-weight-normal font-small font-weight-lighter'>вул.
                                    Данченко 32, м. Київ</p>
                                <MDBNavbarNav right className='nav-hidden'>
                                    <MDBNavItem className='w-25 d-inline px-3 py-3 pt-2 pb-2 white-text'>
                                        <a href='https://www.facebook.com/yvonnemultibrands/?modal=suggested_action&notif_id=1606398322385544&notif_t=page_user_activity&ref=notif'   className='white-ic'>
                                            <MDBIcon fab icon='facebook-f'/>
                                        </a>
                                    </MDBNavItem>
                                    <MDBNavItem className='w-25 d-inline px-3 py-3 pt-2 pb-2 white-text'>
                                        <a href='https://www.instagram.com/yvonnemultibrands/' className='white-ic'>
                                            <MDBIcon fab icon='instagram'/>
                                        </a>
                                    </MDBNavItem>
                                    <MDBNavItem className='w-25 d-inline px-3 py-3 pt-2 pb-2 white-text'>
                                        <MDBIcon far icon='envelope'/>
                                    </MDBNavItem>
                                    <div className='w-100'>
                                            <button onClick={this.loginModalToggle}
                                                    className='w-100 d-inline p-3 pr-md-2 pl-md-1 pt-2 pb-2 white-text btn-circle bg-transparent'>
                                                <MDBIcon icon='user-circle'  className='border-left pl-3 pr-0 pt-0'/>
                                            </button>
                                            <MDBModal className='z-depth-0 modal-autorization justify-content-center mx-auto mt-4' isOpen={this.state.isLoginModalOpened}
                                                      toggle={this.loginModalToggle}>
                                                <MDBModalHeader className='text-center justify-content-center mt-3 mb-0'>{this.state.modalTitle}
                                                    <MDBBtn className='btn-aut m-2 p-2 border-0 position-absolute z-depth-0' color="secondary"
                                                            onClick={this.loginModalToggle}><i className="fas fa-times mr-2"></i></MDBBtn>
                                                </MDBModalHeader>
                                                <MDBModalBody className='h-100 modal-body z-depth-0'>
                                                    {this.modalBody()}
                                                </MDBModalBody>
                                            </MDBModal>
                                            {this.profileMenu()}
                                    </div>
                                </MDBNavbarNav>
                            </div>
                        </MDBNavbar>
                    </header>
                </div>
    {/*mobile-version*/}
                <div className='shop-nav-second'  style={{zIndex: 10}}>
                    <MDBContainer className='m-auto w-100'>
                        <MDBNavbar
                            light
                            className='z-depth-0 w-100 pt-sm-0 pt-md-2 pb-sm-0 pb-md-0 pt-0 pb-0'
                        >
                            <MDBContainer className='m-0 justify-content-center w-100'>
                                <MDBNavbarToggler
                                    className='bg-transparent'
                                    onClick={this.toggleCollapse('navbarCollapse1')}
                                />
                                <MDBNavbarNav right className='nav-hidden d-inline-block px-xl-0 px-lg-3 px-md-0 '>
                                        <a href='https://www.facebook.com/yvonnemultibrands' className='w-25 d-inline-flex pl-2 pr-2 pt-0 pb-0 pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-4 pl-md-2 white-text nav-icon'>
                                            <MDBIcon fab icon='facebook-f' className=' fb-icon'/>
                                        </a>
                                        <a href='https://www.instagram.com/yvonnemultibrands/' className='w-25 d-inline pl-2 pr-2 pt-0 pb-0  pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-4 pl-md-2 white-text nav-icon'>
                                            <MDBIcon fab icon='instagram' className=' insta-icon'/>
                                        </a>
                                        <a href='https://www.instagram.com/yvonnemultibrands/' className='w-25 d-inline pl-2 pr-1 pt-0 pb-0  pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-2 pl-md-2 white-text nav-icon'>
                                             <MDBIcon far icon='envelope' className='pt-2 email-icon'/>
                                        </a>

                         {/*окно авторизации*/}
                                    <button onClick={this.loginModalToggle} className='btn-circle bg-transparent w-25 d-inline pl-1 pr-0 pt-0 pb-0 pl-sm-2 pr-sm-2 pt-sm-2 pb-sm-2 pr-md-1 pl-md-2 white-text '>
                                          <MDBIcon icon='user-circle'  className=' border-left pl-4 pl-sm-3 pl-md-3 pt-0'/>
                                    </button>
                                    <ModalAutorization />
                                    <MDBModal className='z-depth-0 w-100 p-5 modal-autorization' isOpen={this.state.isLoginModalOpened} toggle={this. loginModalToggle} >
                                        <MDBModalHeader className='text-center justify-content-center mt-3 mb-0'>{this.state.modalTitle}
                                            <MDBBtn className='btn-aut m-2 p-2 border-0 position-absolute z-depth-0' color="secondary" onClick={this.loginModalToggle}><i className="fas fa-times mr-2"></i></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody className='h-100 modal-body z-depth-0 p-0'>
                                            {this.modalBody()}
                                        </MDBModalBody>
                                    </MDBModal>
                                    {this.profileMenu()}
                                </MDBNavbarNav>
                                <MDBCollapse
                                    id='navbarCollapse1'
                                    isOpen={this.state.collapseID}
                                    navbar
                                    className='shop-nav-navbar'
                                >
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <MDBNavLink to='/' exact className='pl-3 p-2 font-weight-normal text-white tgl-item'>Головна</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='/shopAboutShop' className='pl-3 p-2 font-weight-normal text-white tgl-item'>Про магазин</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='/shopContacts' className='pl-3 p-2 font-weight-normal text-white tgl-item'>Контакти</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='#!' className='pl-3 p-2 font-weight-normal text-white tgl-item'>До салону краси</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

export default ShopNav;