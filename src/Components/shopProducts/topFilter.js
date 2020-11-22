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

class TopFilter extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            collapseID: '',
            value: 0,
            items: {
                default: '1',
            },
            products: [],
            // filterTop:{},
            // top:{}

        }


        // this.setFilterTop = this.setFilterTop.bind(this)
    }





    // setFilterTop(top) {
    //     this.filter.top = top
    //     this.doAjax()
    // }

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


    // chooseTopHandle(event) {
    //     const input = event.target
    //     let top = {...this.state.top}
    //     if (button.clicked) {
    //         top[input.value] = 1
    //     } else {
    //         delete top[input.value]
    //     }
    //     this.props.setFilterTop(top)
    //     this.setState({top})
    // }



    // componentDidMount(props) {
    //     fetch('http://yvonne-server.loc/products')
    //         .then(response => response.json())
    //         .then(data => this.setState({products: data.products}));
    // }



    render() {
        return (
            <div>
                    <div className='d-inline-flex w-100'>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5 ' color='#fce4ec'>
                                <MDBLink className='p-0 text-center active' >
                                        <button  className='border-0 h-100 w-100 bg-transparent pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5'>
                                            <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>ШАМПУНІ</span>
                                        </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5' color='#fce4ec'>
                                <MDBLink className='p-0 text-center' >
                                    <button className='border-0 h-100 w-100 bg-transparent pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5'>
                                        <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>КОНДИЦІОНЕРИ</span>
                                    </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5' color='#fce4ec'>
                                <MDBLink className='p-0 text-center' >
                                    <button className='border-0 h-100 w-100 bg-transparent pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5'>
                                        <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>МАСКИ</span>
                                    </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5' color='#fce4ec'>
                                <MDBLink className='p-0 text-center' >
                                    <button className='border-0 h-100 w-100 bg-transparent pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5'>
                                        <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>СТАЙЛІНГИ</span>
                                    </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5' color='#fce4ec'>
                                <MDBLink className='p-0 text-center' >
                                    <button className='border-0 h-100 w-100 bg-transparent pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5'>
                                        <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>ОЛІЇ</span>
                                    </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5' color='#fce4ec'>
                                <MDBLink className='p-0 text-center' >
                                    <button className='border-0 h-100 w-100 bg-transparent pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5'>
                                        <span className='text-span mt-3 black-text font-weight-bold shop-prod-item'>ЗАХИСТ</span>
                                    </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                    </div>
                </div>
        )
    }
}

export default TopFilter;