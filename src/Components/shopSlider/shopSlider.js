import React, {Component} from 'react';
import './shopSlider.css'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
} from 'mdbreact';

class ShopSlider extends Component  {

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
                <div className='shop-slider bg-light w-100'>
                    <MDBCarousel
                        activeItem={1}
                        length={10}
                        showControls={true}
                        showIndicators={false}
                        className='z-depth-1 slider'
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId='1'>
                                <MDBView>
                                    <img
                                        className='d-block w-100 h-100 card-img-overlay m-0 p-0'
                                        src={require('../../img/shop/shop-slider1.jpg')}
                                        alt='Slide one'
                                    />
                                    <MDBMask overlay='black'></MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='2'>
                                <MDBView>
                                    <img
                                        className='d-block w-100 h-100 card-img-overlay m-0 p-0'
                                        src={require('../../img/shop/shop-slider2.png')}
                                        alt='Second slide'
                                    />
                                    <MDBMask overlay='black' className='slide2'></MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='3'>
                                <MDBView>
                                    <img
                                        className='d-block w-100 h-100 card-img-overlay m-0 p-0'
                                        src={require('../../img/shop/shop-slide3.png')}
                                        alt='Third slide'
                                    />
                                    <MDBMask overlay='black'></MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='4'>
                                <MDBView>
                                    <img
                                        className='d-block w-100 h-100 card-img-overlay m-0 p-0'
                                        src={require('../../img/shop/shop-slider4.jpg')}
                                        alt='Third slide'
                                    />
                                    <MDBMask overlay='black'></MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='5'>
                                <MDBView>
                                    <img
                                        className='d-block w-100 h-100 card-img-overlay m-0 p-0'
                                        src={require('../../img/shop/shop-slide5.jpg')}
                                        alt='Third slide'
                                    />
                                    <MDBMask overlay='black'></MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='6'>
                                <MDBView>
                                    <img
                                        className='d-block w-100 h-100 card-img-overlay m-0 p-0'
                                        src={require('../../img/shop/shop-slide6.png')}
                                        alt='Third slide'
                                    />
                                    <MDBMask overlay='black'></MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='7'>
                                <MDBView>
                                    <img
                                        className='d-block w-100 h-100 card-img-overlay m-0 p-0'
                                        src={require('../../img/shop/shop-slide7.jpg')}
                                        alt='Third slide'
                                    />
                                    <MDBMask overlay='black'></MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='8'>
                                <MDBView>
                                    <img
                                        className='d-block w-100 h-100 card-img-overlay m-0 p-0'
                                        src={require('../../img/shop/shop-slide8.jpg')}
                                        alt='Third slide'
                                    />
                                    <MDBMask overlay='black'></MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='9'>
                                <MDBView>
                                    <img
                                        className='d-block w-100 h-100 card-img-overlay m-0 p-0'
                                        src={require('../../img/shop/shop-slider9.jpg')}
                                        alt='Third slide'
                                    />
                                    <MDBMask overlay='black'></MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='10'>
                                <MDBView>
                                    <img
                                        className='d-block w-100 h-100 card-img-overlay m-0 p-0'
                                        src={require('../../img/shop/shop-slide10.jpg')}
                                        alt='Third slide'
                                    />
                                    <MDBMask overlay='black'></MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
        )
    }
}

export default ShopSlider;