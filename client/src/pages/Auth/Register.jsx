import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";

const Register = () => {

  const [name,setName] = useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const[phone,setPhone]=useState('')
  const [address,setAddress]=useState('')

  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,phone,password,address);
    toast.success('Register Succesfull');
  }
  return (
    <Layout title={"Register - Ecomarce app"}>
      <div className="register">
        <h1>Register Page</h1>
        <form onSubmit={handelSubmit}>

        <div className="mb-3">
            
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Name"
              required
            />
          </div>

          <div className="mb-3">
            
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="mb-3">
           
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Password"
              required
            />
          </div>

          <div className="mb-3">
           
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Phone-No"
              required
            />
          </div>

          <div className="mb-3">
           
            <input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Address"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
