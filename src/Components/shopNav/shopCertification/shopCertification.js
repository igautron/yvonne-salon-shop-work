import React from 'react';
import './shopCertification.css'


class ShopJob extends React.Component  {


    render() {
        return (
            <div className='container mb-5'>
                <div className='job p-3'>
                    <h1 className='h1-responsive py-5 m-0 font-weight-bold text-center'>Співпраця</h1>
                    <div className='justify-content-center m-auto w-100'>
                        <img alt='' className='justify-content-center m-auto job-img w-100' src={require('./../../../img/works/show-3.jpg')} />
                    </div>
                    <p className='job-des w-100 text-center justify-content-center m-auto py-5'>
                        З питань співпраці телефонуйте Нам за номерами, вказаними на сторінці Контаків. Ми завжди очікуємо на нові пропозиції стосовно закупівлі якісних та елітних косметичних засобів.
                        Ми завжди раді отримувати нові пропозиції!
                        Ми завджи раді співпрацювати з Вами!
                    </p>
                </div>
            </div>
        )
    }
}


export default ShopJob;