import React, { useState } from 'react'
import styles from '../LogIn/LogIn.module.css'
import loginImg from '../LogIn/loginImg.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LogIn = () => {

    const navigate = useNavigate()
    const [state, setState] = useState({
        login: {
            email: '',
            password: ''
        }
    })

        const { login } = state;

        const handleLoginInputs = (e) => {
            setState({...state, login: {...state.login, [e.target.name]: e.target.value}})
        }

        const handleLogin = (e) => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/login', login, {withCredentials: true})
            .then((response)=> {
                console.log(response)
                navigate("/blog-app/home")
            })
            .catch(err => console.log(err))
            
        }


    return (
        <div className={styles.app__login}>
            <div className={styles.app__left}>
                <img src={loginImg} alt="login photo" />
                <p>“Don’t be afraid to share what you know, because you know it better than anyone else!”</p>
            </div>
            <div className={styles.app__right}>
                <h1>Log In</h1>
                <form onSubmit={handleLogin} className={styles.app__right_form}>
                    <div>
                        <label>Email address:</label>
                        <input onChange={handleLoginInputs} type="email" name="email" autoComplete="email"/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input onChange={handleLoginInputs} type="password" name="password" autoComplete="password"/>
                    </div>
                    <input type="submit" value="Log In" />
                </form>
            </div>
        </div>
    )
}

export default LogIn