import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import styles from '../Home/Home.module.css'
import headImg from '../Home/header1.jpg'
import axios from 'axios'
import Posts from '../../Components/Posts/Posts'


const Home = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/blog', {withCredentials: true})
            .then((res)=>{
            console.log(res);
            setPosts(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])
    return (
        <div className={styles.app__home}>
            <Navbar/>
            <img className={styles.app__home_header} src={headImg} alt="header photo" />
            <Posts posts={posts}/>
        </div>
    )
}

export default Home