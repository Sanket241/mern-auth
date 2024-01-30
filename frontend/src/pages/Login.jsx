import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth';
const URL = 'http://localhost:5000/api/auth/login';
export const Login = () => {
  const {storetokeninLs} = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  //handling the input value
  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      console.log("Login form",response);
      if(response.ok){
        const res_data = await response.json()
        storetokeninLs(res_data);
        console.log('res from server',res_data)
// localStorage.setItem("token",res_data.token) //is tarike se likhne ki wajaye hum context api use kar rahe ek jagah store karenge saara kuch 
        setUser({
          email:"",
          password:"",
        })
       alert("LOGIN")
       navigate('/')
      }
      else{
        console.log("INVALID crenditial")
      }
     
    } catch (error) {
      console.log(error)
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
                <h1 className="main-heading mb-3">Login-form</h1><br />
                <form onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleInput} placeholder="Enter your Email" id="email" autoComplete='off' required />
                  </div>

                  <div>
                    <label htmlFor="name">Password</label>
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
