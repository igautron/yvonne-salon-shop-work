import React from 'react';
import {Component} from 'react';
import './shopProducts.css'
import { Scrollbars } from 'react-custom-scrollbars';

import {
    MDBInput,
} from 'mdbreact';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';

import Item from './../shopProducts/ITEMS/Davines/Item/Item'

const cl = console.log

class ShopFilter extends Component  {

    constructor(props) {
      super(props);
    
      this.state = {
        types: {},
        brands: {},
        series: {},
        amount: {},

        // topbrands: {}
      };

      this.chooseTypeHandle = this.chooseTypeHandle.bind(this)
      this.chooseBrandHandle = this.chooseBrandHandle.bind(this)
      this.chooseSeriaHandle = this.chooseSeriaHandle.bind(this)
      this.chooseAmountHandle = this.chooseAmountHandle.bind(this)

      // this.chooseTopbrandsHandle = this.chooseTopbrandsHandle.bind(this)
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


    chooseBrandHandle(event) {
         const input = event.target
         let brands = {...this.state.brands}
         if (input.checked) {
             brands[input.value] = 1
         } else {
             delete brands[input.value]
         }
         this.props.setFilterBrands(brands)
         this.setState({brands})
    }

    chooseSeriaHandle(event) {
        const input = event.target
        let series = {...this.state.series}
        if (input.checked) {
            series[input.value] = 1
        } else {
            delete series[input.value]
        }
        this.props.setFilterSeries(series)
        this.setState({series})
    }

    chooseAmountHandle(event) {
        const input = event.target
        let amount = {...this.state.amount}
        if (input.checked) {
            amount[input.value] = 1
        } else {
            delete amount[input.value]
        }
        this.props.setFilterAmount(amount)
        this.setState({amount})
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
                <MDBInput name="type[]" value="alltypes" onChange={this.chooseTypeHandle} label='Усі продукти' type='checkbox' id='alltypes'  />
                </Scrollbars>
            </div>
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 font-weight-bold'>БРЕНД</p>
                <input type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                <MDBInput name="brand[]" value="farmavita" onChange={this.chooseBrandHandle} label='FarmaVita' type='checkbox' id='farmavita' />
                <MDBInput name="brand[]" value="davines" onChange={this.chooseBrandHandle} label='Davines' type='checkbox' id='davines'  />
                <MDBInput name="brand[]" value="joico" onChange={this.chooseBrandHandle} label='Joico' type='checkbox' id='joico' />
                <MDBInput name="brand[]" value="profistyle" onChange={this.chooseBrandHandle} label='ProfiStyle' type='checkbox' id='profistyle' />
                <MDBInput name="brand[]" value="felps" onChange={this.chooseBrandHandle} label='Felps' type='checkbox' id='felps' />
                <MDBInput name="brand[]" value="schwarzkopf" onChange={this.chooseBrandHandle} label='Schwarzkopf' type='checkbox' id='schwarzkopf' />
                <MDBInput name="brand[]" value="mirella" onChange={this.chooseBrandHandle} label='Mirella' type='checkbox' id='mirella' />
                <MDBInput name="brand[]" value="altrego" onChange={this.chooseBrandHandle} label='Altr Ego' type='checkbox' id='alterego' />
            </div>
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 mb-3 font-weight-bold'>ТИП ВОЛОССЯ</p>
                <MDBInput value="dry"  label='Сухе' type='checkbox' id='dry'/>
                <MDBInput value="fatter"  label='Жирне' type='checkbox' id='fatter'/>
                <MDBInput value="lamina"  label='Ламке' type='checkbox' id='lamina'/>
                <MDBInput value="clarified"  label='Освітлене' type='checkbox' id='clarified'/>
                <MDBInput value="alltypes"  label='Нормальне' type='checkbox' id='alltypes'/>
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
                <MDBInput name="seria[]" value="amethyste" onChange={this.chooseSeriaHandle} label='Amethyste' type='checkbox' id='amethyste'/>
                <MDBInput name="seria[]" value="omniplex"  onChange={this.chooseSeriaHandle} label='Omniplex' type='checkbox' id='omniplex'/>
                <MDBInput name="seria[]" value="argan"     onChange={this.chooseSeriaHandle} label='Argan sublime' type='checkbox' id='argan' />
                <MDBInput name="seria[]" value="onely"     onChange={this.chooseSeriaHandle} label='Onely' type='checkbox' id='onely' />
                <MDBInput name="seria[]" value="bioxil"    onChange={this.chooseSeriaHandle} label='Bioxil' type='checkbox' id='bioxil' />
                <MDBInput name="seria[]" value="kliss"     onChange={this.chooseSeriaHandle} label='K.Liss' type='checkbox' id='kliss' />
                <MDBInput name="seria[]" value="linea"     onChange={this.chooseSeriaHandle} label='Linea Back Bar' type='checkbox' id='linea' />
                <MDBInput name="seria[]" value="oi"        onChange={this.chooseSeriaHandle} label='OI' type='checkbox' id='oi' />
                <MDBInput name="seria[]" value="hydra"     onChange={this.chooseSeriaHandle} label='HydraSplash' type='checkbox' id='hydraSplash' />
                <MDBInput name="seria[]" value="colori"    onChange={this.chooseSeriaHandle} label='Color infuse' type='checkbox' id='colorinfuse' />
                <MDBInput name="seria[]" value="colorb"    onChange={this.chooseSeriaHandle} label='Color balance' type='checkbox' id='colorbalance' />
                <MDBInput name="seria[]" value="kpack"     onChange={this.chooseSeriaHandle} label='K-pack' type='checkbox' id='k-pack' />
                <MDBInput name="seria[]" value="style"     onChange={this.chooseSeriaHandle} label='Style & Finish' type='checkbox' id='sf' />
                <MDBInput name="seria[]" value="moisture"  onChange={this.chooseSeriaHandle} label='Moisture recovery' type='checkbox' id='moisture' />
                <MDBInput name="seria[]" value="blond"     onChange={this.chooseSeriaHandle} label='Blond life' type='checkbox' id='blondlife' />
                <MDBInput name="seria[]" value="defy"      onChange={this.chooseSeriaHandle} label='Defy Damage' type='checkbox' id='defy' />
                <MDBInput name="seria[]" value="joifull"   onChange={this.chooseSeriaHandle} label='Joifull' type='checkbox' id='joifull' />
                <MDBInput name="seria[]" value="shake"     onChange={this.chooseSeriaHandle} label='Shake series' type='checkbox' id='shake' />
                <MDBInput name="seria[]" value="tricogen"  onChange={this.chooseSeriaHandle} label='Tricogen' type='checkbox' id='tricogen' />
                <MDBInput name="seria[]" value="beeform"   onChange={this.chooseSeriaHandle} label='Bee Form' type='checkbox' id='beeform' />
                <MDBInput name="seria[]" value="blondpink" onChange={this.chooseSeriaHandle} label='Blond Pink' type='checkbox' id='blondpink' />
                <MDBInput name="seria[]" value="naturalt"  onChange={this.chooseSeriaHandle} label='NaturalTech' type='checkbox' id='naturaltech' />
                <MDBInput name="seria[]" value="essential" onChange={this.chooseSeriaHandle} label='Essential Haircare' type='checkbox' id='essential' />
                <MDBInput name="seria[]" value="antiloss"  onChange={this.chooseSeriaHandle} label='Anti-Loss' type='checkbox' id='antiloss' />
                <MDBInput name="seria[]" value="sebum"     onChange={this.chooseSeriaHandle} label='Sebum' type='checkbox' id='sebum' />
                <MDBInput name="seria[]" value="osis"      onChange={this.chooseSeriaHandle} label='Osis+' type='checkbox' id='osis' />
                </Scrollbars>
            </div>
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 font-weight-bold'>ОБСЯГ</p>
                <input type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-0 w-100 scroll'>
                <MDBInput name="amount[]" value="8" onChange={this.chooseAmountHandle}  label='8 г' type='checkbox' id='8'/>
                <MDBInput name="amount[]" value="10" onChange={this.chooseAmountHandle}  label='10 мл' type='checkbox' id='10'/>
                <MDBInput name="amount[]" value="72" onChange={this.chooseAmountHandle} label='72 мл' type='checkbox' id='72'/>
                <MDBInput name="amount[]" value="74" onChange={this.chooseAmountHandle} label='74 мл' type='checkbox' id='74'/>
                <MDBInput name="amount[]" value="100" onChange={this.chooseAmountHandle} label='100 мл' type='checkbox' id='100' />
                <MDBInput name="amount[]" value="130" onChange={this.chooseAmountHandle} label='130 мл' type='checkbox' id='130' />
                <MDBInput name="amount[]" value="150" onChange={this.chooseAmountHandle} label='150 мл' type='checkbox' id='150' />
                <MDBInput name="amount[]" value="180" onChange={this.chooseAmountHandle} label='180 мл' type='checkbox' id='180' />
                <MDBInput name="amount[]" value="200" onChange={this.chooseAmountHandle} label='200 мл' type='checkbox' id='200' />
                <MDBInput name="amount[]" value="250" onChange={this.chooseAmountHandle} label='250 мл' type='checkbox' id='250' />
                <MDBInput name="amount[]" value="280" onChange={this.chooseAmountHandle} label='280 мл' type='checkbox' id='280' />
                <MDBInput name="amount[]" value="300" onChange={this.chooseAmountHandle} label='300 мл' type='checkbox' id='300' />
                <MDBInput name="amount[]" value="1000" onChange={this.chooseAmountHandle} label='1000 мл' type='checkbox' id='1000' />
                <MDBInput name="amount[]" value="5" onChange={this.chooseAmountHandle} label='5 л' type='checkbox' id='5'/>
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