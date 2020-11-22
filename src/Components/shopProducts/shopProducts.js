import React from 'react';
import {Component} from 'react';
import './shopProducts.css'
import ShopFilter from './shopFilter'

import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBPagination,
    MDBPageNav,
    MDBPageItem,
    MDBLink,
} from 'mdbreact';

import $ from 'jquery';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';


import Item from './../shopProducts/ITEMS/Davines/Item/Item'
import TopFilter from "./topFilter";



$(document).ready(function () {
    $(function () {
        $('#mdb-lightbox-ui').load('mdb-addons/mdb-lightbox-ui.html');
    });
});

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
            filterTypes:{},
            filterBrands:{},
            filterSeries:{},
            filterAmount:{},
            filterTop:{},
            top:{}

            // filterTopbrands: {}
        }

        this.filter = {
            price: {}
        }

        this.setFilterTypes = this.setFilterTypes.bind(this)
        this.setFilterBrands = this.setFilterBrands.bind(this)
        this.setFilterSeries = this.setFilterSeries.bind(this)
        this.setFilterAmount = this.setFilterAmount.bind(this)
        this.setFilterGender = this.setFilterGender.bind(this)
        this.setFilterAppoinrments = this.setFilterAppoinrments.bind(this)
        this.setFilterTop = this.setFilterTop.bind(this)
    }

    setFilterAppoinrments(appointments){
        this.filter.appointments = appointments
        this.doAjax()
    }

    setFilterTypes(types){
        this.filter.types = types
        this.doAjax()
    }

    setFilterBrands(brands) {
        this.filter.brands = brands
        this.doAjax()
    }

    setFilterSeries(series) {
        this.filter.series = series
        this.doAjax()
    }

    setFilterGender(gender){
        this.filter.gender = gender
        this.doAjax()
    }

    setFilterAmount(amount) {
        this.filter.amount = amount
        this.doAjax()
    }

    setFilterPrice = (min_or_max, price) => {
        this.filter.price[min_or_max] = price
        this.doAjax()
    }

    setFilterTop(top) {
        this.filter.top = top
        this.doAjax()
    }

    doAjax() {
        let url
        if (Object.keys(this.filter).length !== 0) {
            url = 'http://yvonne-server.loc/filter?filter='+encodeURIComponent(JSON.stringify(this.filter))
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
                    <TopFilter
                        setFilterTop = {this.setFilterTop}/>
                </div>

                {/*filters*/}

                    <div className='container pl-1 pr-3 pl-sm-2 pl-md-2 pl-xl-1 pl-lg-1 pr-sm-2 pr-md-2 pr-xl-1 pr-lg-1'>
                        <div className='shop-filters-block w-responsive w-100 pt-3 pb-5 clearfix mt-5'>

                        <ShopFilter
                            setFilterTypes={this.setFilterTypes}
                            setFilterBrands={this.setFilterBrands}
                            setFilterSeries={this.setFilterSeries}
                            setFilterAmount={this.setFilterAmount}
                            setFilterGender={this.setFilterGender}
                            setFilterAppoinrments={this.setFilterAppoinrments}
                            setFilterPrice={this.setFilterPrice}
                            setFilterTop={this.setFilterTop}
                        />
                    {/*products list*/}

                    <div className='shop-items right w-75 bg-white d-inline-block ml-0  pr-3 pr-xl-0 ml-xl-5 ml-sm-3 ml-lg-3 ml-md-3'>
                        <div className='shop-items-md bg-white'>
                            <h4 className='text-center p-4 font-weight-bold'>Товари</h4>
                            <p className='shop-items-text grey-text text-center w-responsive mx-auto mb-5'>
                                В нашому магазині представлений широкий вибір професійної косметики для волосся: шампуні для домашнього догляду та для професіного використання.
                            </p>
                            <MDBRow className='p-0 m-2 ml-0 border-0 products'>
                                {this.state.products.map((product) => (
                                <MDBCol key={product.id} lg='6' md='6' xl='4' className='pb-5 p-2 m-0 float-left'>
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