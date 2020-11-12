import React from 'react';
import {Component} from 'react';
import './shopProducts.css'
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



class ShopProducts extends Component  {

    state = {
collapseID: '',
value: 0,
items: {
    default: '1',
},
products: []
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


    decrease = () => {
        this.setState ({value: this.state.value - 1 })
    }

    increase = () => {
        this.setState ({value: this.state.value + 1 })
    }

    componentDidMount(props) {
        fetch('http://yvonne-server.loc/products')
          .then(response => response.json())
          .then(products => this.setState({products: products.data}));
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
                        <div className='shop-filters h-100  left w-25 w-responsive ml-2'>
                            <h5 className='font-weight-bold pt-4 pl-3 pb-4' >Фільтри</h5>
                            <div className='shop-filters-prod filter filter-basic'>
                                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                    <p className='m-2 mb-3 font-weight-bold'>ВИД ПРОДУКЦІЇ</p>
                                    <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                                    <MDBInput label='Шампунь' type='checkbox' id='shampoo'  />
                                    <MDBInput label='Кондиціонер' type='checkbox' id='conditioner'/>
                                    <MDBInput label='Маска' type='checkbox' id='mask' />
                                    <MDBInput label='Ампули' type='checkbox' id='ampule'/>
                                    <MDBInput label='Молочко' type='checkbox' id='milk' />
                                    <MDBInput label='Лосьйон' type='checkbox' id='lotions'/>
                                    <MDBInput label='Еліксир' type='checkbox' id='elixir' />
                                    <MDBInput label='Спрей' type='checkbox' id='spray' />
                                    <MDBInput label='Колорінг' type='checkbox' id='coloring' />
                                    <MDBInput label='Стайлінг' type='checkbox' id='styling' />
                                    <MDBInput label='Захист' type='checkbox' id='protection' />
                                    <MDBInput label='Крем для волосся' type='checkbox' id='cream' />
                                    <MDBInput label='Олія' type='checkbox' id='oil' />
                                    <MDBInput label='Набір' type='checkbox' id='kit' />
                                    <MDBInput label='Гель-вуаль' type='checkbox' id='veil' />
                                    </Scrollbars>
                                </div>
                                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                    <p className='m-2 font-weight-bold'>БРЕНД</p>
                                    <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                                    <input type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                                    <MDBInput label='FarmaVita' type='checkbox' id='farmavita' />
                                    <MDBInput label='Davines' type='checkbox' id='davines'  />
                                    <MDBInput label='Joico' type='checkbox' id='joico' />
                                    <MDBInput label='ProfiStyle' type='checkbox' id='profistyle' />
                                    <MDBInput label='Felps' type='checkbox' id='felps' />
                                    <MDBInput label='Schwarzkopf' type='checkbox' id='schwarzkopf' />
                                    <MDBInput label='Mirella' type='checkbox' id='mirella' />
                                    <MDBInput label='Altr Ego' type='checkbox' id='alterego' />
                                    </Scrollbars>
                                </div>
                                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                    <p className='m-2 mb-3 font-weight-bold'>ПРИЗНАЧЕННЯ</p>
                                    <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                                    <MDBInput label='Оздоровлення' type='checkbox' id='healt'/>
                                    <MDBInput label='Салонний догляд' type='checkbox' id='salon'/>
                                    <MDBInput label='Реконструкція' type='checkbox' id='reconstraction'/>
                                    <MDBInput label='Захист' type='checkbox' id='protection'/>
                                    <MDBInput label='Фарбування' type='checkbox' id='coloring'/>
                                    <MDBInput label='Випрямлення' type='checkbox' id='stratening'/>
                                    <MDBInput label='Натуральне' type='checkbox' id='natural'/>
                                    <MDBInput label='Для кучер' type='checkbox' id='curl'/>
                                    <MDBInput label='Для шкіри голови' type='checkbox' id='skin'/>
                                    <MDBInput label='Нейтралізація жовтизни' type='checkbox' id='yellow'/>
                                    <MDBInput label='Обєм' type='checkbox' id='volume'/>
                                    <MDBInput label='Себо' type='checkbox' id='sebo'/>
                                    <MDBInput label='Проти лупи' type='checkbox' id='lupa'/>
                                    <MDBInput label='Проти випадіння' type='checkbox' id='loss'/>
                                    </Scrollbars>
                                </div>
                                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                    <p className='m-2 mb-3 font-weight-bold'>КАТЕГОРІЯ</p>
                                    <MDBInput label='Для жінок' type='checkbox' id='woman' />
                                    <MDBInput label='Для чоловіків' type='checkbox' id='man'/>
                                </div>
                                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                    <p className='m-2 font-weight-bold'>СЕРІЯ</p>
                                    <input type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                                    <Scrollbars className='mb-5 w-100 scroll'>
                                    <MDBInput label='Amethyste' type='checkbox' id='amethyste'/>
                                    <MDBInput label='Argan sublime' type='checkbox' id='argan' />
                                    <MDBInput label='Onely' type='checkbox' id='onely' />
                                    <MDBInput label='Bioxil' type='checkbox' id='bioxil' />
                                    <MDBInput label='K.Liss' type='checkbox' id='kliss' />
                                    <MDBInput label='Linea Back Bar' type='checkbox' id='linea' />
                                    <MDBInput label='Tricogen' type='checkbox' id='tricogen' />
                                    <MDBInput label='Bee Form' type='checkbox' id='beeform' />
                                    <MDBInput label='Blond Pink' type='checkbox' id='blondpink' />
                                    <MDBInput label='OI' type='checkbox' id='oi' />
                                    <MDBInput label='NaturalTech' type='checkbox' id='naturaltech' />
                                    <MDBInput label='Essential Haircare' type='checkbox' id='essential' />
                                    <MDBInput label='Anti-Loss' type='checkbox' id='antiloss' />
                                    <MDBInput label='Sebum' type='checkbox' id='sebum' />
                                    <MDBInput label='Osis+' type='checkbox' id='osis' />
                                    <MDBInput label='Defy Damage' type='checkbox' id='defy' />
                                    <MDBInput label='Blond Life' type='checkbox' id='defy' />
                                    <MDBInput label='Joifull' type='checkbox' id='defy' />
                                    <MDBInput label='HydraSplash' type='checkbox' id='HydraSplash' />
                                    <MDBInput label='Color Infuse' type='checkbox' id='infuse' />
                                    <MDBInput label='Color Balance' type='checkbox' id='balance' />
                                    <MDBInput label='K-pack' type='checkbox' id='k-pack' />
                                    <MDBInput label='Style & Finish' type='checkbox' id='sf' />
                                    <MDBInput label='Moisture recovery' type='checkbox' id='moisture' />
                                    <MDBInput label='Blond life' type='checkbox' id='bl' />
                                    <MDBInput label='Shake series' type='checkbox' id='shake' />
                                    </Scrollbars>
                                </div>
                                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                    <p className='m-2 font-weight-bold'>ОБСЯГ</p>
                                    <input type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                                    <Scrollbars className='mb-0 w-100 scroll'>
                                    <MDBInput label='10 ml' type='checkbox' id='10'/>
                                    <MDBInput label='100 ml' type='checkbox' id='100' />
                                    <MDBInput label='130 ml' type='checkbox' id='130' />
                                    <MDBInput label='150 ml' type='checkbox' id='150' />
                                    <MDBInput label='200 ml' type='checkbox' id='200' />
                                    <MDBInput label='250 ml' type='checkbox' id='250' />
                                    <MDBInput label='300 ml' type='checkbox' id='300' />
                                    <MDBInput label='1000 ml' type='checkbox' id='1000' />
                                    <MDBInput label='5 LT' type='checkbox' id='5LT'/>
                                    </Scrollbars>
                                </div>
                                <div className='mb-5'>
                                    <p className='m-2 mb-3 font-weight-bold'>ЦІНА</p>
                                    <div className='d-flex'>
                                        <span className='text-left pl-1 pr-2 font-weight-normal'>0 грн</span>
                                        <form className='multi-range-field w-50 w-auto'>
                                            <input id='multi' type='range' className='multi-range'></input>
                                        </form>
                                        <span className='text-right pr-1 pl-1 font-weight-normal'>2000 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/*products list*/}

                    <div className='shop-items right w-75 bg-white d-inline-block ml-0  pr-3 pr-xl-0 ml-xl-5 ml-sm-3 ml-lg-3 ml-md-3'>
                        <div className='shop-items-md bg-white'>
                            <h4 className='text-center p-4 font-weight-bold'>Товари</h4>
                            <p className='shop-items-text grey-text text-center w-responsive mx-auto mb-5'>
                                В нашому магазині представлений широкий вибір професійної косметики для волосся: шампуні для домашнього догляду та для професіного використання.
                            </p>
                            <MDBRow className='p-0 m-2 ml-0 border-0 products'>
                                {this.state.products.map((product) => (
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2'>
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