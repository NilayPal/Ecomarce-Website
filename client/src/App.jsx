import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PagenotFound from "./pages/PagenotFound";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./User/Dashboard";
import PrivateRoute from "./components/Layout/Routes/Private";

function App() {
  
  return (
    <>
   <Routes>
    
    {/* Private and Protectrd Routes */}

    <Route path="/dashboard" element={<PrivateRoute/>}>
    <Route path="" element={<Dashboard/>}/>
    </Route>
    

    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/policy" element={<Policy/>}/>
    <Route path="*" element={<PagenotFound/>}/>
    
    {/* Login and register */}
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>

    <Route/>
   </Routes>
     
    </>
  )
}

export default App
