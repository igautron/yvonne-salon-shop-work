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
        hairtype: {},
        seriasArray: [],
        brandsArray: [],
        amountArray: [],
        hairtypeArray: [],
        appArray: [],
        typeArray: [],
        price_min: 0,
        price_max: 2000,
        inputs: {
            brands:{
                davines:false
            }
        }
        // topbrands: {}
      };

      this.chooseTypeHandle = this.chooseTypeHandle.bind(this)
      this.chooseBrandHandle = this.chooseBrandHandle.bind(this)
      this.chooseSeriaHandle = this.chooseSeriaHandle.bind(this)
      this.chooseAmountHandle = this.chooseAmountHandle.bind(this)
      this.chooseGenderHandle = this.chooseGenderHandle.bind(this)
      this.chooseAppointmentHandler = this.chooseAppointmentHandler.bind(this)
      this.chooseHairtypeHandle = this.chooseHairtypeHandle.bind(this)


      // this.chooseTopbrandsHandle = this.chooseTopbrandsHandle.bind(this)

      this.genders = {
        men: false,
        women: false
      }
    }


      isInputChecked = (filter_block, filter_input) => {
        if (this.state.inputs && this.state.inputs[filter_block] && this.state.inputs[filter_block][filter_input]) {
            // true
        }
        return false
      }
      
    seriasArray = [
        {slug: 'amethyste'   , label:'Amethyste'        },
        {slug: 'omniplex'    , label:'Omniplex'         },
        {slug: 'argan'       , label:'Argan sublime'    },
        {slug: 'onely'       , label:'Onely'            },
        {slug: 'bioxil'      , label:'Bioxil'           },
        {slug: 'kliss'       , label:'K.Liss'           },
        {slug: 'linea'       , label:'Linea Back Bar'   },
        {slug: 'oi'          , label:'OI'               },
        {slug: 'hydra'       , label:'HydraSplash'      },
        {slug: 'colorinfuse' , label:'Color infuse'     },
        {slug: 'colorbalance', label:'Color balance'    },
        {slug: 'kpack'       , label:'K-pack'           },
        {slug: 'style'       , label:'Style & Finish'   },
        {slug: 'moisture'    , label:'Moisture recovery'},
        {slug: 'blond'       , label:'Blond life'       },
        {slug: 'defy'        , label:'Defy Damage'      },
        {slug: 'joifull'     , label:'Joifull'          },
        {slug: 'shake'       , label:'Shake series'     },
        {slug: 'tricogen'    , label:'Tricogen'         },
        {slug: 'beeform'     , label:'Bee Form'         },
        {slug: 'blondpink'   , label:'Blond Pink'       },
        {slug: 'naturalt'    , label:'NaturalTech'      },
        {slug: 'essential'   , label:'Essential Haircare'},
        {slug: 'antiloss'    , label:'Anti-Loss'        },
        {slug: 'sebum'       , label:'Sebum'            },
        {slug: 'osis'        , label:'Osis+'            },
    ]

    brandsArray = [
        {slug:'farmavita'  , label:'FarmaVita'  },
        {slug:'davines'    , label:'Davines'    },
        {slug:'joico'      , label:'Joico'      },
        {slug:'profistyle' , label:'ProfiStyle' },
        {slug:'felps'      , label:'Felps'      },
        {slug:'schwarzkopf', label:'Schwarzkopf'},
        {slug:'mirella'    , label:'Mirella'    },
        {slug:'altrego'    , label:'Altr Ego'   },
        {slug:'choice'    , label:'Choice'      },
    ]

    amountArray = [
        {slug:'8g'     , label:'8 г' },
        {slug:'10ml'   , label:'10 мл' },
        {slug:'72ml'   , label:'72 мл' },
        {slug:'74ml'   , label:'74 мл' },
        {slug:'100ml'  , label:'100 мл' },
        {slug:'130ml'  , label:'130 мл' },
        {slug:'150ml'  , label:'150 мл' },
        {slug:'180ml'  , label:'180 мл' },
        {slug:'200ml'  , label:'200 мл' },
        {slug:'250ml'  , label:'250 мл' },
        {slug:'280ml'  , label:'280 мл' },
        {slug:'300ml'  , label:'300 мл' },
        {slug:'1000ml' , label:'1000 мл' },
        {slug:'5l'     , label:'5 л' }
    ]

    typeArray = [
            {slug:'shampoo'       , label:'Шампунь' },
            {slug:'conditioner'   , label:'Кондиціонер' },
            {slug:'mask'          , label:'Маска' },
            {slug:'ampule'        , label:'Ампули' },
            {slug:'milk'          , label:'Молочко' },
            {slug:'lotions'       , label:'Лосьйон' },
            {slug:'elixir'        , label:'Еліксир' },
            {slug:'spray'         , label:'Спрей' },
            {slug:'coloring'      , label:'Колорінг' },
            {slug:'styling'       , label:'Стайлінг' },
            {slug:'protection'    , label:'Захист' },
            {slug:'cream'         , label:'Крем для волосся' },
            {slug:'oil'           , label:'Олія' },
            {slug:'kit'           , label:'Набір' },
            {slug:'veil'          , label:'Гель-вуаль' }
        ]

     appArray = [
         {slug: 'health',            label: 'Оздоровлення'},
         {slug: 'salon',             label: 'Салонний догляд'},
         {slug: 'reconstruction',    label: 'Реконструкція'},
         {slug: 'protection',        label: 'Термозахист'},
         {slug: 'coloring',          label: 'Для пофарбованого'},
         {slug: 'stratening',        label: 'Випрямлення'},
         {slug: 'natural',           label: 'Натуральні'},
         {slug: 'curl',              label: 'Для кучер'},
         {slug: 'skin',              label: 'Для шкіри голови'},
         {slug: 'yellow',            label: 'Нейтралізація жовтизни'},
         {slug: 'volume',            label: 'Для об`єму'},
         {slug: 'sebo',              label: 'Себорегуляція'},
         {slug: 'lupa',              label: 'Проти лупи'},
         {slug: 'loss',              label: 'Проти випадіння'}

         ]


    hairtypeArray = [
        {slug: 'dry',                label: 'Сухе'},
        {slug: 'fatter',             label: 'Жирне'},
        {slug: 'lamina',             label: 'Ламке'},
        {slug: 'clarified',          label: 'Освітлене'},
        {slug: 'alltypes',           label: 'Нормальне'}
    ]


    brandsSeries = {
        'davines': [
            {slug:'oi',       label: 'Oi'},
            {slug:'naturalt', label: 'Natural Tech'},
            {slug:'Momo',     label: 'Momo'},
            {slug:'Minu',     label: 'Minu'},
            {slug:'Melu',     label: 'Melu'},
            {slug:'NouNou',   label: 'NouNou'}
        ]
    }



    componentDidMount(props) {
        this.setState({
            brandsArray:this.brandsArray,
            seriasArray:this.seriasArray,
            amountArray:this.amountArray,
            typeArray:this.typeArray,
            appArray:this.appArray,
            hairtypeArray:this.hairtypeArray
        })
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
// cl(input)
// cl(this.brandsSeries[input.value])
        this.setState({ seriasArray:this.brandsSeries[input.value] })

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

    chooseHairtypeHandle(event) {
        let input = event.target
        let hairtype = {...this.state.hairtype}
        if(input.checked) {
            hairtype[input.value] = 1
        } else {
            delete hairtype[input.value]
        }
        cl(hairtype)
        this.props.setFilterHairtype(hairtype)
        this.setState({hairtype})
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

    amountInputChange = (e) => {
        const word = e.target.value.toLowerCase()
        let amountArray = this.amountArray.filter((elem) => {
            return(elem.slug.toLowerCase().indexOf(word) != -1 || elem.label.toLowerCase().indexOf(word) != -1);
        })
        this.setState({amountArray})
    }

    typeInputChange = (e) => {
        const word = e.target.value.toLowerCase()
        let typeArray = this.typeArray.filter((elem) => {
            return(elem.slug.toLowerCase().indexOf(word) != -1 || elem.label.toLowerCase().indexOf(word) != -1);
        })
        this.setState({typeArray})
    }

    appInputChange = (e) => {
        const word = e.target.value.toLowerCase()
        let appArray = this.appArray.filter((elem) => {
            return(elem.slug.toLowerCase().indexOf(word) != -1 || elem.label.toLowerCase().indexOf(word) != -1);
        })
        this.setState({appArray})
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
                <input onChange={this.typeInputChange} type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                    {this.state.typeArray.map((type) => (
                        <MDBInput key={type.slug} value={type.slug} onChange={this.chooseTypeHandle} label={type.label} type='checkbox' id={type.slug}/>
                    ))}
                </Scrollbars>
            </div>
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 font-weight-bold'>БРЕНД</p>
                <input onChange={this.brandInputChange} type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                {this.state.brandsArray.map((brand) => (
                    <MDBInput key={brand.slug} value={brand.slug} onChange={this.chooseBrandHandle} label={brand.label} type='checkbox' id={brand.slug} checked={this.isInputChecked('brands',brand.slug)}/>
                ))}
                </Scrollbars>
            </div>
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 mb-3 font-weight-bold'>ТИП ВОЛОССЯ</p>
                {this.state.hairtypeArray.map((hairtype) => (
                <MDBInput key={hairtype.slug} value={hairtype.slug} onChange={this.chooseHairtypeHandle}  label={hairtype.label} type='checkbox' id={hairtype.slug}/>
                ))}
            </div>
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 mb-3 font-weight-bold'>ПРИЗНАЧЕННЯ</p>
                <input onChange={this.appInputChange} type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                    {this.state.appArray.map((app) => (
                        <MDBInput key={app.slug} value={app.slug} onChange={this.chooseAppointmentHandler} label={app.label} type='checkbox' id={app.slug}/>
                    ))}
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
                <input onChange={this.amountInputChange} type='text' id='example3' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-0 w-100 scroll'>
                    {this.state.amountArray.map((amount) => (
                        <MDBInput key={amount.slug} value={amount.slug} onChange={this.chooseAmountHandle}  label={amount.label} type='checkbox' id={amount.slug}/>
                    ))}
                </Scrollbars>
            </div>
            <div className='mb-5'>
                <p className='m-2 mb-3 font-weight-bold'>ЦІНА</p>
                <div className='d-flex'>
                    <form className='multi-range-field w-50 w-auto d-inline-flex m-2 '>
                        <input className='w-25' onChange={this.minPriceChange} id='min' value={this.state.price_min} type='number' placeholder="Від"></input>
                        <p className='px-3 mt-2 mb-0'> — </p>
                        <input className='w-25' onChange={this.maxPriceChange} id='max' value={this.state.price_max} type='number' placeholder="До"></input>
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default ShopFilter;