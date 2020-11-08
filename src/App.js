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
import ShopBin from '../src/Backend/shopBin/shopBin';
// import ShopLike from '../src/Backend/shopLike/shopLike';
import ShopOrder from '../src/Backend/shopOrder/shopOrder';
import Congratulation from './Backend/shopOrder/CARD/Congratulation';

import ShopMobileUpload from '../src/Backend/shopMobileUpload/shopMobileUpload';
// import ShopCallMe from '../src/Backend/shopCallMe/shopCallMe';

import Routes from './Routes'

import Details1 from '../src/Components/shopProducts/ITEMS/Davines/Item1/Details1'
import Details2 from '../src/Components/shopProducts/ITEMS/Davines/Item2/Details2'
import Details3 from '../src/Components/shopProducts/ITEMS/Davines/Item3/Details3'
import Details4 from '../src/Components/shopProducts/ITEMS/Davines/Item4/Details4'
import Details5 from '../src/Components/shopProducts/ITEMS/Davines/Item5/Details5'
import Details6 from '../src/Components/shopProducts/ITEMS/Davines/Item6/Details6'
import Details7 from '../src/Components/shopProducts/ITEMS/Davines/Item7/Details7'
import Details8 from '../src/Components/shopProducts/ITEMS/Davines/Item8/Details8'
import Details9 from '../src/Components/shopProducts/ITEMS/Davines/Item9/Details9'
import Details10 from '../src/Components/shopProducts/ITEMS/Davines/Item10/Details10'
import Details11 from '../src/Components/shopProducts/ITEMS/Davines/Item11/Details11'
import Details13 from '../src/Components/shopProducts/ITEMS/Davines/Item13/Details13'
import Details14 from '../src/Components/shopProducts/ITEMS/Davines/Item14/Details14'
import Details15 from '../src/Components/shopProducts/ITEMS/Davines/Item15/Details15'
import Details16 from '../src/Components/shopProducts/ITEMS/Davines/Item16/Details16'
import Details17 from '../src/Components/shopProducts/ITEMS/Davines/Item17/Details17'
import Details18 from '../src/Components/shopProducts/ITEMS/Davines/Item18/Details18'
import Details19 from '../src/Components/shopProducts/ITEMS/Davines/Item19/Details19'
import Details20 from '../src/Components/shopProducts/ITEMS/Davines/Item20/Details20'
import Details21 from '../src/Components/shopProducts/ITEMS/Davines/Item21/Details21'
import Details22 from '../src/Components/shopProducts/ITEMS/Davines/Item22/Details22'
import Details23 from '../src/Components/shopProducts/ITEMS/Davines/Item23/Details23'
import Details24 from '../src/Components/shopProducts/ITEMS/Davines/Item24/Details24'
import Details25 from '../src/Components/shopProducts/ITEMS/Davines/Item25/Details25'
import Details26 from '../src/Components/shopProducts/ITEMS/Davines/Item26/Details26'
import Details27 from '../src/Components/shopProducts/ITEMS/Davines/Item27/Details27'
import Details28 from '../src/Components/shopProducts/ITEMS/Davines/Item28/Details28'
import Details29 from '../src/Components/shopProducts/ITEMS/Davines/Item29/Details29'
import Details30 from '../src/Components/shopProducts/ITEMS/Davines/Item30/Details30'
import Details31 from '../src/Components/shopProducts/ITEMS/Davines/Item31/Details31'
import Details32 from '../src/Components/shopProducts/ITEMS/Davines/Item32/Details32'
import Details33 from '../src/Components/shopProducts/ITEMS/Davines/Item33/Details33'


