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
        appointments: {},
        seriasArray: [],
        brandsArray: [],
        price_min: 0,
        price_max: 2000,
        // topbrands: {}
      };

      this.chooseTypeHandle = this.chooseTypeHandle.bind(this)
      this.chooseBrandHandle = this.chooseBrandHandle.bind(this)
      this.chooseSeriaHandle = this.chooseSeriaHandle.bind(this)
      this.chooseAmountHandle = this.chooseAmountHandle.bind(this)
      this.chooseGenderHandle = this.chooseGenderHandle.bind(this)
      this.chooseAppointmentHandler = this.chooseAppointmentHandler.bind(this)


      // this.chooseTopbrandsHandle = this.chooseTopbrandsHandle.bind(this)

      this.genders = {
        men: false,
        women: false
      }
    }

    seriasArray = [
        {slug: "amethyste"   , label:'Amethyste'        },
        {slug: "omniplex"    , label:'Omniplex'         },
        {slug: "argan"       , label:'Argan sublime'    },
        {slug: "onely"       , label:'Onely'            },
        {slug: "bioxil"      , label:'Bioxil'           },
        {slug: "kliss"       , label:'K.Liss'           },
        {slug: "linea"       , label:'Linea Back Bar'   },
        {slug: "oi"          , label:'OI'               },
        {slug: "hydra"       , label:'HydraSplash'      },
        {slug: "colorinfuse" , label:'Color infuse'     },
        {slug: "colorbalance", label:'Color balance'    },
        {slug: "kpack"       , label:'K-pack'           },
        {slug: "style"       , label:'Style & Finish'   },
        {slug: "moisture"    , label:'Moisture recovery'},
        {slug: "blond"       , label:'Blond life'       },
        {slug: "defy"        , label:'Defy Damage'      },
        {slug: "joifull"     , label:'Joifull'          },
        {slug: "shake"       , label:'Shake series'     },
        {slug: "tricogen"    , label:'Tricogen'         },
        {slug: "beeform"     , label:'Bee Form'         },
        {slug: "blondpink"   , label:'Blond Pink'       },
        {slug: "naturalt"    , label:'NaturalTech'      },
        {slug: "essential"   , label:'Essential Haircare'},
        {slug: "antiloss"    , label:'Anti-Loss'        },
        {slug: "sebum"       , label:'Sebum'            },
        {slug: "osis"        , label:'Osis+'            },
    ]

    brandsArray = [
        {slug:"farmavita"  , label:'FarmaVita'  },
        {slug:"davines"    , label:'Davines'    },
        {slug:"joico"      , label:'Joico'      },
        {slug:"profistyle" , label:'ProfiStyle' },
        {slug:"felps"      , label:'Felps'      },
        {slug:"schwarzkopf", label:'Schwarzkopf'},
        {slug:"mirella"    , label:'Mirella'    },
        {slug:"altrego"    , label:'Altr Ego'   },
    ]

    componentDidMount(props) {
        this.setState({brandsArray:this.brandsArray, seriasArray:this.seriasArray})
    }

    chooseAppointmentHandler(event){
        let choosenValue = event.target.value
        let appointments = {...this.state.appointments}
        if (event.target.checked) {
            appointments[choosenValue]= 1
        }else{
            delete appointments[choosenValue]
        }
        cl(appointments)
        this.props.setFilterAppoinrments(appointments)
        this.setState({appointments})
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



    chooseGenderHandle(event){
        let gender = event.target.value
        this.genders[gender] = event.target.checked
        cl(this.genders)
        if (this.genders.men && !this.genders.women) {
            return this.props.setFilterGender('men')
        }
        if (!this.genders.men && this.genders.women) {
            return this.props.setFilterGender('women')
        }
        return this.props.setFilterGender('all') // men, women, all
    }

    volumeInputChange = (e) => {
        const word = e.target.value.toLowerCase()
        let seriasArray = this.seriasArray.filter((elem) => {
            return (elem.slug.toLowerCase().indexOf(word) != -1 || elem.label.toLowerCase().indexOf(word) != -1);
        })
        this.setState({seriasArray})
    }

    brandInputChange = (e) => {
        const word = e.target.value.toLowerCase()
        let brandsArray = this.brandsArray.filter((elem) => {
            return (elem.slug.toLowerCase().indexOf(word) != -1 || elem.label.toLowerCase().indexOf(word) != -1);
        })
        this.setState({brandsArray})
    }

    minPriceChange = (e) => {
        this.setState({price_min: parseInt(e.target.value)})
        this.props.setFilterPrice('min', parseInt(e.target.value))
    }

    maxPriceChange = (e) => {
        this.setState({price_max: parseInt(e.target.value)})
        this.props.setFilterPrice('max', parseInt(e.target.value))     
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
                <input onChange={this.brandInputChange} type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                {this.state.brandsArray.map((brand) => (
                    <MDBInput key={brand.slug} value={brand.slug} onChange={this.chooseBrandHandle} label={brand.label} type='checkbox' id={brand.slug}/>
                ))}
                </Scrollbars>
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
                    <MDBInput label='Оздоровлення' type='checkbox'           onChange={this.chooseAppointmentHandler} value='healt'          id='appo_healt'         />
                    <MDBInput label='Салонний догляд' type='checkbox'        onChange={this.chooseAppointmentHandler} value='salon'          id='appo_salon'         />
                    <MDBInput label='Реконструкція' type='checkbox'          onChange={this.chooseAppointmentHandler} value='reconstruction' id='appo_reconstruction'/>
                    <MDBInput label='Захист' type='checkbox'                 onChange={this.chooseAppointmentHandler} value='protection'     id='appo_protection'    />
                    <MDBInput label='Фарбування' type='checkbox'             onChange={this.chooseAppointmentHandler} value='coloring'       id='appo_coloring'      />
                    <MDBInput label='Випрямлення' type='checkbox'            onChange={this.chooseAppointmentHandler} value='stratening'     id='appo_stratening'    />
                    <MDBInput label='Натуральне' type='checkbox'             onChange={this.chooseAppointmentHandler} value='natural'        id='appo_natural'       />
                    <MDBInput label='Для кучер' type='checkbox'              onChange={this.chooseAppointmentHandler} value='curl'           id='appo_curl'          />
                    <MDBInput label='Для шкіри голови' type='checkbox'       onChange={this.chooseAppointmentHandler} value='skin'           id='appo_skin'          />
                    <MDBInput label='Нейтралізація жовтизни' type='checkbox' onChange={this.chooseAppointmentHandler} value='yellow'         id='appo_yellow'        />
                    <MDBInput label='Обєм' type='checkbox'                   onChange={this.chooseAppointmentHandler} value='volume'         id='appo_volume'        />
                    <MDBInput label='Себо' type='checkbox'                   onChange={this.chooseAppointmentHandler} value='sebo'           id='appo_sebo'          />
                    <MDBInput label='Проти лупи' type='checkbox'             onChange={this.chooseAppointmentHandler} value='lupa'           id='appo_lupa'          />
                    <MDBInput label='Проти випадіння' type='checkbox'        onChange={this.chooseAppointmentHandler} value='loss'           id='appo_loss'          />
                </Scrollbars>
            </div>
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 mb-3 font-weight-bold'>КАТЕГОРІЯ</p>
                <MDBInput onChange={this.chooseGenderHandle} value="women" label='Для жінок' type='checkbox' id='woman' />
                <MDBInput onChange={this.chooseGenderHandle} value="men" label='Для чоловіків' type='checkbox' id='man'/>
            </div>
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 font-weight-bold'>СЕРІЯ</p>
                <input onChange={this.volumeInputChange} type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-5 w-100 scroll'>
                    {this.state.seriasArray.map((seria) => (
                        <MDBInput key={seria.slug} value={seria.slug} onChange={this.chooseSeriaHandle} label={seria.label} type='checkbox' id={seria.slug}/>
                    ))}
                </Scrollbars>
            </div>
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 font-weight-bold'>ОБСЯГ</p>
                <input type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-0 w-100 scroll'>
                <MDBInput name="amount[]" value="8g"     onChange={this.chooseAmountHandle}  label='8 г' type='checkbox' id='8'/>
                <MDBInput name="amount[]" value="10ml"   onChange={this.chooseAmountHandle}  label='10 мл' type='checkbox' id='10'/>
                <MDBInput name="amount[]" value="72ml"   onChange={this.chooseAmountHandle} label='72 мл' type='checkbox' id='72'/>
                <MDBInput name="amount[]" value="74ml"   onChange={this.chooseAmountHandle} label='74 мл' type='checkbox' id='74'/>
                <MDBInput name="amount[]" value="100ml"  onChange={this.chooseAmountHandle} label='100 мл' type='checkbox' id='100' />
                <MDBInput name="amount[]" value="130ml"  onChange={this.chooseAmountHandle} label='130 мл' type='checkbox' id='130' />
                <MDBInput name="amount[]" value="150ml"  onChange={this.chooseAmountHandle} label='150 мл' type='checkbox' id='150' />
                <MDBInput name="amount[]" value="180ml"  onChange={this.chooseAmountHandle} label='180 мл' type='checkbox' id='180' />
                <MDBInput name="amount[]" value="200ml"  onChange={this.chooseAmountHandle} label='200 мл' type='checkbox' id='200' />
                <MDBInput name="amount[]" value="250ml"  onChange={this.chooseAmountHandle} label='250 мл' type='checkbox' id='250' />
                <MDBInput name="amount[]" value="280ml"  onChange={this.chooseAmountHandle} label='280 мл' type='checkbox' id='280' />
                <MDBInput name="amount[]" value="300ml"  onChange={this.chooseAmountHandle} label='300 мл' type='checkbox' id='300' />
                <MDBInput name="amount[]" value="1000ml" onChange={this.chooseAmountHandle} label='1000 мл' type='checkbox' id='1000' />
                <MDBInput name="amount[]" value="5l"     onChange={this.chooseAmountHandle} label='5 л' type='checkbox' id='5'/>
                </Scrollbars>
            </div>
            <div className='mb-5'>
                <p className='m-2 mb-3 font-weight-bold'>ЦІНА</p>
                <div className='d-flex'>
                    <form className='multi-range-field w-50 w-auto'>
                        <p>from:{this.state.price_min} to {this.state.price_max}</p>
                        <input onChange={this.minPriceChange} id='min' value={this.state.price_min} type='number'></input>
                        <input onChange={this.maxPriceChange} id='max' value={this.state.price_max} type='number'></input>
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default ShopFilter;