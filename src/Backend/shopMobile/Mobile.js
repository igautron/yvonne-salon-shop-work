import React from 'react';
import './Mobile.css'

class Mobile extends React.Component {

    render() {
        return (
            <div className='container w-100 h-100'>
                <div className='mobileme position-absolute float-right bottom'>
                    <img className='mobileme-image' src={require('./../../img/pngegg.png')}/>
                </div>
            </div>
        )
    }
};

export default Mobile;