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
                            <MDBDropdownToggle  color='secondary' className='caret shop-brands-item m-0 w-100 pl-1 pr-1'>
                                FarmaVita
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary'>
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
                                Davines
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary'>
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
                                Joico
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary'>
                                <MDBDropdownItem>Defy Damage</MDBDropdownItem>
                                <MDBDropdownItem>Blond Life</MDBDropdownItem>
                                <MDBDropdownItem>Joifull</MDBDropdownItem>
                                <MDBDropdownItem>Hydrasplash</MDBDropdownItem>
                                <MDBDropdownItem>Color Balance</MDBDropdownItem>
                                <MDBDropdownItem>K-Pak</MDBDropdownItem>
                                <MDBDropdownItem>K-Pak Color Therapy</MDBDropdownItem>
                                <MDBDropdownItem>Shake Series</MDBDropdownItem>
                                <MDBDropdownItem>Style & Finish</MDBDropdownItem>
                                <MDBDropdownItem>Moisture Recovery</MDBDropdownItem>
                                <MDBDropdownItem>Color Infuse Red</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <MDBDropdown className='m-0 col-2 p-0'>
                            <MDBDropdownToggle caret color='secondary' className='shop-brands-item m-0 w-100 pl-1 pr-1'>
                                ProfyStyle
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary'>
                                <MDBDropdownItem>Repair</MDBDropdownItem>
                                <MDBDropdownItem>Argan</MDBDropdownItem>
                                <MDBDropdownItem>Color</MDBDropdownItem>
                                <MDBDropdownItem>Volume</MDBDropdownItem>
                                <MDBDropdownItem>Curl</MDBDropdownItem>
                                <MDBDropdownItem>Hydro</MDBDropdownItem>
                                <MDBDropdownItem>Blond</MDBDropdownItem>
                                <MDBDropdownItem>Anti-yellow</MDBDropdownItem>
                                <MDBDropdownItem>Smooth</MDBDropdownItem>
                                <MDBDropdownItem>Sebum</MDBDropdownItem>
                                <MDBDropdownItem>Anti-loss</MDBDropdownItem>
                                <MDBDropdownItem>Anti-dandruf</MDBDropdownItem>
                                <MDBDropdownItem>Vikiplex</MDBDropdownItem>
                                <MDBDropdownItem>Detox</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <MDBDropdown className='col-2 p-0'>
                            <MDBDropdownToggle caret color='secondary' className='shop-brands-item m-0 w-100 pl-1 pr-1'>
                                Felps
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary'>
                                <MDBDropdownItem></MDBDropdownItem>
                                <MDBDropdownItem></MDBDropdownItem>
                                <MDBDropdownItem></MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <MDBDropdown className='col-2 p-0'>
                            <MDBDropdownToggle caret color='secondary' className='shop-brands-item m-0 w-100 pl-1 pr-1'>
                                Schwarzkopf
                            </MDBDropdownToggle>
                            <MDBDropdownMenu color='secondary'>
                                <MDBDropdownItem></MDBDropdownItem>
                                <MDBDropdownItem></MDBDropdownItem>
                                <MDBDropdownItem></MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                </div>
        )
    }
}

export default ShopBrands;