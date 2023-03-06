import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Logout from './Components/Logout/Logout'
import BlogPost from './Pages/BlogPost/BlogPost'
import Home from './Pages/Home/Home'
import LandingPage from './Pages/LandingPage/LandingPage'
import LogIn from './Pages/LogIn/LogIn'
import MakePost from './Pages/MakePost/MakePost'
import Register from './Pages/Register/Register'



function App(props) {

	const [Authorized, setAuthorized] = useState("")

	return (
		<>
			<BrowserRouter>
                <Routes>
                    <Route path="/blog-app" element={<LandingPage/>}  />
					<Route path="/blog-app/login" element={<LogIn Authorized={Authorized} setAuthorized={setAuthorized}/>}/>
					<Route path="/blog-app/register" element={<Register Authorized={Authorized} setAuthorized={setAuthorized}/>}  />
					<Route path="/blog-app/home" element={<Home/>}  />
					<Route path='/blog-app/post/:id' element={<BlogPost/>} />
					<Route path='/blog-app/logout' element={<Logout/>} />
					<Route path='/blog-app/write' element={<MakePost/>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
