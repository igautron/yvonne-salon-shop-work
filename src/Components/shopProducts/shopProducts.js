import React from 'react';
import {Component} from 'react';
import './shopProducts.css'
import ShopFilter from './shopFilter'
import { Scrollbars } from 'react-custom-scrollbars';
import Filter, { Sort, FilterValue } from 'data-engine';
import {Link} from 'react-router-dom'

import {
    MDBRow,
    MDBInput,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBPagination,
    MDBPageNav,
    MDBPageItem,
    MDBCardImage,
    MDBLink,
    MDBCardFooter,
    MDBCollapse,
    MDBContainer,
    MDBTabPane,
    MDBTabContent,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBIcon,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBNavbarToggler,
    MDBBtn,
    MDBFilter
} from 'mdbreact';

import $ from 'jquery';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';








import Item from './../shopProducts/ITEMS/Davines/Item/Item'



$(document).ready(function () {
    $(function () {
        $('#mdb-lightbox-ui').load('mdb-addons/mdb-lightbox-ui.html');
    });
});

// to make a block width 100%

$(document).ready(function() {
    $(window).resize( function() {
        var brandWidth = $(window).width();
        if(brandWidth < 991)
            $('.shop-nav-brand').removeClass('container')
        else(
            $('.shop-nav-brand').addClass('container')
        )
    })
})


const cl = console.log

class ShopProducts extends Component  {

    constructor(props) {
        super(props);
    
        this.state = {
            collapseID: '',
            value: 0,
            items: {
                default: '1',
            },
            products: [],
            filterTypes:{}
        }

        this.setFilterTypes = this.setFilterTypes.bind(this)
        // call, apply, bind
    }

    setFilterTypes(types){
        this.setState({filterTypes:types})
        let url
        if (Object.keys(types).length !== 0) {
            url = 'http://yvonne-server.loc/filter?filter='+encodeURIComponent(JSON.stringify({types:types}))
        }else{
            url = 'http://yvonne-server.loc/products'
        }
        fetch(url)
          .then(response => response.json())
          .then(data => this.setState({products: data.products}));
    }

    componentDidMount(props) {
        fetch('http://yvonne-server.loc/products')
          .then(response => response.json())
          .then(data => this.setState({products: data.products}));
    }



    render() {
        return (
            <div className='shop-products-block w-100'>
                <div className='container pt-2 pt-md-3 pt-lg-3 shop-nav-brand'>
                    <div className='d-inline-flex w-100'>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5 pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5' color='#fce4ec m-0 w-100 '>
                                <MDBLink className='p-0 text-center active' data-filter='shampoo'>
                                    <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>ШАМПУНІ</span>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5 pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5' color='#fce4ec m-0 w-100 '>
                                <MDBLink className='p-0 text-center' data-filter='conditioner'>
                                    <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>КОНДИЦІОНЕРИ</span>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5 pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5' color='#fce4ec m-0 w-100 '>
                                <MDBLink className='p-0 text-center' data-filter='mask'>
                                    <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>МАСКИ</span>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5 pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5' color='#fce4ec m-0 w-100 '>
                                <MDBLink className='p-0 text-center' data-filter='styleing'>
                                    <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>СТАЙЛІНГИ</span>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5 pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5' color='#fce4ec m-0 w-100 '>
                                <MDBLink className='p-0 text-center pl-2 pr-2' data-filter='ampoules'>
                                    <span className='text-span mt-3 black-text text-center font-weight-bold shop-prod-item'>ЕЛІКСИР</span>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5 pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5' color='#fce4ec m-0 w-100 '>
                                <MDBLink className='p-0 text-center pl-2 pr-2' data-filter='reconstruction'>
                                    <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>ЗАХИСТ</span>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                    </div>
                </div>

                {/*filters*/}

                    <div className='container pl-1 pr-3 pl-sm-2 pl-md-2 pl-xl-1 pl-lg-1 pr-sm-2 pr-md-2 pr-xl-1 pr-lg-1'>
                        <div className='shop-filters-block w-responsive w-100 pt-3 pb-5 clearfix'>

                        <ShopFilter setFilterTypes={this.setFilterTypes} />
                    {/*products list*/}

                    <div className='shop-items right w-75 bg-white d-inline-block ml-0  pr-3 pr-xl-0 ml-xl-5 ml-sm-3 ml-lg-3 ml-md-3'>
                        <div className='shop-items-md bg-white'>
                            <h4 className='text-center p-4 font-weight-bold'>Товари</h4>
                            <p className='shop-items-text grey-text text-center w-responsive mx-auto mb-5'>
                                В нашому магазині представлений широкий вибір професійної косметики для волосся: шампуні для домашнього догляду та для професіного використання.
                            </p>
                            <MDBRow className='p-0 m-2 ml-0 border-0 products'>
                                {this.state.products.map((product) => (
                                <MDBCol key={product.id} lg='6' md='6' xl='4' className='pb-5 p-2'>
                                    <Item product={product}/>
                                </MDBCol>
                                ))}
                            </MDBRow>
                        </div>
                        <MDBPagination color='purple'>
                            <MDBPageItem disabled>
                                <MDBPageNav aria-label='Previous'>
                                    <span aria-hidden='true'>&laquo;</span>
                                    <span className='sr-only'>Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav>
                                    1 <span className='sr-only'>(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav>
                                    2
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav>
                                    3
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav>
                                    4
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav>
                                    5
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav>
                                    &raquo;
                                </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ShopProducts;