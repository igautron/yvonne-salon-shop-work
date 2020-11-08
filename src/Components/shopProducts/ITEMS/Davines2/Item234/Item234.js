import {MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBLink} from 'mdbreact';
import React from 'react';
import {Link} from 'react-router-dom'

import './../../../shopProducts.css'



class Item234 extends React.Component {
            render() {
                return (
                    <MDBCard className='border-0'>
                        <Link to='/details234'>
                            <div className='text-white text-center align-items-center p-0'>
                                <MDBCardImage
                                    src={require('../../../../../img/catalogue/s234.jpg')}
                                    className='img-fluid w-100 prod-img'
                                    alt=''>
                                </MDBCardImage>
                                <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                    <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-1 w-100'>Молочко для волосся Davines LOVE CURL Primer, 150 мл</p>
                                    <MDBLink
                                        color='primary'
                                        href='!#'
                                        style={{marginBottom: '1rem'}}
                                        className='text-left p-0 pb-0 mb-1'
                                    >
                                        <p className='prod-describe black-text m-0 '>Зволожуючий, сушильний феном молоко для хвилястих або кучерявих волосся
                                        </p>
                                    </MDBLink>
                                    <p className='prod-price black-text py-1 text-left'>Ціна: <span>167 </span>грн</p>
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

export default Item234;