import Details201 from '../src/Components/shopProducts/ITEMS/Davines2/Item201/Details201'
import Details202 from '../src/Components/shopProducts/ITEMS/Davines2/Item202/Details202'
import Details203 from '../src/Components/shopProducts/ITEMS/Davines2/Item203/Details203'
import Details204 from '../src/Components/shopProducts/ITEMS/Davines2/Item204/Details204'
import Details205 from '../src/Components/shopProducts/ITEMS/Davines2/Item205/Details205'
import Details206 from '../src/Components/shopProducts/ITEMS/Davines2/Item206/Details206'
import Details207 from '../src/Components/shopProducts/ITEMS/Davines2/Item207/Details207'
import Details208 from '../src/Components/shopProducts/ITEMS/Davines2/Item208/Details208'
import Details209 from '../src/Components/shopProducts/ITEMS/Davines2/Item209/Details209'
import Details210 from '../src/Components/shopProducts/ITEMS/Davines2/Item210/Details210'
import Details211 from '../src/Components/shopProducts/ITEMS/Davines2/Item211/Details211'
import Details212 from '../src/Components/shopProducts/ITEMS/Davines2/Item212/Details212'
import Details213 from '../src/Components/shopProducts/ITEMS/Davines2/Item213/Details213'
import Details214 from '../src/Components/shopProducts/ITEMS/Davines2/Item214/Details214'
import Details215 from '../src/Components/shopProducts/ITEMS/Davines2/Item215/Details215'
import Details216 from '../src/Components/shopProducts/ITEMS/Davines2/Item216/Details216'

import Details217 from '../src/Components/shopProducts/ITEMS/Davines2/Item217/Details217'
import Details218 from '../src/Components/shopProducts/ITEMS/Davines2/Item218/Details218'
import Details219 from '../src/Components/shopProducts/ITEMS/Davines2/Item219/Details219'
import Details220 from '../src/Components/shopProducts/ITEMS/Davines2/Item220/Details220'
import Details221 from '../src/Components/shopProducts/ITEMS/Davines2/Item221/Details221'
import Details222 from '../src/Components/shopProducts/ITEMS/Davines2/Item222/Details222'
import Details223 from '../src/Components/shopProducts/ITEMS/Davines2/Item223/Details223'
import Details224 from '../src/Components/shopProducts/ITEMS/Davines2/Item224/Details224'
import Details225 from '../src/Components/shopProducts/ITEMS/Davines2/Item225/Details225'
import Details226 from '../src/Components/shopProducts/ITEMS/Davines2/Item226/Details226'
import Details227 from '../src/Components/shopProducts/ITEMS/Davines2/Item227/Details227'
import Details228 from '../src/Components/shopProducts/ITEMS/Davines2/Item228/Details228'
import Details229 from '../src/Components/shopProducts/ITEMS/Davines2/Item229/Details229'
import Details230 from '../src/Components/shopProducts/ITEMS/Davines2/Item230/Details230'
import Details231 from '../src/Components/shopProducts/ITEMS/Davines2/Item231/Details231'
import Details232 from '../src/Components/shopProducts/ITEMS/Davines2/Item232/Details232'
import Details233 from '../src/Components/shopProducts/ITEMS/Davines2/Item233/Details233'
import Details234 from '../src/Components/shopProducts/ITEMS/Davines2/Item234/Details234'
import Details235 from '../src/Components/shopProducts/ITEMS/Davines2/Item235/Details235'
import Details236 from '../src/Components/shopProducts/ITEMS/Davines2/Item236/Details236'
import Details237 from '../src/Components/shopProducts/ITEMS/Davines2/Item237/Details237'
import Details238 from '../src/Components/shopProducts/ITEMS/Davines2/Item238/Details238'
import Details239 from '../src/Components/shopProducts/ITEMS/Davines2/Item239/Details239'
import Details240 from '../src/Components/shopProducts/ITEMS/Davines2/Item240/Details240'
import Details241 from '../src/Components/shopProducts/ITEMS/Davines2/Item241/Details241'
import Details242 from '../src/Components/shopProducts/ITEMS/Davines2/Item242/Details242'
import Details243 from '../src/Components/shopProducts/ITEMS/Davines2/Item243/Details243'
import Details244 from '../src/Components/shopProducts/ITEMS/Davines2/Item244/Details244'





