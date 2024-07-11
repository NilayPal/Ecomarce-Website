
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Register.css'

const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate();
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post('http://localhost:8000/api/v1/auth/login', {
            email, 
            password,
          });
          if (res && res.data.success) {
            alert('User Login succesfully')
           // toast.success(res.data.message);
            navigate('/');
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error('Something went wrong from catch part');
        }
      };



  return (
    <Layout title={"Login - Ecommerce app"}>
      <div className="form-container">
       
        <form onSubmit={handleSubmit}>
        <h1 className="title">Login Form</h1>
         
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your Password"
              required
            />
          </div>
         

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      <Toaster />
    </Layout>
  )
}

export default Login
