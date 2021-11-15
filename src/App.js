import React,{useState} from 'react'
import DPInput from "./myownproject/DPInput"
import DPImage from "./myownproject/DPImage"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  const [userFirstName, setUserFirstName] = useState("")
  const [userSecondName, setUserSecondName] = useState("")
  const [userCountry, setUserCountry] = useState("")
  const [userLocation, setUserLocation] = useState("")
  const [userImage, setUserImage] = useState("")

  return (
    <div>
      
      <Router>
        <Switch>
         <Route exact path="/">
            <DPInput 
            userFirstName={userFirstName} 
            setUserFirstName={setUserFirstName}
            userSecondName={userSecondName}
            setUserSecondName={setUserSecondName}
            userCountry={userCountry}
            setUserCountry={setUserCountry}
            userLocation={userLocation}
            setUserLocation={setUserLocation}
            userImage={userImage}
            setUserImage={setUserImage}
            
            />
         </Route>
         <Route exact path="/detail">
           <DPImage
                 userFirstName={userFirstName} 
                 userSecondName={userSecondName}
                 userImage={userImage}
                 userCountry={userCountry}
                 userLocation={userLocation}
                 />
         </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