import Details34 from '../src/Components/shopProducts/ITEMS/Farmavita/Item34/Details34'
import Details35 from '../src/Components/shopProducts/ITEMS/Farmavita/Item35/Details35'
import Details36 from '../src/Components/shopProducts/ITEMS/Farmavita/Item36/Details36'
import Details37 from '../src/Components/shopProducts/ITEMS/Farmavita/Item37/Details37'
import Details38 from '../src/Components/shopProducts/ITEMS/Farmavita/Item38/Details38'
import Details39 from '../src/Components/shopProducts/ITEMS/Farmavita/Item39/Details39'
import Details40 from '../src/Components/shopProducts/ITEMS/Farmavita/Item40/Details40'
import Details41 from '../src/Components/shopProducts/ITEMS/Farmavita/Item41/Details41'
import Details42 from '../src/Components/shopProducts/ITEMS/Farmavita/Item42/Details42'
import Details43 from '../src/Components/shopProducts/ITEMS/Farmavita/Item43/Details43'
import Details44 from '../src/Components/shopProducts/ITEMS/Farmavita/Item44/Details44'
import Details45 from '../src/Components/shopProducts/ITEMS/Farmavita/Item45/Details45'
import Details46 from '../src/Components/shopProducts/ITEMS/Farmavita/Item46/Details46'
import Details47 from '../src/Components/shopProducts/ITEMS/Farmavita/Item47/Details47'
import Details48 from '../src/Components/shopProducts/ITEMS/Farmavita/Item48/Details48'
import Details50 from '../src/Components/shopProducts/ITEMS/Farmavita/Item50/Details50'
import Details51 from '../src/Components/shopProducts/ITEMS/Farmavita/Item51/Details51'
import Details52 from '../src/Components/shopProducts/ITEMS/Farmavita/Item52/Details52'
import Details53 from '../src/Components/shopProducts/ITEMS/Farmavita/Item53/Details53'
import Details54 from '../src/Components/shopProducts/ITEMS/Farmavita/Item54/Details54'
import Details55 from '../src/Components/shopProducts/ITEMS/Farmavita/Item55/Details55'
import Details56 from '../src/Components/shopProducts/ITEMS/Farmavita/Item56/Details56'
import Details57 from '../src/Components/shopProducts/ITEMS/Farmavita/Item57/Details57'
import Details58 from '../src/Components/shopProducts/ITEMS/Farmavita/Item58/Details58'

import Details100 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item100/Details100'
import Details101 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item101/Details101'
import Details102 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item102/Details102'
import Details103 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item103/Details103'
import Details104 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item104/Details104'
import Details105 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item105/Details105'
import Details106 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item106/Details106'
import Details107 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item107/Details107'
import Details108 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item108/Details108'
import Details109 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item109/Details109'
import Details110 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item110/Details110'
import Details111 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item111/Details111'
import Details112 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item112/Details112'
import Details113 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item113/Details113'
import Details114 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item114/Details114'
import Details115 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item115/Details115'
import Details116 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item116/Details116'
import Details117 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item117/Details117'
import Details118 from '../src/Components/shopProducts/ITEMS/Farmavita2/Item118/Details118'




import Details60 from '../src/Components/shopProducts/ITEMS/Joico/Item60/Details60'
import Details61 from '../src/Components/shopProducts/ITEMS/Joico/Item61/Details61'
import Details62 from '../src/Components/shopProducts/ITEMS/Joico/Item62/Details62'
import Details63 from '../src/Components/shopProducts/ITEMS/Joico/Item63/Details63'
import Details64 from '../src/Components/shopProducts/ITEMS/Joico/Item64/Details64'
import Details65 from '../src/Components/shopProducts/ITEMS/Joico/Item65/Details65'
import Details66 from '../src/Components/shopProducts/ITEMS/Joico/Item66/Details66'
import Details67 from '../src/Components/shopProducts/ITEMS/Joico/Item67/Details67'
import Details68 from '../src/Components/shopProducts/ITEMS/Joico/Item68/Details68'
import Details69 from '../src/Components/shopProducts/ITEMS/Joico/Item69/Details69'
import Details70 from '../src/Components/shopProducts/ITEMS/Joico/Item70/Details70'
import Details71 from '../src/Components/shopProducts/ITEMS/Joico/Item71/Details71'
import Details72 from '../src/Components/shopProducts/ITEMS/Joico/Item72/Details72'
import Details74 from '../src/Components/shopProducts/ITEMS/Joico/Item74/Details74'
import Details75 from '../src/Components/shopProducts/ITEMS/Joico/Item75/Details75'
import Details76 from '../src/Components/shopProducts/ITEMS/Joico/Item76/Details76'
import Details77 from '../src/Components/shopProducts/ITEMS/Joico/Item77/Details77'
import Details78 from '../src/Components/shopProducts/ITEMS/Joico/Item78/Details78'
import Details79 from '../src/Components/shopProducts/ITEMS/Joico/Item79/Details79'
import Details80 from '../src/Components/shopProducts/ITEMS/Joico/Item80/Details80'
import Details81 from '../src/Components/shopProducts/ITEMS/Joico/Item81/Details81'
import Details82 from '../src/Components/shopProducts/ITEMS/Joico/Item82/Details82'
import Details83 from '../src/Components/shopProducts/ITEMS/Joico/Item83/Details83'
import Details84 from '../src/Components/shopProducts/ITEMS/Joico/Item84/Details84'
import Details85 from '../src/Components/shopProducts/ITEMS/Joico/Item85/Details85'
import Details86 from '../src/Components/shopProducts/ITEMS/Joico/Item86/Details86'
import Details87 from '../src/Components/shopProducts/ITEMS/Joico/Item87/Details87'

