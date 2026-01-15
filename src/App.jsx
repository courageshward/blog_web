

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PostDetails from './pages/PostDetails'
import CreatePosts from './pages/CreatePosts'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/posts/post/' element={<PostDetails/>}/>
        <Route excat path='/write' element={<CreatePosts/>}/>
        <Route exact path='/edit/:id' element={<EditPost/>}/>
        <Route exact path='profile/:id' element={<Profile/>}/>
          </Routes>

      

    </div>
  )
}

export default App
