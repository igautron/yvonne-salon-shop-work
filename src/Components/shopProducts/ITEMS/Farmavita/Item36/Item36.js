import {MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBLink} from "mdbreact";
import React from "react";
import {Link} from 'react-router-dom'

import './../../../shopProducts.css'




class Item36 extends React.Component {

    render() {
        return (
            <MDBCard className='border-0' >
                <Link to='/details36'
                    className='text-white text-center align-items-center p-0'>
                    <MDBCardImage
                        src={require('../../../../../img/catalogue/f36.jpg')}
                        className='img-fluid w-100 prod-img'
                        alt=''>
                    </MDBCardImage>
                    <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                        <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-1 w-100'>Ампули для лікування Farmavita AMETHYSTE Color Re-vital Restoring Lotion, 10 а</p>
                        <MDBLink
                            color='primary'
                            href='!#'
                            style={{marginBottom: '1rem'}}
                            className='text-left p-0 pb-0 mb-1'
                        >
                            <p className='prod-describe black-text m-0 '> Лосьйон для збереження кольору, інтенсивне відновлювальне лікування для фарбованого, сухого та пошкодженого волосся.
                            </p>
                        </MDBLink>
                        <p className='prod-price black-text py-1 text-left'>Ціна: <span>194 </span>грн</p>
                        <div>
                            <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                        </div>
                    </MDBCardBody>
                </Link>
            </MDBCard>
        )
    }
}

export default Item36;