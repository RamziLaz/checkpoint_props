import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './component/profile'
import photo from "../src/assets/1.jpg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <h1>props checkpoint </h1>
      <Profile style={{ backgroundColor: "pink" }}
        fullname="lazouni mohamed ramzi"
        bio="i software engineer and half full stack developer"
        profession="software engineer"        
      />
      <img style={{alignItems:"center", width:"50vw", height:"50vh"}} src={photo} alt="" />
    </div>
  )
}

export default App
