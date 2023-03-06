import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Logout = () => {

    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/api/logout", {withCredentials:true})
            .then(()=>{
                console.log("Logged Out")
                navigate("/blog-app")
            })
    
    }, [])
    
}

export default Logout