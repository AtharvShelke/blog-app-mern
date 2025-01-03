
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Create from './pages/Create';
import { UserContextProvider } from './context/UserContext.jsx';
import Profile from './pages/Profile.jsx';

const App = () => {
  return (
    <>
    <UserContextProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/blog/:id' element={<Blog/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
      
    </>
  )
}

export default App