import React, { useState } from 'react'
import styles from '../Register/Register.module.css'
import registerImg from '../Register/registerImg.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = (props) => {

    const navigate = useNavigate()
    const [state, setState] = useState({
        
        registration: { 
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

        const { register } = state;

        const handleRegInputs = (e) => {
            setState({...state, register: {...state.register, [e.target.name]: e.target.value}})
        }

        const handleRegistration = (e) => {
            e.preventDefault();
            props.setAuthorized("")
            axios.post('http://localhost:8000/api/register', register, {withCredentials: true})
            .then(res => console.log(res))
            .catch(err => console.log(err))
            navigate("/blog-app/login")
        }

    return (
        <div className={styles.app__register}>
            <div className={styles.app__register_left}>
                <img src={registerImg} alt="register photo" />
            </div>
            <div className={styles.app__register_right}>
                <h1>User Registration</h1>
                <form onSubmit={handleRegistration} className={styles.app__register_form}>
                    <div>
                        <label>First Name:</label>
                        <input onChange={handleRegInputs} type="text" name="firstName" />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input onChange={handleRegInputs} type="text" name="lastName" />
                    </div>
                    <div>
                        <label>Email address:</label>
                        <input onChange={handleRegInputs} type="email" autoComplete="email" name="email" />
                        <p className={styles.app__register_warning}>We'll never share your email</p>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input onChange={handleRegInputs} type="password" autoComplete="new-password" name="password" />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input onChange={handleRegInputs} type="password" autoComplete="new-password" name="confirmPassword" />
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    )
}

export default Register