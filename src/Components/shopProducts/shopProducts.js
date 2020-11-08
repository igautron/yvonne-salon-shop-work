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

//davines
import Item1 from './../shopProducts/ITEMS/Davines/Item1/Item1'
import Item2 from './../shopProducts/ITEMS/Davines/Item2/Item2'
import Item3 from './../shopProducts/ITEMS/Davines/Item3/Item3'
import Item4 from './../shopProducts/ITEMS/Davines/Item4/Item4'
import Item5 from './../shopProducts/ITEMS/Davines/Item5/Item5'
import Item6 from './../shopProducts/ITEMS/Davines/Item6/Item6'
import Item7 from './../shopProducts/ITEMS/Davines/Item7/Item7'
import Item8 from './../shopProducts/ITEMS/Davines/Item8/Item8'
import Item9 from './../shopProducts/ITEMS/Davines/Item9/Item9'
import Item10 from './../shopProducts/ITEMS/Davines/Item10/Item10'
import Item11 from './../shopProducts/ITEMS/Davines/Item11/Item11'
import Item13 from './../shopProducts/ITEMS/Davines/Item13/Item13'
import Item14 from './../shopProducts/ITEMS/Davines/Item14/Item14'
import Item15 from './../shopProducts/ITEMS/Davines/Item15/Item15'
import Item16 from './../shopProducts/ITEMS/Davines/Item16/Item16'
import Item17 from './../shopProducts/ITEMS/Davines/Item17/Item17'
import Item18 from './../shopProducts/ITEMS/Davines/Item18/Item18'
import Item19 from './../shopProducts/ITEMS/Davines/Item19/Item19'
import Item20 from './../shopProducts/ITEMS/Davines/Item20/Item20'
import Item21 from './../shopProducts/ITEMS/Davines/Item21/Item21'
import Item22 from './../shopProducts/ITEMS/Davines/Item22/Item22'
import Item23 from './../shopProducts/ITEMS/Davines/Item23/Item23'
import Item24 from './../shopProducts/ITEMS/Davines/Item24/Item24'
import Item25 from './../shopProducts/ITEMS/Davines/Item25/Item25'
import Item26 from './../shopProducts/ITEMS/Davines/Item26/Item26'
import Item27 from './../shopProducts/ITEMS/Davines/Item27/Item27'
import Item28 from './../shopProducts/ITEMS/Davines/Item28/Item28'
import Item29 from './../shopProducts/ITEMS/Davines/Item29/Item29'
import Item30 from './../shopProducts/ITEMS/Davines/Item30/Item30'
import Item31 from './../shopProducts/ITEMS/Davines/Item31/Item31'
import Item32 from './../shopProducts/ITEMS/Davines/Item32/Item32'
import Item33 from './../shopProducts/ITEMS/Davines/Item33/Item33'

//davines2

import Item201 from './../shopProducts/ITEMS/Davines2/Item201/Item201'
import Item202 from './../shopProducts/ITEMS/Davines2/Item202/Item202'
import Item203 from './../shopProducts/ITEMS/Davines2/Item203/Item203'
import Item204 from './../shopProducts/ITEMS/Davines2/Item204/Item204'
import Item205 from './../shopProducts/ITEMS/Davines2/Item205/Item205'
import Item206 from './../shopProducts/ITEMS/Davines2/Item206/Item206'
import Item207 from './../shopProducts/ITEMS/Davines2/Item207/Item207'
import Item208 from './../shopProducts/ITEMS/Davines2/Item208/Item208'
import Item209 from './../shopProducts/ITEMS/Davines2/Item209/Item209'
import Item210 from './../shopProducts/ITEMS/Davines2/Item210/Item210'
import Item211 from './../shopProducts/ITEMS/Davines2/Item211/Item211'
import Item213 from './../shopProducts/ITEMS/Davines2/Item213/Item213'
import Item214 from './../shopProducts/ITEMS/Davines2/Item214/Item214'
import Item215 from './../shopProducts/ITEMS/Davines2/Item215/Item215'
import Item216 from './../shopProducts/ITEMS/Davines2/Item216/Item216'
import Item217 from './../shopProducts/ITEMS/Davines2/Item217/Item217'
import Item218 from './../shopProducts/ITEMS/Davines2/Item218/Item218'
import Item219 from './../shopProducts/ITEMS/Davines2/Item219/Item219'
import Item220 from './../shopProducts/ITEMS/Davines2/Item220/Item220'
import Item221 from './../shopProducts/ITEMS/Davines2/Item221/Item221'
import Item222 from './../shopProducts/ITEMS/Davines2/Item222/Item222'
import Item223 from './../shopProducts/ITEMS/Davines2/Item223/Item223'
import Item224 from './../shopProducts/ITEMS/Davines2/Item224/Item224'
import Item225 from './../shopProducts/ITEMS/Davines2/Item225/Item225'
import Item226 from './../shopProducts/ITEMS/Davines2/Item226/Item226'
import Item227 from './../shopProducts/ITEMS/Davines2/Item227/Item227'
import Item228 from './../shopProducts/ITEMS/Davines2/Item228/Item228'
import Item229 from './../shopProducts/ITEMS/Davines2/Item229/Item229'
import Item230 from './../shopProducts/ITEMS/Davines2/Item230/Item230'
import Item231 from './../shopProducts/ITEMS/Davines2/Item231/Item231'
import Item232 from './../shopProducts/ITEMS/Davines2/Item232/Item232'
import Item233 from './../shopProducts/ITEMS/Davines2/Item233/Item233'
import Item234 from './../shopProducts/ITEMS/Davines2/Item234/Item234'
import Item235 from './../shopProducts/ITEMS/Davines2/Item235/Item235'
import Item236 from './../shopProducts/ITEMS/Davines2/Item236/Item236'
import Item237 from './../shopProducts/ITEMS/Davines2/Item237/Item237'
import Item238 from './../shopProducts/ITEMS/Davines2/Item238/Item238'
import Item239 from './../shopProducts/ITEMS/Davines2/Item239/Item239'
import Item240 from './../shopProducts/ITEMS/Davines2/Item240/Item240'
import Item241 from './../shopProducts/ITEMS/Davines2/Item241/Item241'
import Item242 from './../shopProducts/ITEMS/Davines2/Item242/Item242'
import Item243 from './../shopProducts/ITEMS/Davines2/Item243/Item243'
import Item244 from './../shopProducts/ITEMS/Davines2/Item244/Item244'



