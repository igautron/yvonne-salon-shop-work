import {MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBLink} from "mdbreact";
import React from "react";
import {Link} from 'react-router-dom'

import './../../../shopProducts.css'




class Item17 extends React.Component {

    render() {
        return (
            <MDBCard className='border-0' >
                <Link to='/details17'
                    className='text-white text-center align-items-center p-0'>
                    <MDBCardImage
                        src={require('../../../../../img/catalogue/s17.jpg')}
                        className='img-fluid w-100 prod-img'
                        alt=''>
                    </MDBCardImage>
                    <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                        <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-1 w-100'>Шампунь для зволоження волосся Davines  WELLBEING Shampoo, 250 мл</p>
                        <MDBLink
                            color='primary'
                            href='!#'
                            style={{marginBottom: '1rem'}}
                            className='text-left p-0 pb-0 mb-1'
                        >
                            <p className='prod-describe black-text m-0 '>Зволожуючий шампунь для всіх типів волосся. Волосся приймає сяючий вигляд.
                            </p>
                        </MDBLink>
                        <p className='prod-price black-text py-1 text-left'>Ціна: <span>560 </span>грн</p>
                        <div>
                            <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                        </div>
                    </MDBCardBody>
                </Link>
            </MDBCard>
        )
    }
}

export default Item17;