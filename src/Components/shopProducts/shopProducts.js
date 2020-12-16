import React from 'react';
import {Component} from 'react';
import './shopProducts.css'
import ShopFilter from './shopFilter'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import {MDBNav, MDBContainer, MDBIcon, MDBBtn, MDBCollapse, MDBHamburgerToggler} from 'mdbreact';

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


    sidenavToggle = sidenavId => () => {
        const sidenavNr = `sideNav${sidenavId}`
        this.setState({
            [sidenavNr]: !this.state[sidenavNr]
        });
    };



    constructor(props) {
        super(props);
    
        this.state = {
            sideNavLeft: false,
            collapseID: '',
            value: 0,
            items: {
                default: '1',
            },
            products: [],
            navigation: false,
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


    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
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

    // setFilterFooter(type) {
    //     let types = {}
    //     types[type] = 1
    //     console.log(type)
    //     this.setFilterFooter(type)
    //     this.doAjax()
    // }


    doAjax() {
        let url
        if (Object.keys(this.filter).length !== 0) {
            url = 'http://yvonne-server.loc/api/filter?filter='+encodeURIComponent(JSON.stringify(this.filter))
        }else{
            url = 'http://yvonne-server.loc/api/products'
        }
        fetch(url)
          .then(response => response.json())
          .then(data => {
                if(data.products.data){
                    this.setState({products: data.products.data, navigation: data.products})
                }else{
                    this.setState({products: data.products})
                }
          });
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
              .then(data => {
                if(data.products.data){
                    this.setState({products: data.products.data, navigation: data.products})
                }else{
                    this.setState({products: data.products})
                }
              });
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

    goToPrevPage = () => {
        
    }

    goToNextPage = () => {
        if(!this.state.navigation) return;
        fetch(this.state.navigation.next_page_url)
          .then(response => response.json())
          .then(data => {
            if(data.products.data){
                this.setState({products: data.products.data, navigation: data.products})
            }else{
                this.setState({products: data.products})
            }
          });
    }

    render() {
        // cl(this.state.products)
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

             <div className='container'>
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
                            // setFilterFooter = {this.setFilterFooter}
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
                                    <Item product={product} appState={this.props.appState} setUserData={this.props.setUserData}/>
                                </MDBCol>
                                ))}
                            </MDBRow>
                        </div>
                        <MDBPagination color='purple'>
                            <MDBPageItem>
                                <MDBPageNav onClick={this.goToPrevPage} aria-label='Previous'>
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
                            <MDBPageItem onClick={this.goToNextPage}>
                                <MDBPageNav>
                                    &raquo;
                                </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>
                    </div>
                   </div>
                 </div>

                     {/*small-display */}
                 <MDBHamburgerToggler color="black" id="hamburger1"  className='bg-transparent d-md-none mx-3 left-side-toggle collapse-button' onClick={this.toggleCollapse('navbarCollapse1')} />
                 <MDBCollapse
                     id='navbarCollapse1'
                     isOpen={this.state.collapseID}
                     navbar
                     className='shop-nav-navbar bg-transparent'
                 >
                         <div className='left-0 bg-transparent position-absolute bg-white shop-filters-block w-responsive pt-0 pb-5'>
                                <ShopFilter
                                            setFilterTypes={this.setFilterTypes}
                                            setFilterBrands={this.setFilterBrands}
                                            setFilterSeries={this.setFilterSeries}
                                            setFilterAmount={this.setFilterAmount}
                                            setFilterGender={this.setFilterGender}ds
                                            setFilterHairtype = {this.setFilterHairtype}
                                            setFilterAppoinrments={this.setFilterAppoinrments}
                                            setFilterPrice={this.setFilterPrice}
                                            setFilterTop={this.setFilterTop}
                                            setFilterMark = {this.setFilterMark}
                                        />
                            </div>

                         </MDBCollapse>
                            {/*products list*/}
                            <div className='z-index-5 shop-items pt-0 m-auto justify-content-center w-100 bg-white  d-none'>
                                <div className='shop-items-md bg-white '>
                                    <h4 className='text-center px-4 py-1 font-weight-bold'>Товари</h4>
                                    <p className='shop-items-text grey-text text-center w-responsive mx-auto mb-5'>
                                        В нашому магазині представлений широкий вибір професійної косметики для волосся: шампуні для домашнього догляду та для професіного використання.
                                    </p>
                                    <MDBRow className='p-0 m-2 ml-0 border-0 products'>
                                        {this.state.products.map((product) => (
                                            <MDBCol key={product.id} lg='6' md='6' xl='4' className='col-6 pb-5 p-2 m-0 float-left product-card h-100'>
                                                <Item product={product}/>
                                            </MDBCol>
                                        ))}
                                    </MDBRow>
                                </div>
                                <MDBPagination color='purple' className='h-100'>
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

export default withRouter(ShopProducts);