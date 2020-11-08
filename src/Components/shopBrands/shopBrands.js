import React from 'react';
import {Component} from 'react';
import './shopBrands.css'
import {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdbreact';

import $ from 'jquery'

$(document).ready(function() {
    $(window).resize(function() {
        var widthWindow = $(window).width();
        if(widthWindow < 992)
            $('#sb').removeClass('container');
        else(
            $('#sb').addClass('container')
        )
    })
})


class ShopBrands extends Component  {

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
                <div id='sb' className='container shop-brand w-100'>
                    <div className='shop-nav-brand w-100 d-inline-flex'>
                        <MDBDropdown className='m-0 col-2 p-0'>
                            <MDBDropdownToggle caret color='secondary' className='shop-brands-item m-0 w-100 pl-1 pr-1'>
                                FarmaVita
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary' basic>
                                <MDBDropdownItem>Amethyste</MDBDropdownItem>
                                <MDBDropdownItem>Argan Sublime</MDBDropdownItem>
                                <MDBDropdownItem>Back.bar</MDBDropdownItem>
                                <MDBDropdownItem>HD Life Style</MDBDropdownItem>
                                <MDBDropdownItem>Life Color Plus</MDBDropdownItem>
                                <MDBDropdownItem>Amaro</MDBDropdownItem>
                                <MDBDropdownItem>Bioxil</MDBDropdownItem>
                                <MDBDropdownItem>Tricogen Lotion</MDBDropdownItem>
                                <MDBDropdownItem>K.Liss</MDBDropdownItem>
                                <MDBDropdownItem>Onely</MDBDropdownItem>
                                <MDBDropdownItem>B.Life Color</MDBDropdownItem>
                                <MDBDropdownItem>Purify</MDBDropdownItem>
                                <MDBDropdownItem>Hydro Repair</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <MDBDropdown className='m-0 col-2 p-0'>
                            <MDBDropdownToggle caret color='secondary' className='shop-brands-item m-0 w-100 pl-1 pr-1'>
                                Mirella
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='purple' basic>
                                <MDBDropdownItem>BeeForm</MDBDropdownItem>
                                <MDBDropdownItem>Blond</MDBDropdownItem>
                                <MDBDropdownItem>Massimo</MDBDropdownItem>
                                <MDBDropdownItem>HairCare</MDBDropdownItem>
                                <MDBDropdownItem>Professional</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <MDBDropdown className='m-0 col-2 p-0'>
                            <MDBDropdownToggle caret color='secondary' className='shop-brands-item m-0 w-100 pl-1 pr-1'>
                                ProfiStyle
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary' basic>
                                <MDBDropdownItem>Anti-Loss</MDBDropdownItem>
                                <MDBDropdownItem>Anti-Yellow</MDBDropdownItem>
                                <MDBDropdownItem>Blond</MDBDropdownItem>
                                <MDBDropdownItem>Men's Style</MDBDropdownItem>
                                <MDBDropdownItem>Sebum</MDBDropdownItem>
                                <MDBDropdownItem>Smooth & Shine</MDBDropdownItem>
                                <MDBDropdownItem>Volume</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <MDBDropdown className='m-0 col-2 p-0'>
                            <MDBDropdownToggle caret color='secondary' className='shop-brands-item m-0 w-100 pl-1 pr-1'>
                                Davines
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary' basic>
                                <MDBDropdownItem>Oi</MDBDropdownItem>
                                <MDBDropdownItem>Natural Tech</MDBDropdownItem>
                                <MDBDropdownItem>Momo</MDBDropdownItem>
                                <MDBDropdownItem>Minu</MDBDropdownItem>
                                <MDBDropdownItem>Melu</MDBDropdownItem>
                                <MDBDropdownItem>NouNou</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <MDBDropdown className='m-0 col-2 p-0'>
                            <MDBDropdownToggle caret color='secondary' className='shop-brands-item m-0 w-100 pl-1 pr-1'>
                                Barba Italiana
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary' basic>
                                <MDBDropdownItem></MDBDropdownItem>
                                <MDBDropdownItem>Enea</MDBDropdownItem>
                                <MDBDropdownItem>Primitivo</MDBDropdownItem>
                                <MDBDropdownItem>Leonardo</MDBDropdownItem>
                                <MDBDropdownItem>Insolia</MDBDropdownItem>
                                <MDBDropdownItem>Caronte</MDBDropdownItem>
                                <MDBDropdownItem>Raffaello</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <MDBDropdown className='col-2 p-0'>
                            <MDBDropdownToggle caret color='secondary' className='shop-brands-item m-0 w-100 pl-1 pr-1'>
                                Choice
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary' basic>
                                <MDBDropdownItem>White Mandarin</MDBDropdownItem>
                                <MDBDropdownItem>Green Max</MDBDropdownItem>
                                <MDBDropdownItem>Добра Їжа</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                </div>
        )
    }
}

export default ShopBrands;