import Item34 from './../shopProducts/ITEMS/Farmavita/Item34/Item34'
import Item35 from './../shopProducts/ITEMS/Farmavita/Item35/Item35'
import Item36 from './../shopProducts/ITEMS/Farmavita/Item36/Item36'
import Item37 from './../shopProducts/ITEMS/Farmavita/Item37/Item37'
import Item38 from './../shopProducts/ITEMS/Farmavita/Item38/Item38'
import Item39 from './../shopProducts/ITEMS/Farmavita/Item39/Item39'
import Item40 from './../shopProducts/ITEMS/Farmavita/Item40/Item40'
import Item41 from './../shopProducts/ITEMS/Farmavita/Item41/Item41'
import Item42 from './../shopProducts/ITEMS/Farmavita/Item42/Item42'
import Item43 from './../shopProducts/ITEMS/Farmavita/Item43/Item43'
import Item44 from './../shopProducts/ITEMS/Farmavita/Item44/Item44'
import Item45 from './../shopProducts/ITEMS/Farmavita/Item45/Item45'
import Item46 from './../shopProducts/ITEMS/Farmavita/Item46/Item46'
import Item47 from './../shopProducts/ITEMS/Farmavita/Item47/Item47'
import Item48 from './../shopProducts/ITEMS/Farmavita/Item48/Item48'
import Item50 from './../shopProducts/ITEMS/Farmavita/Item50/Item50'
import Item51 from './../shopProducts/ITEMS/Farmavita/Item51/Item51'
import Item52 from './../shopProducts/ITEMS/Farmavita/Item52/Item52'
import Item53 from './../shopProducts/ITEMS/Farmavita/Item53/Item53'
import Item54 from './../shopProducts/ITEMS/Farmavita/Item54/Item54'
import Item55 from './../shopProducts/ITEMS/Farmavita/Item55/Item55'
import Item56 from './../shopProducts/ITEMS/Farmavita/Item56/Item56'
import Item57 from './../shopProducts/ITEMS/Farmavita/Item57/Item57'
import Item58 from './../shopProducts/ITEMS/Farmavita/Item58/Item58'


import Item100 from './../shopProducts/ITEMS/Farmavita2/Item100/Item100'
import Item101 from './../shopProducts/ITEMS/Farmavita2/Item101/Item101'
import Item102 from './../shopProducts/ITEMS/Farmavita2/Item102/Item102'
import Item103 from './../shopProducts/ITEMS/Farmavita2/Item103/Item103'
import Item104 from './../shopProducts/ITEMS/Farmavita2/Item104/Item104'
import Item105 from './../shopProducts/ITEMS/Farmavita2/Item105/Item105'
import Item106 from './../shopProducts/ITEMS/Farmavita2/Item106/Item106'
import Item107 from './../shopProducts/ITEMS/Farmavita2/Item107/Item107'
import Item108 from './../shopProducts/ITEMS/Farmavita2/Item108/Item108'
import Item109 from './../shopProducts/ITEMS/Farmavita2/Item109/Item109'
import Item110 from './../shopProducts/ITEMS/Farmavita2/Item110/Item110'
import Item111 from './../shopProducts/ITEMS/Farmavita2/Item111/Item111'
import Item112 from './../shopProducts/ITEMS/Farmavita2/Item112/Item112'
import Item113 from './../shopProducts/ITEMS/Farmavita2/Item113/Item113'
import Item114 from './../shopProducts/ITEMS/Farmavita2/Item114/Item114'
import Item115 from './../shopProducts/ITEMS/Farmavita2/Item115/Item115'
import Item116 from './../shopProducts/ITEMS/Farmavita2/Item116/Item116'
import Item117 from './../shopProducts/ITEMS/Farmavita2/Item117/Item117'
import Item118 from './../shopProducts/ITEMS/Farmavita2/Item118/Item118'


















