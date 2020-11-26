import React from 'react';
import {Component} from 'react';
import './shopProducts.css'
import ShopFilter from './shopFilter'
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { MDBNav,  MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

import {
    MDBRow,
    MDBCol,
    // MDBCard,
    MDBPagination,
    MDBPageNav,
    MDBPageItem,
    // MDBLink,
} from 'mdbreact';

import $ from 'jquery';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';


import Item from './../shopProducts/ITEMS/Davines/Item/Item'
import TopFilter from './topFilter';
import ShopBrands from './../shopBrands/shopBrands';




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


    state = {
        sideNavLeft: false,
    }

    sidenavToggle = sidenavId => () => {
        const sidenavNr = `sideNav${sidenavId}`
        this.setState({
            [sidenavNr]: !this.state[sidenavNr]
        });
    };

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
            filterHairtype:{},
            filterTop:{},
            filterMark:{},
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
        this.setFilterHairtype = this.setFilterHairtype.bind(this)
        this.setFilterTop = this.setFilterTop.bind(this)
        this.setFilterMark = this.setFilterMark.bind(this)
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

    setFilterHairtype(hairtype) {
        this.filter.hairtype = hairtype
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

    setFilterTop(type) {
        let types = {}
        types[type] = 1
        // cl(type)
        this.setFilterTypes(types)
        this.doAjax()
    }

    setFilterBrand = (brand) => {
        let brands = {}
        brands[brand] = 1
        // cl(type)
        this.setFilterBrands(brands)
        this.doAjax()
    }

    setFilterMark(brand) {
        let brands = {}
        brands[brand] = 1
        console.log(brand)
        this.setFilterMark(brand)
        this.doAjax()
    }

    doAjax() {
        let url
        if (Object.keys(this.filter).length !== 0) {
            url = 'http://yvonne-server.loc/api/filter?filter='+encodeURIComponent(JSON.stringify(this.filter))
        }else{
            url = 'http://yvonne-server.loc/api/products'
        }
        fetch(url)
          .then(response => response.json())
          .then(data => this.setState({products: data.products}));
    }

    componentDidMount(props) {
        if (window.location.pathname.indexOf('/category') === 0) {
            const category = this.props.match.params.category
            this.setFilterTop(category)
        }else if (window.location.pathname.indexOf('/brand') === 0) {
            const brand = this.props.match.params.brand
            this.setFilterBrand(brand)
        }else{
            fetch('http://yvonne-server.loc/api/products')
              .then(response => response.json())
              .then(data => this.setState({products: data.products}));
        }
    }

    componentDidUpdate(prevProps) {
        // cl(prevProps.match.params.category)
        // cl(this.props.match.params.category)
        if (window.location.pathname.indexOf('/category') === 0) {
            if (prevProps.match.params.category !== this.props.match.params.category) {
               this.setFilterTop(this.props.match.params.category) 
            } 
        }
        if (window.location.pathname.indexOf('/brand') === 0) {
            if (prevProps.match.params.brand !== this.props.match.params.brand) {
               this.setFilterBrand(this.props.match.params.brand)
            } 
        }
    }

    render() {
        return (
          <div>
            <div className='shop-products-block w-100'>
                <div id='sb' className='container shop-brand w-100'>
                    <ShopBrands
                    setFilterMark = {this.setFilterMark}/>
                </div>
                <div className='container pt-2 pt-md-3 pt-lg-3 shop-nav-brand'>
                    <TopFilter
                        setFilterTop = {this.setFilterTop}/>
                </div>



                {/*filters*/}

             <div className='container pl-1 pr-3 pl-sm-2 pl-md-2 pl-xl-1 pl-lg-1 pr-sm-2 pr-md-2 pr-xl-1 pr-lg-1'>
                <div id='display-products-big-size'>
                   <div className='shop-filters-block w-responsive w-100 pt-3 pb-5 clearfix mt-5'>
                        <ShopFilter
                            setFilterTypes={this.setFilterTypes}
                            setFilterBrands={this.setFilterBrands}
                            setFilterSeries={this.setFilterSeries}
                            setFilterAmount={this.setFilterAmount}
                            setFilterGender={this.setFilterGender}
                            setFilterHairtype = {this.setFilterHairtype}
                            setFilterAppoinrments={this.setFilterAppoinrments}
                            setFilterPrice={this.setFilterPrice}
                            setFilterTop={this.setFilterTop}
                            setFilterMark = {this.setFilterMark}
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

                     {/*small-display */}
                    <div id='display-products-small-size'>
                            <div className='z-index-2 left-0 position-absolute ml-0 pl-0 rgba-brown-strong  shop-filters-block w-responsive w-50 pt-3 pb-5 clearfix mt-5 '>
                                <button className='left-side-toggle h-25'>
                                    <MDBIcon icon="bars" size="5x" />
                                </button>
                                <ShopFilter
                                            setFilterTypes={this.setFilterTypes}
                                            setFilterBrands={this.setFilterBrands}
                                            setFilterSeries={this.setFilterSeries}
                                            setFilterAmount={this.setFilterAmount}
                                            setFilterGender={this.setFilterGender}
                                            setFilterHairtype = {this.setFilterHairtype}
                                            setFilterAppoinrments={this.setFilterAppoinrments}
                                            setFilterPrice={this.setFilterPrice}
                                            setFilterTop={this.setFilterTop}
                                            setFilterMark = {this.setFilterMark}
                                        />
                            </div>
                            {/*products list*/}
                            <div className='z-index-5 shop-items pt-5 mt-3 right w-75 bg-white d-inline-block '>
                                <div className='shop-items-md bg-white m-0 justify-content-center'>
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
          </div>
        )
    }
}

export default withRouter(ShopProducts);