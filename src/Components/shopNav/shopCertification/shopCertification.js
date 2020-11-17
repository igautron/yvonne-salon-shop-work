import React from 'react';
import './shopCertification.css'


import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdbreact';


class ShopCertification extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <MDBContainer>
                <h1 className='h1-responsive font-weight-bolder m-0 pt-5 pt-xl-5 pt-lg-5 pt-md-5 pt-sm-5 pt-5 pb-4 pb-xl-5 pb-lg-5 pb-md-5 pb-sm-4'>СЕРТИФІКАЦІЯ</h1>
                <div className="mdb-lightbox no-margin mb-lg-5 mb-xl-5 mb-md-5 mb-sm-2 mb-1 mx-2">
                    <MDBRow>
                        <MDBCol md="4">
                            <figure>
                                <img
                                    src={require('./../../../img/salon/2a2f6e321d5f8d12f31b2becd35cfe2c.jpg')}
                                    alt="Gallery"
                                    className="img-fluid"
                                    onClick={() =>
                                        this.setState({ photoIndex: 0, isOpen: true })
                                    }
                                />
                            </figure>
                        </MDBCol>
                        <MDBCol md="4">
                            <figure>
                                <img
                                    src={require('./../../../img/salon/2a2f6e321d5f8d12f31b2becd35cfe2c.jpg')}
                                    alt="Gallery"
                                    className="img-fluid"
                                    onClick={() =>
                                        this.setState({ photoIndex: 1, isOpen: true })
                                    }
                                />
                            </figure>
                        </MDBCol>
                        <MDBCol md="4">
                            <figure>
                                <img
                                    src={require('./../../../img/salon/2a2f6e321d5f8d12f31b2becd35cfe2c.jpg')}
                                    alt="Gallery"
                                    className="img-fluid"
                                    onClick={() =>
                                        this.setState({ photoIndex: 2, isOpen: true })
                                    }
                                />
                            </figure>
                        </MDBCol>
                        <MDBCol md="4">
                            <figure>
                                <img
                                    src={require('./../../../img/salon/2a2f6e321d5f8d12f31b2becd35cfe2c.jpg')}
                                    alt="Gallery"
                                    className="img-fluid"
                                    onClick={() =>
                                        this.setState({ photoIndex: 3, isOpen: true })
                                    }
                                />
                            </figure>
                        </MDBCol>
                        <MDBCol md="4">
                            <figure>
                                <img
                                    src={require('./../../../img/salon/2a2f6e321d5f8d12f31b2becd35cfe2c.jpg')}
                                    alt="Gallery"
                                    className="img-fluid"
                                    onClick={() =>
                                        this.setState({ photoIndex: 4, isOpen: true })
                                    }
                                />
                            </figure>
                        </MDBCol>
                        <MDBCol md="4">
                            <figure>
                                <img
                                    src={require('./../../../img/salon/2a2f6e321d5f8d12f31b2becd35cfe2c.jpg')}
                                    alt="Gallery"
                                    className="img-fluid"
                                    onClick={() =>
                                        this.setState({ photoIndex: 5, isOpen: true })
                                    }
                                />
                            </figure>
                        </MDBCol>
                        <MDBCol md="4">
                            <figure>
                                <img
                                    src={require('./../../../img/salon/2a2f6e321d5f8d12f31b2becd35cfe2c.jpg')}
                                    alt="Gallery"
                                    className="img-fluid"
                                    onClick={() =>
                                        this.setState({ photoIndex: 6, isOpen: true })
                                    }
                                />
                            </figure>
                        </MDBCol>
                        <MDBCol md="4">
                            <figure>
                                <img
                                    src={require('./../../../img/salon/2a2f6e321d5f8d12f31b2becd35cfe2c.jpg')}
                                    alt="Gallery"
                                    className="img-fluid"
                                    onClick={() =>
                                        this.setState({ photoIndex: 7, isOpen: true })
                                    }
                                />
                            </figure>
                        </MDBCol>
                        <MDBCol md="4">
                            <figure>
                                <img
                                    src={require('./../../../img/salon/2a2f6e321d5f8d12f31b2becd35cfe2c.jpg')}
                                    alt="Gallery"
                                    className="img-fluid"
                                    onClick={() =>
                                        this.setState({ photoIndex: 8, isOpen: true })
                                    }
                                />
                            </figure>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
        )
    }
}


export default ShopCertification;