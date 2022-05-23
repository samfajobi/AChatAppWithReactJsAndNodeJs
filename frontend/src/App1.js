import App from "./App"
import Home from "./component/Home/Home"
import SignUp from './component/SignUp/SignUp'
import LoginIn from "./component/LoginIn/LoginIn"
import DemoLogin from "./component/LoginIn/DemoLogin"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"




const App1 = () => {
  return (
    <div>
     
    
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>  
          <Route exact path='/signin' element={<SignUp/>}/> 
          <Route exact path='/login' element={<LoginIn/>}/> 
          <Route exact path='/demologin' element={<DemoLogin/>}/>   
          <Route exact path='/chat' element={<App/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App1