import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home1 from './Components/Home1'
import PageNotFound from './Pages/PageNotFound'
import {Route,Routes} from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from './Pages/Login'
import Signup from './Pages/Signup'


function App() {
  
  return (
    <>
     <Header/>
     <Routes>
      <Route path={'/'} element={<Home1/>}/>   
      <Route path={'/Login'} element={<Login/>}/>
      <Route path={'/Signup'} element={<Signup/>}/>
      <Route path={'/PageNotFound'} element={<PageNotFound/>}/>
     </Routes>
     <Footer/>

    </>
  )
}

export default App