// import Details90 from '../src/Components/NAV/ITEMS/CHILD/Item90/Details90'
// import Details91 from '../src/Components/NAV/ITEMS/CHILD/Item91/Details91'
// import Details92 from '../src/Components/NAV/ITEMS/CHILD/Item92/Details92'
//

// import Details100 from '../src/Components/NAV/ITEMS/GOODFOOD/Item100/Details100'
// import Details101 from '../src/Components/NAV/ITEMS/GOODFOOD/Item101/Details101'
// import Details102 from '../src/Components/NAV/ITEMS/GOODFOOD/Item102/Details102'
// import Details103 from '../src/Components/NAV/ITEMS/GOODFOOD/Item103/Details103'
// import Details104 from '../src/Components/NAV/ITEMS/GOODFOOD/Item104/Details104'
// import Details105 from '../src/Components/NAV/ITEMS/GOODFOOD/Item105/Details105'
// import Details106 from '../src/Components/NAV/ITEMS/GOODFOOD/Item106/Details106'
//
// import Details110 from '../src/Components/NAV/ITEMS/HAIR/Item110/Details110'
// import Details111 from '../src/Components/NAV/ITEMS/HAIR/Item111/Details111'
// import Details112 from '../src/Components/NAV/ITEMS/HAIR/Item112/Details112'
// import Details113 from '../src/Components/NAV/ITEMS/HAIR/Item113/Details113'
// import Details114 from '../src/Components/NAV/ITEMS/HAIR/Item114/Details114'
// import Details115 from '../src/Components/NAV/ITEMS/HAIR/Item115/Details115'
// import Details116 from '../src/Components/NAV/ITEMS/HAIR/Item116/Details116'