import Item60 from './../shopProducts/ITEMS/Joico/Item60/Item60'
import Item61 from './../shopProducts/ITEMS/Joico/Item61/Item61'
import Item62 from './../shopProducts/ITEMS/Joico/Item62/Item62'
import Item63 from './../shopProducts/ITEMS/Joico/Item63/Item63'
import Item64 from './../shopProducts/ITEMS/Joico/Item64/Item64'
import Item65 from './../shopProducts/ITEMS/Joico/Item65/Item65'
import Item66 from './../shopProducts/ITEMS/Joico/Item66/Item66'
import Item67 from './../shopProducts/ITEMS/Joico/Item67/Item67'
import Item68 from './../shopProducts/ITEMS/Joico/Item68/Item68'
import Item69 from './../shopProducts/ITEMS/Joico/Item69/Item69'
import Item70 from './../shopProducts/ITEMS/Joico/Item70/Item70'
import Item71 from './../shopProducts/ITEMS/Joico/Item71/Item71'
import Item72 from './../shopProducts/ITEMS/Joico/Item72/Item72'
import Item74 from './../shopProducts/ITEMS/Joico/Item74/Item74'
import Item75 from './../shopProducts/ITEMS/Joico/Item75/Item75'
import Item76 from './../shopProducts/ITEMS/Joico/Item76/Item76'
import Item77 from './../shopProducts/ITEMS/Joico/Item77/Item77'
import Item78 from './../shopProducts/ITEMS/Joico/Item78/Item78'
import Item79 from './../shopProducts/ITEMS/Joico/Item79/Item79'
import Item80 from './../shopProducts/ITEMS/Joico/Item80/Item80'
import Item81 from './../shopProducts/ITEMS/Joico/Item81/Item81'
import Item82 from './../shopProducts/ITEMS/Joico/Item82/Item82'
import Item83 from './../shopProducts/ITEMS/Joico/Item83/Item83'
import Item84 from './../shopProducts/ITEMS/Joico/Item84/Item84'
import Item85 from './../shopProducts/ITEMS/Joico/Item85/Item85'
import Item86 from './../shopProducts/ITEMS/Joico/Item86/Item86'
import Item87 from './../shopProducts/ITEMS/Joico/Item87/Item87'


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
        collapseID: ''
    }


    state = {
        value: 0
    }

    state = {
            items: {
                default: '1',
            }
        };


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
                                    <span className='text-span mt-3 black-text text-center font-weight-bold shop-prod-item'>ЛІКУВАННЯ</span>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5 pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5' color='#fce4ec m-0 w-100 '>
                                <MDBLink className='p-0 text-center pl-2 pr-2' data-filter='reconstruction'>
                                    <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>ВІДНОВЛЕННЯ</span>
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
                                    <p className='m-2 font-weight-bold'>ВИД ПРОДУКЦІЇ</p>
                                    <input type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input'/>
                                <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll filter-nav'>
                                    <MDBInput label='Шампунь' type='checkbox' id='shampoo' data-filter='shampoo' onclick="filterSelection('shampoo')"/>
                                    <MDBInput label='Кондиціонер' type='checkbox' id='conditioner' data-filter='conditioner' onclick="filterSelection('milk')"/>
                                    <MDBInput label='Маска' type='checkbox' id='mask' data-filter='mask'/>
                                    <MDBInput label='Ампули' type='checkbox' id='ampule' data-filter='ampule'/>
                                    <MDBInput label='Молочко' type='checkbox' id='milk' data-filter='milk'/>
                                    <MDBInput label='Лосьйон' type='checkbox' id='lotion' data-filter='lotion'/>
                                    <MDBInput label='Еліксир' type='checkbox' id='elixir' data-filter='alixir'/>
                                    <MDBInput label='Спрей' type='checkbox' id='spray' data-filter='spray'/>
                                    <MDBInput label='Колорінг' type='checkbox' id='spray' data-filter='coloring'/>
                                    <MDBInput label='Стайлінг' type='checkbox' id='spray' data-filter='styling'/>
                                    <MDBInput label='Захист' type='checkbox' id='spray' data-filter='protection'/>
                                </Scrollbars>
                                <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                                    <p className='m-2 font-weight-bold'>БРЕНД</p>
                                    <input type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                                    <MDBInput label='Davines' type='checkbox' id='davines' data-filter='davines' />
                                    <MDBInput label='FarmaVita' type='checkbox' id='farmavita' data-filter='farmavita'/>
                                    <MDBInput label='Mirella' type='checkbox' id='mirella' data-filter='mirella'/>
                                    <MDBInput label='ProfiStyle' type='checkbox' id='profistyle' data-filter='profistyle'/>
                                    <MDBInput label='Joico' type='checkbox' id='joico' data-filter='joico'/>
                                    <MDBInput label='Schwarzkopf' type='checkbox' id='schwarzkopf' data-filter='schwarzkopf'/>
                                </Scrollbars>
                                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                    <p className='m-2 mb-3 font-weight-bold'>ТИП ВОЛОССЯ</p>
                                    <MDBInput label='Сухе та пошкоджене' type='checkbox' id='dry' data-filter='dry'/>
                                    <MDBInput label='Жирне' type='checkbox' id='fatter' data-filter='fatter'/>
                                    <MDBInput label='Ламке' type='checkbox' id='lamina' data-filter='lamina'/>
                                    <MDBInput label='Освітлене' type='checkbox' id='clarified' data-filter='clarified'/>
                                </div>
                                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                    <p className='m-2 mb-3 font-weight-bold'>ПРИЗНАЧЕННЯ</p>
                                    <MDBInput label='Лікування' type='checkbox' id='health' data-filter='health'/>
                                    <MDBInput label='Салонний догляд' type='checkbox' id='salon' data-filter='salon'/>
                                    <MDBInput label='Захист' type='checkbox' id='protection' data-filter='protection'/>
                                    <MDBInput label='Під час фарбування' type='checkbox' id='coloring' data-filter='coloring'/>
                                    <MDBInput label='Випрямлення' type='checkbox' id='straightening' data-filter='straightening'/>
                                    <MDBInput label='Натуральна' type='checkbox' id='natural' data-filter='natural'/>
                                    <MDBInput label='Люкс' type='checkbox' id='lux' data-filter='lux'/>
                                    <MDBInput label='Для шкіри голови' type='checkbox' id='skin' data-filter='skin'/>
                                    <MDBInput label='Себо' type='checkbox' id='sebo' data-filter='sebo'/>
                                    <MDBInput label='Лупа' type='checkbox' id='lupa' data-filter='lupa'/>
                                </div>
                                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                    <p className='m-2 mb-3 font-weight-bold'>КАТЕГОРІЯ</p>
                                    <MDBInput label='Для жінок' type='checkbox' id='female' data-filter='female'/>
                                    <MDBInput label='Для чоловіків' type='checkbox' id='male' data-filter='male'/>
                                </div>
                                    <p className='m-2 font-weight-bold'>СЕРІЯ</p>
                                    <input type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                                    <Scrollbars className='mb-5 w-100 scroll'>
                                    <MDBInput label='Amethyste' type='checkbox' id='amethyste' data-filter='amethyste'/>
                                    <MDBInput label='Back Bar' type='checkbox' id='backbar' data-filter='backbar'/>
                                    <MDBInput label='Argan' type='checkbox' id='argan' data-filter='argan'/>
                                    <MDBInput label='Onely' type='checkbox' id='onely' data-filter='onely'/>
                                    <MDBInput label='Bioxil' type='checkbox' id='bioxil' data-filter='bioxil'/>
                                    <MDBInput label='K.Liss' type='checkbox' id='kliss' data-filter='kliss'/>
                                    <MDBInput label='Tricogen' type='checkbox' id='tricogen' data-filter='tricogen'/>
                                    <MDBInput label='Bee Form' type='checkbox' id='beeform' data-filter='beeform'/>
                                    <MDBInput label='Blond Pink' type='checkbox' id='blondpink' data-filter='blondpink'/>
                                    <MDBInput label='OI' type='checkbox' id='oi' data-filter='oi'/>
                                    <MDBInput label='NaturalTech' type='checkbox' id='naturaltech' data-filter='naturaltech'/>
                                    <MDBInput label='Essential Haircare' type='checkbox' id='essential' data-filter='essential'/>
                                    <MDBInput label='Anti-Loss' type='checkbox' id='antiloss' data-filter='antiloss'/>
                                    <MDBInput label='Sebum' type='checkbox' id='sebum' data-filter='sebum'/>
                                    <MDBInput label='Osis+' type='checkbox' id='osis' data-filter='osis'/>
                                </Scrollbars>
                                    <p className='m-2 font-weight-bold'>ОБСЯГ</p>
                                    <input type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                                <Scrollbars className='mb-0 w-100 scroll'>
                                    <MDBInput label='10ml' type='checkbox' id='10' data-filter='10'/>
                                    <MDBInput label='100ml' type='checkbox' id='100' data-filter='100'/>
                                    <MDBInput label='150ml' type='checkbox' id='150' data-filter='150'/>
                                    <MDBInput label='200ml' type='checkbox' id='200' data-filter='200'/>
                                    <MDBInput label='250ml' type='checkbox' id='250' data-filter='250'/>
                                    <MDBInput label='1000ml' type='checkbox' id='1000' data-filter='1000'/>
                                    <MDBInput label='5LT' type='checkbox' id='5LT' data-filter='5'/>
                                </Scrollbars>
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
                            <h4 className='text-center p-4 font-weight-bold'>Шампуні</h4>
                            <p className='shop-items-text grey-text text-center w-responsive mx-auto mb-5'>
                                В нашому магазині представлений широкий вибір професійної косметики для волосся: шампуні для домашнього догляду та для професіного використання.
                            </p>
                            <MDBRow className='p-0 m-2 ml-0 border-0 products'>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item1 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item2 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item3 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item4 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item5 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item6 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item7 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item8 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item9 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item10 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item11 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                <Item13 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item14 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines' >
                                    <Item15 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item16 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item17 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item18 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item19 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines' >
                                    <Item20 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item21 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item22 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item23 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item24 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item25 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item26 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item27 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item28 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item29 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item30 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item31 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item32 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item33 />
                                </MDBCol>

                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item201 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item202 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item203 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item204 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item205 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item206 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item207 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item208 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item209 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item210 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item211 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item213 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item214 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines' >
                                    <Item215 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item216 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item217 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item218 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item219 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines' >
                                    <Item220 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item221 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item222 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item223 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item224 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item225 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item226 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item227 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item228 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item229 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item230 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item231 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item232 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item233 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item234 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item235 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item236 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item237 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item238 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item239 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item240 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item241 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item242 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item243 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='davines'>
                                    <Item244 />
                                </MDBCol>





                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item60 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item61 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item62 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item63 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item64 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item65 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item66 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item67 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item68 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item69 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item70 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item71 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item72 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item74 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item75 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item76 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item77 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item78 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item79 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item80 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item81 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item82 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item83 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face' >
                                    <Item84 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item85 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item86 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='face'>
                                    <Item87 />
                                </MDBCol>

                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='shampoo' >
                                    <Item110 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2'  data-filter='shampoo'>
                                    <Item111 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='shampoo'>
                                    <Item112 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='shampoo'>
                                    <Item113 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='mask'>
                                    <Item114 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='balsam'>
                                    <Item115 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='balsam'>
                                    <Item116 />
                                </MDBCol>


                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item100 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item101 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item102 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita' >
                                    <Item103 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item104 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item105 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item106 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita' >
                                    <Item110 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2'  data-filter='farmavita'>
                                    <Item111 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item112 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item113 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item114 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item115 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item116 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item117 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='farmavita'>
                                    <Item118 />
                                </MDBCol>

                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item34 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item35 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item36 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item37 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item38 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item39 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item40 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item41 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item42 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item43 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item44 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item45 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item46 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item47 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item48 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item50 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item51 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item52 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item53 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item54 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item55 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item56 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item57 />
                                </MDBCol>
                                <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' data-filter='fito'>
                                    <Item58 />
                                </MDBCol>
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


                    {/*products detail*/}

                    <div className='container product-details bg-white'>
                          <div className='item ml-4'>
                              <MDBCard className='pt-3'>
                                 <button type="button" className="btn btn-link float-left w-100 border-danger"><MDBIcon icon="arrow-left" className='text-left float-left '/></button>
                                  <div className='d-inline w-100'>
                                      <MDBCol sm='12' md='12' lg='12' xl='12' className='p-0 m-0'>
                                          <div className='item-image p-1 m-0 p-2'>
                                              <img className='item-img m-auto justify-content-center d-block' src={require('../../img/shop/products/kliss3-big.jpg')} />
                                          </div>
                                      </MDBCol>
                                      <MDBCol sm='12' lg='12' xl='12' className='p-2 m-0'>
                                                  <div className='item-description p-2'>
                                                      <h2>ProdName</h2>
                                                      <p className='font-weight-normal'>Артикул:<span className='item-articule font-weight-light'> 1234567</span></p>
                                                      <h6  className='font-weight-normal'>Вид товару: <span className='item-type font-weight-light'>Шампунь</span></h6>
                                                      <h6  className='font-weight-normal'>Виробник: <span className='item-brand font-weight-light'>ProfiStyle</span></h6>
                                                      <h6  className='font-weight-normal'>Об'єм: <span className='item-brand font-weight-light'>100</span>  ml</h6>
                                                      <h6  className='font-weight-normal'>Призначення: <span className='item-brand font-weight-light'>лікування пошкодженого волосся</span></h6>
                                                      <p className='item-text p-0 mb-2'>Опис:</p>
                                                      <p className='item-text p-0 font-weight-light'>Шампунь зроблена із найновітніших технологій поширених Шампунь зроблена із найновітніших технологій поширених ших технологій поширених зроблена із найновітніших технологій поширених ших технологій поширених</p>
                                                  <p className='p-0 mb-2 pt-2'>Склад:</p>
                                                  <p className='item-text p-0 font-weight-light'>найновітніших технологій поширених Шампунь зроблена із найновітніших</p>
                                                  <p className='item-present bg-white p-0 green-text m-0'><span className=' font-small'><i className="fas fa-check green-text font-weight-bolder p-2"></i>В НАЯВНОСТІ</span></p>
                                                  <button className='item-btn-Like black-text border-0 bg-transparent bg-transparent purple-text '><MDBIcon icon="heart" className='pr-2'/>До списку бажань</button>
                                                  <p className='item-text p-0 mb-2 mt-3'>Ціна:</p>
                                                  <h3 className='price font-weight-bold mb-4'><span className='item-price'>1500</span> грн</h3>
                                                  <div className='item-quantity-block d-inline-flex w-100'>
                                                      <div className='ml-0 mr-md-5 mr-md-4 mr-lg-5 mr-xl-5'>
                                                          <p>Кількість</p>
                                                          <div className='item-quantity def-number-input number-input mb-3  z-depth-2'>
                                                              <button onClick={this.decrease} className='minus text-white'></button>
                                                              <input className='quantity' value='0' type='number' name='quantity' value={this.state.value} onChange={() => console.log('change')}/>
                                                              <button onClick={this.increase} className='plus text-white'></button>
                                                          </div>
                                                      </div>
                                                      <div className='ml-0 item-large'>
                                                          <p>Об'єм</p>
                                                          <select className="mb-4 item-large-block browser-default custom-select z-depth-2 pl-3 w-100">
                                                              <option>100 ml</option>
                                                              <option value="1">50 ml</option>
                                                              <option value="2">75 ml</option>
                                                              <option value="3">150 ml</option>
                                                              <option value="3">200 ml</option>
                                                              <option value="3">250 ml</option>
                                                              <option value="3">300 ml</option>
                                                          </select>
                                                      </div>
                                                  </div>
                                                  <div className='item-buy-block pt-sm-4'>
                                                      <button className='item-to-cart mr-5 white-text border-0 z-depth-3 mb-4 mb-sm-4 mr-5 mr-sm-5 mr-md-5  mr-lg-5 mr-xl-5'>В КОРЗИНУ</button>
                                                      <button className='item-to-cart white-text border-0 z-depth-3 mb-4 mb-sm-4'>КУПИТЬ</button>
                                                  </div>
                                            </div>
                                       </MDBCol>
                                  </div>
                              </MDBCard>
                          </div>
                        </div>
                        <MDBContainer className='bg-white'>
                           <div className='ml-4'>
                            <MDBNav pills className='item-pills'>
                                <MDBNavItem className='w-25'>
                                    <MDBNavLink
                                    link
                                    className='white-text font-weight-normal mr-3 discription-link text-center'
                                    to='#'
                                    active={this.state.items['default'] === '1'}
                                    onClick={this.togglePills('default', '1')}
                                    >
                                    ОПИС
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem className='w-25'>
                                    <MDBNavLink
                                    link
                                    className='white-text font-weight-normal mr-3 discription-link text-center'
                                    to='#'
                                    active={this.state.items['default'] === '2'}
                                    onClick={this.togglePills('default', '2')}
                                    >
                                    ХАРАКТЕРИСТИКА
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem className='w-25'>
                                    <MDBNavLink
                                        link
                                        className='white-text font-weight-normal discription-link text-center'
                                        to='#'
                                        active={this.state.items['default'] === '3'}
                                        onClick={this.togglePills('default', '3')}
                                    >
                                        СХОЖІ ТОВАРИ
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem className='w-25'>
                                    <MDBNavLink
                                    link
                                    className='white-text font-weight-normal discription-link text-center'
                                    to='#'
                                    active={this.state.items['default'] === '4'}
                                    onClick={this.togglePills('default', '4')}
                                    >
                                        ДОСТАВКА
                                    </MDBNavLink>
                                </MDBNavItem>
                             </MDBNav>
                             <MDBTabContent activeItem={this.state.items['default']} className='m-2'>
                                <MDBTabPane tabId='1' className='mt-4'>
                                    <p className='item-about-product'>

                                    </p>
                                    <p className='font-weight-bold'>
                                        Спосіб використання:
                                    </p>
                                    <div className='item-method-of-use'>

                                    </div>
                                    <p className='font-weight-bold'>
                                        Склад:
                                    </p>
                                    <div className='item-about-makeup'>

                                    </div>
                                </MDBTabPane>
                                <MDBTabPane tabId='2'  className='mt-4'>
                                    <MDBTable>
                                        <MDBTableBody>
                                            <tr>
                                                <td>Код товара:</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Вага:</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Об'єм:</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Розміри:</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Колір:</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Країна виробник:</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Призначення:</td>
                                                <td>Для жінок</td>
                                            </tr>
                                            <tr>
                                                <td>Класифікація:</td>
                                                <td>Натуральна</td>
                                            </tr>
                                            <tr>
                                                <td>Тип волосся:</td>
                                                <td></td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBTabPane>
                                <MDBTabPane tabId='3' className='m-1'>
                                  <MDBRow className='mt-4 p-0'>
                                      <MDBCol lg='4' md='12' className='item mb-lg-0 pb-4 p-3' data-category='shampoo'>
                                          <MDBCard className='item-content border-0'>
                                              <MDBLink
                                                  className='text-white text-center pricing-card align-items-center rounded p-0'>
                                                  <MDBCardImage
                                                      src={require('../../img/shop/products/kliss3-big.jpg')}
                                                      className='img-fluid w-100 '
                                                      alt=''>
                                                  </MDBCardImage>
                                                  <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                      <p className='shop-item-name text-left font-weight-bold  pr-2 pl-0 pb-0 mb-2 mt-3'> ШАМПУНЬ FarmaVita
                                                          Onely Botanical, 200ml</p>
                                                      <MDBLink
                                                          color='primary'
                                                          href='!#'
                                                          style={{marginBottom: '1rem'}}
                                                          className='text-left font-weight-normal pr-2 p-0 pb-0 mb-2'
                                                      >
                                                          <p className='shop-item-describe black-text m-0'>На основі рослинних екстрактів. Для щоденного застосування. Робить ...
                                                          </p>
                                                      </MDBLink>
                                                      <span className='shop-item-price float-left black-text p-0 mb-2 ml-2'>100 грн</span>
                                                      <select className="item-large-block browser-default custom-select z-depth-1 mb-3 pb-1 ml-1 mr-2 ml-lg-0">
                                                          <option>100 ml</option>
                                                          <option value="1">50 ml</option>
                                                          <option value="2">75 ml</option>
                                                          <option value="3">150 ml</option>
                                                          <option value="3">200 ml</option>
                                                          <option value="3">250 ml</option>
                                                          <option value="3">300 ml</option>
                                                      </select>
                                                      <div className='item-btn'>
                                                        <span className='float-left shop-item-icons ml-1'>
                                                            <button className='item-btn-buy white-text z-depth-1 p-2'>В КОРЗИНУ</button>
                                                        </span>
                                                          <span className='float-right shop-item-icons white-text mt-0 mr-2 mb-3'>
                                                            <button className='prod-btn-like z-depth-1'><MDBIcon icon="heart" className='p-2 text-white'/></button>
                                                        </span>
                                                      </div>
                                                  </MDBCardBody>
                                              </MDBLink>
                                          </MDBCard>
                                      </MDBCol>
                                      <MDBCol lg='4' md='12' className='item mb-lg-0 pb-4 p-3' data-category='shampoo'>
                                          <MDBCard className='item-content border-0'>
                                              <MDBLink
                                                  className='text-white text-center pricing-card align-items-center rounded p-0'>
                                                  <MDBCardImage
                                                      src={require('../../img/shop/products/kliss3-big.jpg')}
                                                      className='img-fluid w-100 '
                                                      alt=''>
                                                  </MDBCardImage>
                                                  <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                      <p className='shop-item-name text-left font-weight-bold  pr-2 pl-0 pb-0 mb-2 mt-3'> ШАМПУНЬ FarmaVita
                                                          Onely Botanical, 200ml</p>
                                                      <MDBLink
                                                          color='primary'
                                                          href='!#'
                                                          style={{marginBottom: '1rem'}}
                                                          className='text-left font-weight-normal pr-2 p-0 pb-0 mb-2'
                                                      >
                                                          <p className='shop-item-describe black-text m-0'>На основі рослинних екстрактів. Для щоденного застосування. Робить ...
                                                          </p>
                                                      </MDBLink>
                                                      <span className='shop-item-price float-left black-text p-0 mb-2 ml-2'>100 грн</span>
                                                      <select className="item-large-block browser-default custom-select z-depth-1 mb-3 pb-1 ml-1 mr-2 ml-lg-0">
                                                          <option>100 ml</option>
                                                          <option value="1">50 ml</option>
                                                          <option value="2">75 ml</option>
                                                          <option value="3">150 ml</option>
                                                          <option value="3">200 ml</option>
                                                          <option value="3">250 ml</option>
                                                          <option value="3">300 ml</option>
                                                      </select>
                                                      <div className='item-btn'>
                                                        <span className='float-left shop-item-icons ml-1'>
                                                            <button className='item-btn-buy white-text z-depth-1 p-2'>В КОРЗИНУ</button>
                                                        </span>
                                                          <span className='float-right shop-item-icons white-text mt-0 mr-2 mb-3'>
                                                            <button className='prod-btn-like z-depth-1'><MDBIcon icon="heart" className='p-2 text-white'/></button>
                                                        </span>
                                                      </div>
                                                  </MDBCardBody>
                                              </MDBLink>
                                          </MDBCard>
                                      </MDBCol>
                                      <MDBCol lg='4' md='12' className='item mb-lg-0 pb-4 p-3' data-category='shampoo'>
                                          <MDBCard className='item-content border-0'>
                                              <MDBLink
                                                  className='text-white text-center pricing-card align-items-center rounded p-0'>
                                                  <MDBCardImage
                                                      src={require('../../img/shop/products/kliss3-big.jpg')}
                                                      className='img-fluid w-100 '
                                                      alt=''>
                                                  </MDBCardImage>
                                                  <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                      <p className='shop-item-name text-left font-weight-bold  pr-2 pl-0 pb-0 mb-2 mt-3'> ШАМПУНЬ FarmaVita
                                                          Onely Botanical, 200ml</p>
                                                      <MDBLink
                                                          color='primary'
                                                          href='!#'
                                                          style={{marginBottom: '1rem'}}
                                                          className='text-left font-weight-normal pr-2 p-0 pb-0 mb-2'
                                                      >
                                                          <p className='shop-item-describe black-text m-0 '>На основі рослинних екстрактів. Для щоденного застосування. Робить ...
                                                          </p>
                                                      </MDBLink>
                                                      <span className='shop-item-price float-left black-text p-0 mb-2 ml-2'>100 грн</span>
                                                      <select className="item-large-block browser-default custom-select z-depth-1 mb-3 pb-1 ml-1 mr-2 ml-lg-0">
                                                          <option>100 ml</option>
                                                          <option value="1">50 ml</option>
                                                          <option value="2">75 ml</option>
                                                          <option value="3">150 ml</option>
                                                          <option value="3">200 ml</option>
                                                          <option value="3">250 ml</option>
                                                          <option value="3">300 ml</option>
                                                      </select>
                                                      <div className='item-btn'>
                                                        <span className='float-left shop-item-icons ml-1'>
                                                            <button className='item-btn-buy white-text z-depth-1 p-2'>В КОРЗИНУ</button>
                                                        </span>
                                                          <span className='float-right shop-item-icons white-text mt-0 mr-2 mb-3'>
                                                            <button className='prod-btn-like z-depth-1'><MDBIcon icon="heart" className='p-2 text-white'/></button>
                                                        </span>
                                                      </div>
                                                  </MDBCardBody>
                                              </MDBLink>
                                          </MDBCard>
                                      </MDBCol>
                                </MDBRow>
                                </MDBTabPane>
                                 <MDBTabPane tabId='4'  className='mt-4 m-1'>
                                     <p className='font-weight-bold'>
                                         Доставка
                                     </p>
                                     <MDBTable>
                                         <MDBTableBody>
                                             <p className='pl-0 w-100'>Відправлення товарів відбувається одразу ж після отримання замовлення.</p>
                                             <tr>
                                                 <td><a href='#'>Самовивіз із салону ІВОН (вул. Данченко 32)</a></td>
                                                 <td className='text-green'>Безкоштовно</td>
                                             </tr>
                                             <tr>
                                                 <td><a href='https://novaposhta.ua/'>Самовивіз із НОВОЇ ПОШТИ</a></td>
                                                 <td className='text-green'>Безкоштовно</td>
                                             </tr>
                                             <tr>
                                                 <td><a href='www.ukrposhta.ua'>Самовивіз із УКРПОШТИ</a></td>
                                                 <td className='text-green'>Безкоштовно</td>
                                             </tr>
                                             <tr>
                                                 <td><a href='#'>Доставка кур'єром (м. Київ)</a></td>
                                                 <td className='text-green'>50 грн</td>
                                             </tr>
                                         </MDBTableBody>
                                     </MDBTable>
                                     <p className='font-weight-bold'>
                                         Оплата
                                     </p>
                                     <p className='pl-0'>Оплата товарів відбувається через передплату на карту Приват Банка, так і наложеним платежем</p>
                                     <div className='item-payment mb-5'>
                                         <p>
                                             <a href='https://www.privat24.ua/' className='font-weight-bold black-text'>
                                                 <span><img className='item-payment-img pr-3' src={require('../../img/shipment/privat.png')} /></span>
                                                 PRIVAT 24
                                             </a>
                                         </p>
                                         <p>
                                             <a href='https://www.visa.com.ua/uk_UA' className='font-weight-bold black-text'>
                                                 <span><img className='item-payment-img pr-3' src={require('../../img/shipment/Visa.jpg')}/></span>
                                                 VISA
                                             </a>
                                         </p>
                                         <p>
                                             <a href='https://www.mastercard.ua/uk-ua.html' className='font-weight-bold black-text'>
                                                 <span><img className='item-payment-img pr-3' src={require('../../img/shipment/MasterCard.png')} /></span>
                                                 MASTERCARD
                                             </a>
                                         </p>
                                         <p>
                                             <a href='https://www.liqpay.ua/uk' className='font-weight-bold black-text'>
                                                 <span><img className='item-payment-img pr-3' src={require('../../img/shipment/liqpay.png')} /></span>
                                                 LIQPAY
                                             </a>
                                         </p>
                                     </div>
                                     <p className='font-weight-bold'>
                                         Гарантія
                                     </p>
                                     <div>
                                         <span className='font-weight-bold'>Повернення замовлених товарів неможливе згідно із Законом України 'Про захист справ споживачів'.</span>
                                         (Відповідно до Постанови Кабінету Міністрів України від 19 березня 1994 р. № 172 "Про реалізацію окремих положень Закону України "Про захист прав споживачів", затверджено перелік товарів належної якості, що не підлягають обміну (поверненню): Парфюмерно-косметичні вироби. )
                                     </div>
                                 </MDBTabPane>
                            </MDBTabContent>
                           </div>
                        </MDBContainer>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ShopProducts;