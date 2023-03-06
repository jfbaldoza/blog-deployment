import axios from 'axios'
import React, { useState } from 'react'
import styles from '../MakePost/MakePost.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import uploadImg from '../MakePost/photo.png'

const MakePost = () => {

    const [postImage, setPostImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Conver to base64
    const handleImg = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file)
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onloadend = () =>{
            setPostImage(reader.result);
        }
    }

    // submit form

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/blog/new', {
            title: title, 
            desc: description, 
            photo: postImage
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err)
        }) 

        setPostImage('');
        setTitle('');
        setDescription('');

    }

    return (
        <div className={styles.app_makepost}>
            <Navbar/>
            <div className={styles.app_makepost_container}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.app_makepost_insertImg}>
                    <label htmlFor="file-upload" className='custom-file-upload'>
                        <img className={styles.app__makepost_img} src={postImage || uploadImg} alt="" />
                    </label>
                        <input 
                        type="file"
                        label="Image"
                        name="photo"
                        id='file-upload'
                        accept='.jpeg, .png, .jpg'
                        onChange={handleImg}
                        />
                    </div>
                    <div className={styles.app_makepost_content}>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" id="title" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                        <textarea name="content" cols="90" rows="10" value={description} onChange = {(e)=>setDescription(e.target.value)}></textarea>
                    </div>
                    <button className={styles.app_makepost_submit} type='submit'>Submit</button>
                </form>
            </div>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="file-upload" className='custom-file-upload'>
                    <img src={postImage.photo || uploadImg} alt="" />
                </label>
                <input 
                type="file"
                lable="Image"
                name="myFile"
                id='file-upload'
                accept='.jpeg, .png, .jpg'
                onChange={(e) => handleFileUpload(e)}
                />
                <h3>Doris Wilder</h3>
                <span>Designer</span>
                <button type='submit'>Submit</button>
            </form> */}
        </div>
                        )
}

export default MakePost

// function convertToBase64(file){
//     return new Promise((resolve, reject) => {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(file);
//         fileReader.onload = () => {
//             resolve(fileReader.result)
//         };
//         fileReader.onerror = (error) => {
//             reject(error)
//         }
//         })
//     }