function App() {

  return (
        <Router>
            <ShopNav />
            <ShopSlider />
            <Switch>
                <Route path='/' exact>
                    <ShopBrands />
                    <ShopProducts />
                </Route>
                <Route path='/shopAboutShop'>
                    <ShopAboutShop />
                </Route>
                <Route path='/shopContacts'>
                    <ShopContacts />
                </Route>
                <Route path='/shopBin'>
                    <ShopBin />
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
                <Route path='/routes'>
                    <Routes />
                </Route>
                                    <Route path='/details1'>
                                        <Details1 />
                                    </Route>
                                    <Route path='/details2'>
                                        <Details2 />
                                    </Route>
                                    <Route path='/details3'>
                                        <Details3 />
                                    </Route>
                                    <Route path='/details4'>
                                        <Details4 />
                                    </Route>
                                    <Route path='/details5'>
                                        <Details5 />
                                    </Route>
                                    <Route path='/details6'>
                                        <Details6 />
                                    </Route>
                                    <Route path='/details7'>
                                        <Details7 />
                                    </Route>
                                    <Route path='/details8'>
                                        <Details8 />
                                    </Route>
                                    <Route path='/details9'>
                                        <Details9 />
                                    </Route>
                                    <Route path='/details10'>
                                        <Details10 />
                                    </Route>
                                    <Route path='/details11'>
                                        <Details11 />
                                    </Route>
                                    <Route path='/details13'>
                                        <Details13 />
                                    </Route>
                                    <Route path='/details14'>
                                        <Details14 />
                                    </Route>
                                    <Route path='/details15'>
                                        <Details15 />
                                    </Route>
                                    <Route path='/details16'>
                                        <Details16 />
                                    </Route>
                                    <Route path='/details17'>
                                        <Details17 />
                                    </Route>
                                    <Route path='/details18'>
                                        <Details18 />
                                    </Route>
                                    <Route path='/details19'>
                                        <Details19 />
                                    </Route>
                                    <Route path='/details20'>
                                        <Details20 />
                                    </Route>
                                    <Route path='/details21'>
                                        <Details21 />
                                    </Route>
                                    <Route path='/details22'>
                                        <Details22 />
                                    </Route>
                                    <Route path='/details23'>
                                        <Details23 />
                                    </Route>
                                    <Route path='/details24'>
                                        <Details24 />
                                    </Route>
                                    <Route path='/details25'>
                                        <Details25 />
                                    </Route>
                                    <Route path='/details26'>
                                        <Details26 />
                                    </Route>
                                    <Route path='/details27'>
                                        <Details27 />
                                    </Route>
                                    <Route path='/details28'>
                                        <Details28 />
                                    </Route>
                                    <Route path='/details29'>
                                        <Details29 />
                                    </Route>
                                    <Route path='/details30'>
                                        <Details30 />
                                    </Route>
                                    <Route path='/details31'>
                                        <Details31 />
                                    </Route>
                                    <Route path='/details32'>
                                        <Details32 />
                                    </Route>
                                    <Route path='/details33'>
                                        <Details33 />
                                    </Route>


                                    <Route path='/details201'>
                                        <Details201 />
                                    </Route>
                                    <Route path='/details202'>
                                        <Details202 />
                                    </Route>
                                    <Route path='/details203'>
                                        <Details203 />
                                    </Route>
                                    <Route path='/details204'>
                                        <Details204 />
                                    </Route>
                                    <Route path='/details205'>
                                        <Details205 />
                                    </Route>
                                    <Route path='/details206'>
                                        <Details206 />
                                    </Route>
                                    <Route path='/details207'>
                                        <Details207 />
                                    </Route>
                                    <Route path='/details208'>
                                        <Details208 />
                                    </Route>
                                    <Route path='/details209'>
                                        <Details209 />
                                    </Route>
                                    <Route path='/details210'>
                                        <Details210 />
                                    </Route>
                                    <Route path='/details211'>
                                        <Details211 />
                                    </Route>
                                    <Route path='/details213'>
                                        <Details213 />
                                    </Route>
                                    <Route path='/details214'>
                                        <Details214 />
                                    </Route>
                                    <Route path='/details215'>
                                        <Details215 />
                                    </Route>
                                    <Route path='/details216'>
                                        <Details216 />
                                    </Route>
                                    <Route path='/details217'>
                                        <Details217 />
                                    </Route>
                                    <Route path='/details218'>
                                        <Details218 />
                                    </Route>
                                    <Route path='/details219'>
                                        <Details219 />
                                    </Route>
                                    <Route path='/details220'>
                                        <Details220 />
                                    </Route>
                                    <Route path='/details221'>
                                        <Details221 />
                                    </Route>
                                    <Route path='/details222'>
                                        <Details222 />
                                    </Route>
                                    <Route path='/details223'>
                                        <Details223 />
                                    </Route>
                                    <Route path='/details224'>
                                        <Details224 />
                                    </Route>
                                    <Route path='/details225'>
                                        <Details225 />
                                    </Route>
                                    <Route path='/details226'>
                                        <Details226 />
                                    </Route>
                                    <Route path='/details227'>
                                        <Details227 />
                                    </Route>
                                    <Route path='/details228'>
                                        <Details228 />
                                    </Route>
                                    <Route path='/details229'>
                                        <Details229 />
                                    </Route>
                                    <Route path='/details230'>
                                        <Details230 />
                                    </Route>
                                    <Route path='/details231'>
                                        <Details231 />
                                    </Route>
                                    <Route path='/details232'>
                                        <Details232 />
                                    </Route>
                                    <Route path='/details233'>
                                        <Details233 />
                                    </Route>

                                    <Route path='/details234'>
                                        <Details234 />
                                    </Route>
                                    <Route path='/details235'>
                                        <Details235 />
                                    </Route>
                                    <Route path='/details236'>
                                        <Details236 />
                                    </Route>
                                    <Route path='/details237'>
                                        <Details237 />
                                    </Route>
                                    <Route path='/details238'>
                                        <Details238 />
                                    </Route>
                                    <Route path='/details239'>
                                        <Details239 />
                                    </Route>
                                    <Route path='/details240'>
                                        <Details240 />
                                    </Route>
                                    <Route path='/details241'>
                                        <Details241 />
                                    </Route>
                                    <Route path='/details242'>
                                        <Details242 />
                                    </Route>
                                    <Route path='/details243'>
                                        <Details243 />
                                    </Route>
                                    <Route path='/details244'>
                                        <Details244 />
                                    </Route>


                                    <Route path='/details34'>
                                        <Details34 />
                                    </Route>
                                    <Route path='/details35'>
                                        <Details35 />
                                    </Route>
                                    <Route path='/details36'>
                                        <Details36 />
                                    </Route>
                                    <Route path='/details37'>
                                        <Details37 />
                                    </Route>
                                    <Route path='/details38'>
                                        <Details38 />
                                    </Route>
                                    <Route path='/details39'>
                                        <Details39 />
                                    </Route>
                                    <Route path='/details40'>
                                        <Details40 />
                                    </Route>
                                    <Route path='/details41'>
                                        <Details41 />
                                    </Route>
                                    <Route path='/details42'>
                                        <Details42 />
                                    </Route>
                                    <Route path='/details43'>
                                        <Details43 />
                                    </Route>
                                    <Route path='/details44'>
                                        <Details44 />
                                    </Route>
                                    <Route path='/details45'>
                                        <Details45 />
                                    </Route>
                                    <Route path='/details46'>
                                        <Details46 />
                                    </Route>
                                    <Route path='/details47'>
                                        <Details47 />
                                    </Route>
                                    <Route path='/details48'>
                                        <Details48 />
                                    </Route>
                                    <Route path='/details50'>
                                        <Details50 />
                                    </Route>
                                    <Route path='/details51'>
                                        <Details51 />
                                    </Route>
                                    <Route path='/details52'>
                                        <Details52 />
                                    </Route>
                                    <Route path='/details53'>
                                        <Details53 />
                                    </Route>
                                    <Route path='/details54'>
                                        <Details54 />
                                    </Route>
                                    <Route path='/details55'>
                                        <Details55 />
                                    </Route>
                                    <Route path='/details56'>
                                        <Details56 />
                                    </Route>
                                    <Route path='/details57'>
                                        <Details57 />
                                    </Route>
                                    <Route path='/details58'>
                                        <Details58 />
                                    </Route>

                                    <Route path='/details100'>
                                        <Details100 />
                                    </Route>
                                    <Route path='/details101'>
                                        <Details101 />
                                    </Route>
                                    <Route path='/details102'>
                                        <Details102/>
                                    </Route>
                                    <Route path='/details103'>
                                        <Details103 />
                                    </Route>
                                    <Route path='/details104'>
                                        <Details104 />
                                    </Route>
                                    <Route path='/details105'>
                                        <Details105 />
                                    </Route>
                                    <Route path='/details106'>
                                        <Details106 />
                                    </Route>
                                    <Route path='/details107'>
                                        <Details107 />
                                    </Route>
                                    <Route path='/details108'>
                                        <Details108 />
                                    </Route>
                                    <Route path='/details109'>
                                        <Details109 />
                                    </Route>
                                    <Route path='/details110'>
                                        <Details110 />
                                    </Route>
                                    <Route path='/details111'>
                                        <Details111 />
                                    </Route>
                                    <Route path='/details112'>
                                        <Details112 />
                                    </Route>
                                    <Route path='/details113'>
                                        <Details113 />
                                    </Route>
                                    <Route path='/details114'>
                                        <Details114 />
                                    </Route>
                                    <Route path='/details115'>
                                        <Details115 />
                                    </Route>
                                    <Route path='/details116'>
                                        <Details116 />
                                    </Route>
                                    <Route path='/details117'>
                                        <Details117 />
                                    </Route>
                                    <Route path='/details118'>
                                        <Details118 />
                                    </Route>


                                    <Route path='/details60'>
                                        <Details60 />
                                    </Route>
                                    <Route path='/details61'>
                                        <Details61 />
                                    </Route>
                                    <Route path='/details62'>
                                        <Details62 />
                                    </Route>
                                    <Route path='/details63'>
                                        <Details63 />
                                    </Route>
                                    <Route path='/details64'>
                                        <Details64 />
                                    </Route>
                                    <Route path='/details65'>
                                        <Details65 />
                                    </Route>
                                    <Route path='/details66'>
                                        <Details66 />
                                    </Route>
                                    <Route path='/details67'>
                                        <Details67 />
                                    </Route>
                                    <Route path='/details68'>
                                        <Details68 />
                                    </Route>
                                    <Route path='/details69'>
                                        <Details69 />
                                    </Route>
                                    <Route path='/details70'>
                                        <Details70 />
                                    </Route>
                                    <Route path='/details71'>
                                        <Details71 />
                                    </Route>
                                    <Route path='/details72'>
                                        <Details72 />
                                    </Route>
                                    <Route path='/details74'>
                                        <Details74 />
                                    </Route>
                                    <Route path='/details75'>
                                        <Details75 />
                                    </Route>
                                    <Route path='/details76'>
                                        <Details76 />
                                    </Route>
                                    <Route path='/details77'>
                                        <Details77 />
                                    </Route>
                                    <Route path='/details78'>
                                        <Details78 />
                                    </Route>
                                    <Route path='/details79'>
                                        <Details79 />
                                    </Route>
                                    <Route path='/details80'>
                                        <Details80 />
                                    </Route>
                                    <Route path='/details81'>
                                        <Details81 />
                                    </Route>
                                    <Route path='/details82'>
                                        <Details82 />
                                    </Route>
                                    <Route path='/details83'>
                                        <Details83 />
                                    </Route>
                                    <Route path='/details84'>
                                        <Details84 />
                                    </Route>
                                    <Route path='/details85'>
                                        <Details85 />
                                    </Route>
                                    <Route path='/details86'>
                                        <Details86 />
                                    </Route>
                                    <Route path='/details87'>
                                        <Details87 />
                                    </Route>

                                    {/*<Route path='/details90'>*/}
                                    {/*    <Details90 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details91'>*/}
                                    {/*    <Details91 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details92'>*/}
                                    {/*    <Details92 />*/}
                                    {/*</Route>*/}

                                    {/*<Route path='/details100'>*/}
                                    {/*    <Details100 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details101'>*/}
                                    {/*    <Details101 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details102'>*/}
                                    {/*    <Details102 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details103'>*/}
                                    {/*    <Details103 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details104'>*/}
                                    {/*    <Details104 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details105'>*/}
                                    {/*    <Details105 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details106'>*/}
                                    {/*    <Details106 />*/}
                                    {/*</Route>*/}

                                    {/*<Route path='/details110'>*/}
                                    {/*    <Details110 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details111'>*/}
                                    {/*    <Details111 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details112'>*/}
                                    {/*    <Details112 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details113'>*/}
                                    {/*    <Details113 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details114'>*/}
                                    {/*    <Details114 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details115'>*/}
                                    {/*    <Details115 />*/}
                                    {/*</Route>*/}
                                    {/*<Route path='/details116'>*/}
                                    {/*    <Details116 />*/}
                                    {/*</Route>*/}




                {/*<ShopMobileUpload />*/}
                {/*<Route path='/shopCallMe'>*/}
                {/*    <ShopCallMe />*/}
                {/*</Route>*/}
                {/*<Route path='/shopLike'>*/}
                {/*    <ShopLike />*/}
                {/*</Route>*/}
            </Switch>
            <ShopFooter />
            {/*<ShopAccount />*/}
        </Router>
  );
}

export default App;
