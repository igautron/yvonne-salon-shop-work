import React from 'react';
import {Component} from 'react';
import '../shopAutorization/shopAutorization.css'



class ShopForgetPassword extends Component  {

    state = {
        form: {
            email: 'kluettgen@example.com',
            password: 'password',
            remember: true,
            device_name: 'chrome'
        },
        alert: '',
    }

    changeEmailHandler = (event) => {
        let formData = {...this.state.form}
        formData.email = event.target.value
        this.setState({form: formData})
    }

    changePasswordHandler = (event) => {
        let formData = {...this.state.form}
        formData.password = event.target.value
        this.setState({form: formData})
    }

    rememberInputChange = () => {
        let formData = {...this.state.form}
        formData.remember = !this.state.form.remember
        this.setState({form: formData})
    }



    goToRegistration = () => {
        this.props.goToRegistration()
    }

    render() {
        return (
            <div>
                <div className='w-100'>
                    <div className='m-0'>
                        <div className='card z-depth-0 border-0'>
                            <form className='text-center px-5 pb-5 pt-3' action="#!">
                                <input  value={this.state.form.email} type='email' className="form-control mb-4 form-reg" placeholder="Електронна пошта" />
                                <button onClick={this.loginSubmit} className="btn btn-reg font-weight-bold my-4 w-100" type="button">Отримати пароль</button>
                                <p>Ще не зареєстровані?
                                    <a href="#" onClick={this.goToRegistration} className='pl-3' >Зареєструватись</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





export default ShopForgetPassword;