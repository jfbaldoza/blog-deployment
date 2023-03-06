import styles from '../Posts/Posts.module.css'
import {Link} from 'react-router-dom'

export default function Posts({ posts }) {
    return (
        <div className={styles.app__post}>
            {posts.map((p, i)=>(
                <div className={styles.app__post_container} key={i}>
                    <img src={p.photo} alt="blog img" />
                    <Link to={`/blog-app/post/${p._id}`}>{p.title}</Link> 
                    <p>{new Date(p.createdAt).toDateString()}</p>
                    <p>{p.desc}</p>
                </div>
            ))}
        </div>
    );
}