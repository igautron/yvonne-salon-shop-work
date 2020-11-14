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

const cl = console.log

class ShopFilter extends Component  {

    constructor(props) {
      super(props);
    
      this.state = {
        types: {}
      };

      this.chooseTypeHandle = this.chooseTypeHandle.bind(this)
    }

    componentDidMount(props) {

    }

    chooseTypeHandle(event){
        const input = event.target // html input
        let types = {...this.state.types}
        if (input.checked) {
            types[input.value] = 1
        }else{
            delete types[input.value]
        }
        // cl(types)
        this.props.setFilterTypes(types)
        this.setState({types})
    }

    render() {
        return (
    <div className='shop-filters h-100  left w-25 w-responsive ml-2'>
        <h5 className='font-weight-bold pt-4 pl-3 pb-4' >Фільтри</h5>
        <div className='shop-filters-prod filter filter-basic'>
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 mb-3 font-weight-bold'>ВИД ПРОДУКЦІЇ</p>
                <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                <MDBInput name="type[]" value="shampoo" onChange={this.chooseTypeHandle} label='Шампунь' type='checkbox' id='shampoo'  />
                <MDBInput name="type[]" value="conditioner" onChange={this.chooseTypeHandle} label='Кондиціонер' type='checkbox' id='conditioner'/>
                <MDBInput name="type[]" value="mask" onChange={this.chooseTypeHandle} label='Маска' type='checkbox' id='mask' />
                <MDBInput name="type[]" value="ampule" onChange={this.chooseTypeHandle} label='Ампули' type='checkbox' id='ampule'/>
                <MDBInput name="type[]" value="milk" onChange={this.chooseTypeHandle} label='Молочко' type='checkbox' id='milk' />
                <MDBInput name="type[]" value="lotions" onChange={this.chooseTypeHandle} label='Лосьйон' type='checkbox' id='lotions'/>
                <MDBInput name="type[]" value="elixir" onChange={this.chooseTypeHandle} label='Еліксир' type='checkbox' id='elixir' />
                <MDBInput name="type[]" value="spray" onChange={this.chooseTypeHandle} label='Спрей' type='checkbox' id='spray' />
                <MDBInput name="type[]" value="coloring" onChange={this.chooseTypeHandle} label='Колорінг' type='checkbox' id='coloring' />
                <MDBInput name="type[]" value="styling" onChange={this.chooseTypeHandle} label='Стайлінг' type='checkbox' id='styling' />
                <MDBInput name="type[]" value="protection" onChange={this.chooseTypeHandle} label='Захист' type='checkbox' id='protection' />
                <MDBInput name="type[]" value="cream" onChange={this.chooseTypeHandle} label='Крем для волосся' type='checkbox' id='cream' />
                <MDBInput name="type[]" value="oil" onChange={this.chooseTypeHandle} label='Олія' type='checkbox' id='oil' />
                <MDBInput name="type[]" value="kit" onChange={this.chooseTypeHandle} label='Набір' type='checkbox' id='kit' />
                <MDBInput name="type[]" value="veil" onChange={this.chooseTypeHandle} label='Гель-вуаль' type='checkbox' id='veil' />
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
        )
    }
}

export default ShopFilter;