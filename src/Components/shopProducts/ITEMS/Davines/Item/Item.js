import {MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBLink} from 'mdbreact';
import React from 'react';
import {Link} from 'react-router-dom'

import './../../../shopProducts.css'


class Item extends React.Component {

                render() {
                    let id, title, price, descr, image;
                    if (this.props.product) {
                        id = this.props.product.id;
                        title = this.props.product.title;
                        price = this.props.product.price;
                        descr = this.props.product.descr;
                        image = this.props.product.image;
                    }
                return (
                    <MDBCard className='border-0'>
                        <Link to={'/details/'+id}>
                            <div className='text-white text-center align-items-center p-0'>
                                <MDBCardImage
                                    src={image/*require('../../../../../img/catalogue/f45.jpg')*/}
                                    className='img-fluid w-100 prod-img'
                                    alt=''>
                                </MDBCardImage>
                                <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                    <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-1 w-100'>{title}</p>
                                    <MDBLink
                                        color='primary'
                                        href='!#'
                                        style={{marginBottom: '1rem'}}
                                        className='text-left p-0 pb-0 mb-1'
                                    >
                                        <p className='prod-describe black-text m-0'>{descr}</p>
                                    </MDBLink>
                                    <div className=' w-100'>
                                        <p className='font-weight-bold black-text py-1 text-left float-left'>Ціна: <span>{price}</span> грн</p>
                                        <p className='float-right m-0'>
                                            <a className='bg-transparent border-0'>
                                                <i className="fas fa-heart purple-ic p-2"></i>
                                            </a>
                                        </p>
                                    </div>
                                    <div>
                                        <button
                                            className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В
                                            КОРЗИНУ
                                        </button>
                                    </div>
                                </MDBCardBody>
                            </div>
                        </Link>
                    </MDBCard>
        )
    }
}

export default Item;