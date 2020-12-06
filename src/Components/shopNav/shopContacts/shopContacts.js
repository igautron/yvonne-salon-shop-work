import React, {Component} from 'react';
import './shopContacts.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
MDBCard,
MDBCol,
MDBView,
MDBRow, MDBTable,MDBContainer, MDBInput, MDBBtn, MDBModalHeader, MDBModalBody, MDBIcon} from 'mdbreact';

class ShopContacts extends Component {

    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    logValue = value => {
        console.log(value);
    };





    render() {
        return (
            <div>
                <div className='container'>
                    <h1 className='h1-responsive font-weight-bolder m-0 pt-5 pt-xl-5 pt-lg-5 pt-md-5 pt-sm-5 pt-5 pb-4 pb-xl-5 pb-lg-5 pb-md-5 pb-sm-4'>КОНТАКТИ</h1>
                    <h2 className='h2-responsive text-info-h1 text-left font-weight-bold  mb-0 pt-2 pl-3 py-xl-1 py-lg-2 py-md-2 py-sm-2 py-1 px-md-0 pl-sm-4'>ІНТЕРНЕТ
                        МАГАЗИН <span className='font-weight-bold h2-span purple-text'>ЗАСОБІВ ДОГЛЯДУ ЗА ВОЛОССЯМ</span></h2>
                    <h4 className='h4-responsive text-info-h4 text-left font-weight-bold m-0  pl-3 py-xl-3 py-lg-2 py-md-2 pb-sm-4 py-1 px-md-0 px-sm-4'>МИТТЄВА ДОСТАВКА
                        ТОВАРІВ НЕОБХІДНИХ САМЕ ДЛЯ ТЕБЕ</h4>
                    <MDBCard className='border-0 laptop-v-block d-block'>
                        <MDBRow className='ml-0 mr-0 w-100 m-0 p-0 pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 pb-5 '>
                            <MDBCol className='col-12 m-0 p-0 contact-info  pb-4'>
                                <MDBView>
                                    {/*<img src={require('../../../../../../img/shop/slide5-1.jpg')} className="img-fluid m-0 p-0 w-100" alt="" />*/}
                                    <div className='black-text'>
                                        <MDBTable className='shop-contacts-text m-0 h-100 py-5 w-100 justify-content-center m-auto'>
                                            <th className='ml-5 pl-xl-5 pr-xl-2 p pl-lg-4 pr-lg-0 pl-md-4 pr-md-0 px-sm-2 py-xl-3 py-md-3 py-sm-2 m-0 border-0 w-auto th-icon'>
                                                <tr className='font-weight-normal'><MDBIcon icon="city" className='mx-1'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon icon="map-marker-alt" className='mx-2'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon icon="mobile-alt" className='mx-2'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon icon="mobile" className='mx-2'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon far icon="clock" className='mx-2 '/></tr>
                                                <tr className='font-weight-normal'><MDBIcon far icon="envelope" className='mx-2'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon fab icon="facebook-square" className='mx-2'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon fab icon="instagram" className='mx-2'/></tr>
                                            </th>
                                            <th className='pl-xl-0 pl-lg-0 pl-md-0 py-xl-3 m-0 border-0 th-name'>
                                                <tr className='font-weight-normal'>Місто</tr>
                                                <tr className='font-weight-normal'>Вулиця</tr>
                                                <tr className='font-weight-normal'>Телефон</tr>
                                                <tr className='font-weight-normal'>Телефон дод.</tr>
                                                <tr className='font-weight-normal'>Графік роботи</tr>
                                                <tr className='font-weight-normal'>Gmail</tr>
                                                <tr className='font-weight-normal'>Facebook</tr>
                                                <tr className='font-weight-normal'>Instagram</tr>
                                            </th>
                                            <th className='pl-xl-5 py-xl-3 m-0 border-0 th-name'>
                                                <tr className='font-weight-light'>Київ</tr>
                                                <tr className='font-weight-light'>вулиця Данченко 32, вхід з двору або через маркет</tr>
                                                <tr className='font-weight-light'>+38 073 500 55 33</tr>
                                                <tr className='font-weight-light'>+38 093 500 55 33</tr>
                                                <tr className='font-weight-light'>09:00-20:00 (працюємо без вихідних)</tr>
                                                <tr className='font-weight-light'><a href='/'>link</a></tr>
                                                <tr className='font-weight-light'><a href='/'>link</a></tr>
                                                <tr className='font-weight-light'><a href='/'>link</a></tr>
                                            </th>
                                        </MDBTable>
                                    </div>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard className='border-0 contact-map d-block mb-5'>
                        <MDBCol className='col-12 m-0 p-0 contact-map z-depth-2 '>
                            <div
                                id='map-container'
                                className='map-container w-100 h-100'
                            >
                                <iframe
                                    src='https://goo.gl/maps/BK5LiQa3qqhriNGL8'
                                    title='This is a unique title'
                                    width='100%'
                                    height='100%'
                                    frameBorder='0'
                                    style={{border: 0}}
                                />
                            </div>
                        </MDBCol>
                    </MDBCard>
                </div>
                <div className='laptop-v-block'>
                    <div className='pb-sm-5 pb-lg-5 pb-xl-5'>
                        <MDBCard className='contacts-form border-0 z-depth-1'>
                                <MDBCol className='col-12 m-0 p-0 contact-info m-auto justify-content-center'>
                                    <MDBContainer>
                                        <MDBModalHeader
                                            titleClass='d-inline title'
                                            className='p-0 m-0 border-0'
                                        >
                                            <h3 className='text-center font-weight-normal pt-xl-5 pt-lg-5 pb-3 pt-md-5 pt-sm-5 pt-5 m-0'>Форма зв'язку</h3>
                                            <h6 className='w-responsive font-italic text-info-contact text-center m-auto justify-content-center font-weight-normal grey-text px-xl-5'>Залиште ваші
                                                контактні данні і ми зв'яжемось із Вами найближчим часом</h6>
                                        </MDBModalHeader>
                                        <MDBModalBody
                                            className='p-0 m-0 border-0 pb-xl-3 px-md-5 px-lg-5 px-xl-5'
                                        >
                                            <MDBInput
                                                hint="Ваше ім'я"
                                                type='textarea'
                                                icon='user'
                                                iconClass='px-auto'
                                                className='py-md-2 py-lg-2 py-xl-2 my-xl-3 mx-xl-5 contact-input'
                                            />
                                            <MDBInput
                                                hint='Номер телефону'
                                                type='textarea'
                                                icon='mobile-alt'
                                                iconClass='px-1'
                                                className='py-md-2 py-lg-2 py-xl-2 my-xl-3 mx-xl-5 contact-input'
                                            />
                                            <MDBInput
                                                hint='Побажання'
                                                type='textarea'
                                                icon='comment-alt'
                                                height={'3rem'}
                                                iconClass='px-1'
                                                className='py-md-2 py-lg-2 py-xl-2 my-xl-3 mx-xl-5 contact-input '
                                            />
                                            <div className='text-center mt-1-half'>
                                                <MDBBtn
                                                    color='purple'
                                                    className='mb-xl-4 mt-xl-4 mb-md-5 mb-lg-5 mb-xl-5 btn-outline-purple px-xl-4 left font-weight-bold'
                                                    onClick={this.toggle}
                                                >
                                                    Відправити
                                                    <MDBIcon icon='paper-plane' className='ml-1'/>
                                                </MDBBtn>
                                            </div>
                                        </MDBModalBody>
                                    </MDBContainer>
                                </MDBCol>
                        </MDBCard>
                    </div>
                </div>

                {/*mobile-version*/}

                <div className='mobile d-none justify-content-center m-auto'>
                    <MDBCard className='mobile-v-block m-3 m-sm-3 rounded'>
                            <img src={require('../../../img/shop/slider11.jpg')} className="img-fluid m-0 p-0 w-100 position-absolute" alt="" />
                            <MDBCol className='col-12 m-0 p-0 contact-info d-block position-relative'>
                                <MDBView waves className='z-depth-3'>
                                    <div className='black-text d-block'>
                                        <h4 className='text-info-h5 text-center font-weight-normal py-4 py-sm-4 m-0'>Інформація для зв'язку</h4>
                                        <h6 className='w-responsive justify-content-center font-italic text-center font-weight-normal purple-text py-1 px-5 py-sm-0 px-sm-5 m-auto'>Замовлення косметичних засобів приймаються онлайн, за телефоном або при відвідуванні магазину.</h6>
                                        <MDBTable className='shop-contacts-text m-0 h-100 my-sm-2 my-2'>
                                            <th className='pl-4 pl-sm-5 m-0 border-0'>
                                                <tr className='font-weight-normal'><MDBIcon icon="city" className='mx-1 purple-text'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon icon="map-marker-alt" className='mx-2 purple-text'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon icon="mobile-alt" className='mx-2 purple-text'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon icon="mobile" className='mx-2 purple-text'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon far icon="clock" className='mx-2 purple-text'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon far icon="envelope" className='mx-2 purple-text'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon fab icon="facebook-square" className='mx-2 purple-text'/></tr>
                                                <tr className='font-weight-normal'><MDBIcon fab icon="instagram" className='mx-2 purple-text'/></tr>
                                            </th>
                                            <th className='pl-xl-0 py-xl-3 m-0 border-0'>
                                                <tr className='font-weight-bolder'>Місто</tr>
                                                <tr className='font-weight-bolder'>Вулиця</tr>
                                                <tr className='font-weight-bolder'>Телефон</tr>
                                                <tr className='font-weight-bolder'>Телефон дод.</tr>
                                                <tr className='font-weight-bolder'>Графік роботи</tr>
                                                <tr className='font-weight-bolder'>Gmail</tr>
                                                <tr className='font-weight-bolder'>Facebook</tr>
                                                <tr className='font-weight-bolder'>Instagram</tr>
                                            </th>
                                            <th className='pl-xl-5 py-xl-3 m-0 border-0'>
                                                <tr className='font-weight-bold'>Київ</tr>
                                                <tr className='font-weight-bold'>Данченко 32, вхід з двору</tr>
                                                <tr className='font-weight-bold'>+38 073 500 55 33</tr>
                                                <tr className='font-weight-bold'>+38 093 500 55 33</tr>
                                                <tr className='font-weight-bold'>09:00-20:00 (без вихідних)</tr>
                                                <tr className='font-weight-bold'><a href='/'>link</a></tr>
                                                <tr className='font-weight-bold'><a href='/'>link</a></tr>
                                                <tr className='font-weight-bold'><a href='/'>link</a></tr>
                                            </th>
                                        </MDBTable>
                                    </div>
                                </MDBView>
                            </MDBCol>
                    </MDBCard>
                </div>
                <div className='mobile d-none justify-content-center m-auto overflow-hidden'>
                    <MDBCard className='mobile-v-block mx-3 mx-sm-3 rounded'>
                            <MDBCol className='col-12 m-0 p-0 z-depth-2 position-relative'>
                                <div
                                    id="map-container"
                                    className="rounded z-depth-1-half map-container"
                                    style={{ height: '400px' }}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src='https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed'
                                        frameBorder="0"
                                        style={{border:0}} >
                                    </iframe>
                                </div>
                            </MDBCol>
                    </MDBCard>
                </div>
                <div className='mobile d-none justify-content-center m-auto'>
                        <MDBCard className='border-0 z-depth-1 mobile-v-block m-3 m-sm-3'>
                                <MDBCol className='col-12 m-0 p-0 px-4 px-sm-5 contact-info m-auto justify-content-center'>
                                        <MDBModalHeader
                                            titleClass='d-inline title'
                                            className='p-0 m-0 border-0'
                                        >
                                            <div className='text-center font-weight-normal py-4 py-sm-4 m-0'>Форма зв'язку</div>
                                            <div className='w-responsive font-italic text-center m-auto justify-content-center font-weight-normal grey-text px-xl-5'>Залиште ваші
                                                контактні данні і ми зв'яжемось із Вами найближчим часом</div>
                                        </MDBModalHeader>
                                        <MDBModalBody
                                            className='p-0 m-0 border-0 pb-xl-3 px-md-5 px-lg-5 px-xl-5'
                                        >
                                            <MDBInput
                                                hint="Ваше ім'я"
                                                type='textarea'
                                                icon='user'
                                                iconClass='purple-text px-auto'
                                                className='py-2 py-sm-2 contact-input'
                                            />
                                            <MDBInput
                                                hint='Номер телефону'
                                                type='textarea'
                                                icon='mobile-alt'
                                                iconClass='purple-text px-1'
                                                className='py-2 py-sm-2 contact-input'
                                            />
                                            <MDBInput
                                                hint='Побажання'
                                                type='textarea'
                                                icon='comment-alt'
                                                height={'3rem'}
                                                iconClass='purple-text px-1'
                                                className='py-2 py-sm-2 contact-input'
                                            />
                                            <div className='text-center mt-1-half mb-3'>
                                                <MDBBtn
                                                    color='purple-text'
                                                    className='my-3 mt-sm-3 mb-sm-5 btn-outline-purple px-xl-4 left font-weight-bold'
                                                    onClick={this.toggle}
                                                >
                                                    Відправити
                                                    <MDBIcon icon='paper-plane' className='ml-1'/>
                                                </MDBBtn>
                                            </div>
                                        </MDBModalBody>
                                </MDBCol>
                        </MDBCard>
                </div>
            </div>
        )
    }
}

export default ShopContacts;



// import React from 'react';
// import {Component} from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
//
//
// class ShopContacts extends Component {
//     render() {
//         return(
//             <p>hi</p>
//         )
//     }
// }
//
// export default ShopContacts;