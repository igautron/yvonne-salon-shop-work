import React from 'react';
import {Component} from 'react';
import './shopNav.css'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBBtn,
    MDBNavbarBrand,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer
} from 'mdbreact';


class ShopNav extends Component  {


    // name: 'app',
    // components: {
    //     mdbFilter,
    // },

    state = {
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    }



    render() {
        return (
            <div>
                <div className='shop-nav-first'>
                    <header>
                        <MDBNavbar white expand='md' scrolling fixed='top' className='navbar-bg p-0 p'>
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
                                    <MDBNavItem className='w-25 d-inline p-3 pr-md-3 pl-md-1 pt-2 pb-2 white-text'>
                                        <MDBIcon fab icon='facebook-f'/>
                                    </MDBNavItem>
                                    <MDBNavItem className='w-25 d-inline p-3 pr-md-3 pl-md-1 pt-2 pb-2 white-text'>
                                        <MDBIcon fab icon='instagram'/>
                                    </MDBNavItem>
                                    <MDBNavItem className='w-25 d-inline p-3 pr-md-3 pl-md-1 pt-2 pb-2 white-text'>
                                        <MDBIcon far icon='envelope'/>
                                    </MDBNavItem>
                                    <Link to='/shopRegistration'>
                                        <MDBNavItem type='button' id='dialog-btn' className='w-25 d-inline p-3 pr-md-3 pl-md-1 pt-2 pb-2 white-text'>
                                            <MDBIcon icon='user-circle' className='border-left pl-4 pl-md-3'/>
                                        </MDBNavItem>
                                    </Link>
                                </MDBNavbarNav>
                            </div>
                        </MDBNavbar>
                    </header>
                </div>
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
                                <MDBNavbarNav right className='nav-hidden d-inline'>
                                    <MDBNavItem className='w-25 d-inline pl-2 pr-2 pt-0 pb-0 pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-4 pl-md-2 white-text nav-icon'>
                                        <MDBIcon fab icon='facebook-f' className=' fb-icon'/>
                                    </MDBNavItem>
                                    <MDBNavItem className='w-25 d-inline pl-2 pr-2 pt-0 pb-0  pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-4 pl-md-2 white-text nav-icon'>
                                        <MDBIcon fab icon='instagram' className=' insta-icon'/>
                                    </MDBNavItem>
                                    <MDBNavItem className='w-25 d-inline pl-2 pr-2 pt-0 pb-0  pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-4 pl-md-2 white-text nav-icon'>
                                        <MDBIcon far icon='envelope' className='pt-2 email-icon'/>
                                    </MDBNavItem>
                                    <MDBNavItem className='w-25 d-inline pl-2 pr-2 pt-0 pb-0 pl-sm-2 pr-sm-2 pt-sm-2 pb-sm-2 pr-md-1 pl-md-2 white-text nav-icon'>
                                       <MDBIcon icon='user-circle'  className=' border-left pl-4 pl-sm-3 pl-md-3 pt-0'/>
                                    </MDBNavItem>
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
                <div className='shop-bg-nav'>
                    <div className='container m-auto justify-content-center h-100'>
                        <div className='w-100 d-inline-flex pt-lg-5 pt-xl-5 h-100'>
                            <div left className='col-8 col-lg-7 col-xl-8 col-md-7 col-sm-7 w-responsive shop-logo-div pl-5 pr-5 pt-3 pb-3 pl-sm-5 pr-sm-2 pt-sm-4 pb-sm-4 pl-md-2 pr-md-1 pt-md-4 pb-md-5 float-left ml-lg-5 pt-lg-4 pb-lg-5 pt-sm-1 pb-sm-1 mt-0 mt-md-2' style={{zIndex: '1'}}>
                                <div className='shop-logo-img black-text ml-lg-0 w-auto ml-lg-5' >
                                    <img
                                        className='flower'
                                        src={require('../../img/slider/IMGBIN_pink-flowers-pink-flowers-watercolor-painting-png_STw63vwG.png')}
                                        alt='fl1'
                                    />
                                    <a href='./Top.js' className='white-text w-auto shop-logo pl-lg-4 pl-md-4' >YVONNE</a>
                                </div>
                                <div className='shop-logo-text ml-lg-0 m-0 w-auto text-left white-text pl-lg-5 pl-md-4' ><a href='./Top' className='white-text pl-lg-4' >HAIR
                                    COSMETICS SHOP</a>
                                </div>
                            </div>
                            <div right className='col-4 col-lg-3 col-md-4 col-sm-4 col-xl-3 w-responsive shop-logo-div d-inline-flex  pt-3 pb-3 pl-0 pr-0 float-right pt-sm-4 pb-sm-3 mx-sm-0 mr-sm-0 mr-md-3 ml-md-4 ml-xl-5 mr-xl-5 pt-sm-4 pt-md-4 mt-md-3 mt-xl-0 mt-lg-0 mt-sm-0 pt-lg-5 mx-lg-3 pt-lg-2 pr-2 pr-xl-2 pr-lg-2 pr-sm-2 pl-sm-3 pl-md-5 pl-lg-3 '>
                                <Link to='/shopBin'>
                                    <MDBBtn className='black-text btn-bk float-right ml-0  mt-4 my-sm-4  mb-4 mr-2 ml-sm-0 mr-sm-1 mt-sm-3 mb-sm-2 mt-md-3 mb-md-4 mx-md-2 mt-lg-3 ml-lg-4 mr-lg-3 ml-xl-5 px-lg-3 px-lg-2 px-md-3 px-sm-4 px-0 pl-0 py-lg-4 py-md-4 py-2 p-sm-2 p-md-1  font-weight-bold w-responsive font-small w-100' >
                                        КОРЗИНА
                                    </MDBBtn>
                                </Link>
                                <Link to='/shopLike'>
                                    <MDBBtn className='btn-like float-right ml-0 mr-0 mt-4 mb-4 ml-0 mr-2 ml-sm-1 mr-sm-2 pr-4 pl-3 pt-3 pl-sm-3 pr-sm-3  mt-md-3 mb-md-4 mt-lg-3 mr-lg-3 mr-md-0 px-lg-3  pt-1' >
                                        <MDBIcon className='font-small px-sm-0 px-md-3 pl-0 pr-0  pr-lg-3 pl-0 px-lg-3 px-xl-3 py-0 py-xl-2 py-lg-2 py-md-2 py-sm-0 my-0 my-xl-1 my-lg-1 my-md-1 my-sm-0 heart-icon' icon='heart'/>
                                    </MDBBtn>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopNav;