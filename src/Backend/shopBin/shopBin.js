import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom'
import './shopBin.css'
import {
    MDBBtn,
    MDBCol,
    MDBRow
} from 'mdbreact';



class ShopBin extends Component  {
    render() {
        return (
            <div className='rgba-purple-slight h-100'>
              <div className='w-100 h-100 bin-block p-3 py-5'>
                <div className='bin-container justify-content-center  z-depth-3 p-2'>
                    <div className='px-3 py-5 py-xl-5 py-lg-4 py-md-2 py-sm-2 bg-white h-100 px-xl-5 px-lg-5 px-md-5 px-sm-2 px-0'>
                            <div>
                                <h4 className='d-inline-block w-100 position-relative black-text text-center py-xl-2 py-lg-2 py-md-2 py-sm-1 py-1 mt-3 mt-xl-1 mt-lg-1'>Корзина</h4>
                                <button type="button" className="position-absolute d-inline float-right btn btn-close px-4 py-4 py-sm-4 py-md-4 py-lg-3 m-0 text-right bg-transparent border-0 z-depth-0">
                                    <i className="fas fa-times mr-2 "></i>
                                </button>
                            </div>
                            <form>
                                <label htmlFor="defaultFormCardNameEx" className="bin-label grey-text font-weight-light mb-1 pl-3">
                                    Товари
                                </label>
                            </form>
                            <MDBRow className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 ml-2 w-responsive">
                                <MDBCol className='col-2 p-0'>
                                    <img src="./01_color_shampoo.jpg" className="img-fluid w-25 h-25" alt="Responsive image" />
                                </MDBCol>
                                <MDBCol className='mx-1 col-5 col-sm-5 col-md-6 col-lg-6 col-xl-6 p-1 py-2 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                    <p className='order-item'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                </MDBCol>
                                <MDBCol className='col-1 p-1 py-3 mx-0'>
                                    <form>
                                        <input className='input-q' type='number' min='1' value='1'></input>
                                    </form>
                                </MDBCol>
                                <MDBCol className='col-1 p-1 mx-0'>
                                    <p className='px-lg-2 px-xl-2 px-md-2 px-sm-2 px-0 py-3'>1500<span>грн</span></p>
                                </MDBCol>
                                <MDBCol className='col-1 p-1 py-2'>
                                    <button type="button" className="btn btn-x px-4 py-2 m-0 text-center bg-transparent border-0 z-depth-0">
                                        <i className="fas fa-times mr-2"></i>
                                    </button>
                                </MDBCol>
                            </MDBRow>
                            <div className="text-center py-2 mt-0 d-inline-flex w-100 mb-4">
                                <MDBCol className='my-2 text-left order-price w-auto pr-0'><span className='font-weight-small font-smaller'>Сума до сплати:  <span className='font-weight-small'>  1564</span> грн</span></MDBCol>
                                <Link to='./shopOrder'>
                                    <MDBBtn className="btn-bin  my-0 px-3 text-center text-white secondary-color btn-outline-purple" type="submit">
                                        Оформити замовлення
                                    </MDBBtn>
                                </Link>
                            </div>
                       </div>
                  </div>
                  <div>

                  </div>
              </div>
            </div>
        )
    }
}

export default ShopBin;