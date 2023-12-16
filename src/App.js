import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
 const [mode,setmode]=useState('light')
 const [alert,setAlert]=useState(null)

 const showAlert = (message,type)=>{
  setAlert({
   msg: message,
   type: type
  })
  setTimeout(()=>
  setAlert(null),1500)
 }

 const [message,setmessage]=useState('Enable dark mode')
 const toggleMode = ()=>{
  if(mode==='light')
  {
   setmode('dark')
   setmessage('Enable light mode')
   document.body.style.backgroundColor='#212529';
   document.body.style.color='white'
   showAlert("Dark mode has been enabled","success")
   // setInterval(()=>{
   //  document.title='TextUtils is Amazing'
   // },2000)
   // setInterval(()=>{
   //  document.title='Install TextUtils'
   // },1500)
  }
  else
  {
   setmode('light')
   setmessage('Enable dark mode') 
   document.body.style.backgroundColor='#f8f9fa';
   document.body.style.color='black'
   showAlert("Light mode has been enabled","success")
  }
 }
 return (
  <>
  {/* <BrowserRouter> */}
  <Navbar title="Reacting to React" logopng="./logo192.png" mode={mode} toggleMode={toggleMode} messagemode={message}/>
  <Alert alert={alert}/>
    {/* <Routes> 
        <Route path="about" element={<About />}></Route>
        <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter Text To Analyze Below' mode={mode} />}></Route>
    </Routes>
  </BrowserRouter> */}
  <TextForm showAlert={showAlert} heading='Enter Text To Analyze Below' mode={mode} />
  </>
 );
}

export default App;