import React from 'react';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import ShopNav from '../src/Components/shopNav/shopNav'
import ShopSlider from '../src/Components/shopSlider/shopSlider'
import ShopBrands from '../src/Components/shopBrands/shopBrands'
import ShopProducts from '../src/Components/shopProducts/shopProducts'
import ShopFooter from '../src/Components/shopFooter/shopFooter'

import ShopAboutShop from '../src/Components/shopNav/shopAboutShop/shopAboutShop';
import ShopContacts from '../src/Components/shopNav/shopContacts/shopContacts';
import ShopCertification from './Components/shopNav/shopCertification/shopCertification'



import ShopAutorization from '../src/Backend/shopAutorization/shopAutorization';
import ShopRegistration from '../src/Backend/shopRegistration/shopRegistration';
import ShopAccount from './Backend/shopAccount/shopAccount';
// import ShopLike from '../src/Backend/shopLike/shopLike';
import ShopOrder from '../src/Backend/shopOrder/shopOrder';
import Congratulation from './Backend/shopOrder/CARD/Congratulation';

import ShopMobileUpload from '../src/Backend/shopMobileUpload/shopMobileUpload';
// import ShopCallMe from '../src/Backend/shopCallMe/shopCallMe';


import Details from './Components/shopProducts/ITEMS/Davines/Item/Details';


import {Component} from 'react';


class App extends Component  {


    state = {
        isAutorized: false,
        token: '',
        user: {}
    }
    
    render(){
        return (
            <Router>
                <ShopNav appState={this.state} appSetState={this.setState} />
                <ShopSlider />
                <ShopAccount />
                <Switch>
                    <Route path='/' exact>
                        <ShopProducts />
                    </Route>
                    <Route path='/shopAboutShop'>
                        <ShopAboutShop />
                    </Route>
                    <Route path='/shopContacts'>
                        <ShopContacts />
                    </Route>
                    <Route path='/shopOrder'>
                        <ShopOrder />
                    </Route>
                    <Route path='/congratulation'>
                        <Congratulation />
                    </Route>
                    <Route path='/shopCertification'>
                        <ShopCertification />
                    </Route>
                    <Route path='/shopAutorization'>
                        <ShopAutorization />
                    </Route>
                    <Route path='/shopRegistration'>
                        <ShopRegistration />
                    </Route>
                    <Route path='/shopMobileUpload'>
                       <ShopMobileUpload />
                    </Route>
                    <Route path='/details/:id'>
                        <Details />
                    </Route>
                    <Route path='/category/:category'>
                        <ShopProducts />
                    </Route>
                    <Route path='/brand/:brand'>
                        <ShopProducts />
                    </Route>
                </Switch>
                <ShopFooter />
                {/*<ShopAccount />*/}
            </Router>
      );
    }
}

export default App;
