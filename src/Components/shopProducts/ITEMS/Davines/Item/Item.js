import {MDBCard, MDBCardBody, MDBCardImage} from 'mdbreact';
import React from 'react';
import {Link} from 'react-router-dom'

import './../../../shopProducts.css'


const cl = console.log

class Item extends React.Component {

                render() {
                    let id, title, price, descr, type, brand, seria, gender;
                    if (this.props.product) {
                        id = this.props.product.id;
                        title = this.props.product.title;
                        price = this.props.product.price;
                        descr = this.props.product.descr;
                        // let image = this.props.product.image;
                        type = this.props.product.type;
                        brand = this.props.product.brand;
                        seria = this.props.product.seria;
                        gender = this.props.product.gender;
                    }
                return (
                    <MDBCard className='border-0'>
                        <Link to={'/details/'+id}>
                            <div className='text-white text-center align-items-center p-0'>
                                <MDBCardImage
                                    src={require('../../../../../img/catalogue/f45.jpg')}
                                    className='img-fluid w-100 prod-img'
                                    alt=''>
                                </MDBCardImage>
                                <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                    <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-1 w-100'>{title}</p>
                                    <p className='text-left prod-describe black-text m-0 mb-1'>{descr}</p>
                                    <div className='w-100'>
                                        <p className='black-text m-0 py-1 text-left'><b>Type: </b><span>{type}</span></p>
                                        <p className='black-text m-0 py-1 text-left'><b>Brand: </b><span>{brand}</span></p>
                                        <p className='black-text m-0 py-1 text-left'><b>Seria: </b><span>{seria}</span></p>
                                        <p className='black-text m-0 py-1 text-left'><b>Gender: </b><span>{gender}</span></p>
                                        <p className='font-weight-bold black-text py-1 text-left float-left'>Ціна: <span>{price}</span> грн</p>
                                        <p className='float-right m-0'>
                                            <span className='bg-transparent border-0'>
                                                <i className="fas fa-heart purple-ic p-2"></i>
                                            </span>
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