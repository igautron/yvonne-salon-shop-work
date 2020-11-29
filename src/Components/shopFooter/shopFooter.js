import React from 'react';
import {Component} from 'react';
import './shopFooter.css'
import {Link, withRouter} from 'react-router-dom';
import {
    MDBRow,
    MDBCol,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBContainer,
    MDBFooter
} from 'mdbreact';


class ShopFooter extends Component  {

    state = {
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    }


    // chooseFooterHandler = (type) => {
    //     this.props.setFilterFooter(type)
    // }
    //
    // isActive = (type) => {
    //     const category = window.location.pathname.split('/').pop()
    //     return category === type ? 'active' : ''
    // }



    render() {
        return (
                <div className='shop-footer w-100'>
                    <MDBFooter className="font-small pt-4 mt-4">
                        <MDBContainer fluid className="container text-center text-md-left pl-0 pl-sm-2 pl-md-0 pl-lg-0  pr-sm-2 pr-md-0 pr-lg-0">
                            <MDBRow className='pb-5 ml-4 mr-4 ml-sm-0 ml-md-0 ml-lg-0 ml-xl-0 mr-sm-0 mr-md-0 mr-lg-0 mr-xl-0'>
                                <MDBCol sm="3" md="3" lg="3" className='col-4 w-responsive p-md-0 p-sm-0 p-0'>
                                    <div className='w-100'>
                                        <a href="./Top.js" className='shop-foot text-center font-weight-normal h-50 w-100 float-right m-auto'>YVONNE</a>
                                        <div className='shop-slogan text-center font-weight-light'>HAIR COSMETICS SHOP</div>
                                    </div>
                                    <p className="logo-text">Початкова краса - це те, як людина виглядає вранці, ледь встав з ліжка, тобто природно, але бездоганно.</p>
                                    <p className="logo-text-cr pb-1 mb-0">Сьюзен Коллінз, "Голодні ігри"</p>
                                </MDBCol>
                                <MDBCol sm="3" md="3" className='col-4 w-responsive p-md-0 p-sm-0 p-0'>
                                    <h5 className="title pl-lg-5 pl-md-2 footer-nav pl-sm-2 text-left pl-2 pt-2 pt-xl-4 pt-md-3 pt-sm-2">Навігація</h5>
                                    <ul className='pl-lg-5 pl-md-2 pl-sm-2 text-left pl-2'>
                                        <Link to='/' className="pb-2 footer-nav">
                                            <a href="#!">Головна</a>
                                        </Link>
                                        <Link to='/shopAboutShop' className="list-unstyled pb-2 footer-nav">
                                            <a href="#!">Про магазин</a>
                                        </Link>
                                        <Link to='/shopCertification' className="list-unstyled pb-2 footer-nav">
                                            <a href="#!">Сертифікація</a>
                                        </Link>
                                        <Link to='/shopContacts' className="list-unstyled pb-2 footer-nav">
                                            <a href="#!">Контакти</a>
                                        </Link>
                                    </ul>
                                </MDBCol>
                                <MDBCol sm="3" md="3" className='goods w-responsive p-md-0 p-sm-0 p-0'>
                                    <h5 className="title pl-lg-5 pl-md-2 pl-sm-4 text-left pt-2 pt-2 pt-xl-4 pt-md-3 pt-sm-2">Товари</h5>
                                    <ul className='pl-lg-5 pl-md-2 pl-sm-4 text-left pl-0'>
                                        {/*<Link className="list-unstyled pb-2">*/}
                                        {/*    <button onClick={this.chooseFooterHandler.bind(null, 'shampoo')} href="#!">Шампуні для волосся</button>*/}
                                        {/*</Link>*/}
                                        <Link className="list-unstyled pb-2">
                                            <a href="#!">Кондиціонери для волосся</a>
                                        </Link>
                                        <Link className="list-unstyled pb-2">
                                            <a href="#!">Маски для волосся</a>
                                        </Link>
                                        <Link className="list-unstyled pb-2">
                                            <a href="#!">Стайлінги</a>
                                        </Link>
                                        <Link className="list-unstyled pb-2">
                                            <a href="#!">Лікувальні ампули</a>
                                        </Link>
                                        <Link className="list-unstyled pb-2">
                                            <a href="#!">Відновлювальні комплекси</a>
                                        </Link>
                                    </ul>
                                </MDBCol>
                                <MDBCol sm="3" md="3" className='col-4 w-responsive p-md-0 p-sm-0 p-0'>
                                    <h5 className="title pl-lg-4 pl-md-4 pl-sm-3 text-left pl-0 pt-2 pt-2 pt-xl-4 pt-md-3 pt-sm-2">Контакти</h5>
                                    <ul className='pl-lg-4 pl-md-4 pl-sm-3 text-left pl-0 mb-0'>
                                        <Link className="list-unstyled pb-2">
                                            <a href="#!">м.Київ, вул. Данченко 32 (вхід з двору)</a>
                                        </Link>
                                        <Link className="list-unstyled pb-2">
                                            <a href="#!" className=''><MDBIcon icon="phone-alt" className="green-text pr-1"/>+38 073 500 55 33</a>
                                        </Link>
                                        <Link className="list-unstyled pb-2">
                                            <a href="#!" className=''><MDBIcon icon="phone-alt" className="green-text pr-1"/>+38 098 500 55 33</a>
                                        </Link>
                                        <Link className="list-unstyled pb-2">
                                            <a href="#!">Графік роботи:</a>
                                        </Link>
                                        <Link className="list-unstyled pb-2">
                                            <a href="#!">09:00 - 20:00 (без вихідних)</a>
                                        </Link>
                                        <MDBNavbarNav right inline className="footer-ic w-100 mb-0">
                                            <MDBNavItem  className='col-4 d-inline pr-3 pt-2 pb-3'>
                                                <a href='https://www.facebook.com/yvonnemultibrands'>
                                                     <MDBIcon fab icon="facebook-f"  className="footer-icons white-text"/>
                                                </a>
                                            </MDBNavItem>
                                            <MDBNavItem className='col-4 d-inline pr-3 pt-2 pb-3' >
                                                <a href='https://www.instagram.com/yvonnemultibrands/'>
                                                    <MDBIcon fab icon="instagram" className="footer-icons white-text"/>
                                                </a>
                                            </MDBNavItem>
                                            <MDBNavItem  className='col-4 d-inline pr-3 pt-2 pb-3' >
                                                <a href='https://www.instagram.com/yvonnemultibrands/'>
                                                     <MDBIcon far icon="envelope" className="footer-icons white-text"/>
                                                </a>
                                            </MDBNavItem>
                                        </MDBNavbarNav>
                                    </ul>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <div className="footer-copyright text-center py-3 w-100">
                            <MDBContainer style={{textAlign: 'center'}}>
                                <a className="shop-salon w-75 d-inline-block" href="https://www.mdbootstrap.com"><span className='font-smaller'>&copy;  Copyright {new Date().getFullYear()} </span>   YVONNE BEAUTY COSMETICS SHOP - All Rights Reserved </a>
                            </MDBContainer>
                        </div>
                    </MDBFooter>
                </div>
        )
    }
}

export default withRouter(ShopFooter);