import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../store/auth'
import {toast} from 'react-toastify'
const URL = 'http://localhost:5000/api/auth/register';
export const Register = () => {

  const navigate = useNavigate()
  const {storetokeninLs} = useAuth()
  const[user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });
  //handling the input value
  const handleInput=(e)=>{
    let name = e.target.name
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    })
  }
  const handleSubmit=async(e)=>{
    try{
    e.preventDefault();
    const response = await fetch(URL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    })
    const res_data = await response.json()
    console.log('res from server',res_data.extraDetails)
    if(response.ok){  
      
      storetokeninLs(res_data.token);
      // localStorage.setItem("token",res_data.token)

      setUser({
        username:"",
        email:"",
        phone:"",
        password:"",
      })
      toast.success("Register successfully")
      navigate("/login")
    }
    else{
      toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
    }
  }catch(error){
    console.log
  }
}
  return (
    <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registraion-image">
              <img src="/vite.svg" alt="" width="500" height="500" />
            </div>
            {/* let tackle registraction form */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">registration-form</h1><br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="username" value={user.name} onChange={handleInput} placeholder="Enter your Username" id="username" autoComplete='off' required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={user.email} onChange={handleInput} placeholder="Enter your Email" id="email" autoComplete='off' required />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="number" name="phone" value={user.phone} onChange={handleInput} placeholder="Enter your Phone" id="phone" autoComplete='off' required />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="Enter your Password" id="password" autoComplete='off' required />
                </div>
                <button type="submit" class="btn btn-submit"  >Register</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
    
    </>
  )
}
