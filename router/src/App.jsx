import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Navbar from "./components/Navbar.jsx";
import Mission from "./components/Mission.jsx";
import WrongPath from "./components/WrongPath.jsx";
import Contact from "./components/Contact.jsx";
import Email from "./components/SubComponents/Email.jsx";
import LinkedIn from "./components/SubComponents/Linkedln.jsx";
import Github from "./components/SubComponents/Github.jsx";

function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/mission" element={<Mission/>} />
            <Route path="/contact" element={<Contact/>}>
                <Route path="email" element={<Email/>}/>
                <Route path="linkedln" element={<LinkedIn/>}/>
                <Route path="github" element={<Github/>}/>
            </Route>
            <Route path="*" element={<WrongPath/>} />
        </Routes>

    </div>
  )
}

export default App
