import React, { useState } from 'react'

export const Register = () => {
  const[user,setUser]=useState({
    name:"",
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
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user)
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
                  <input type="text" name="name" value={user.name} onChange={handleInput} placeholder="Enter your Username" id="username" autoComplete='off' required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" value={user.email} onChange={handleInput} placeholder="Enter your Email" id="email" autoComplete='off' required />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="number" name="phone" value={user.phone} onChange={handleInput} placeholder="Enter your Phone" id="phone" autoComplete='off' required />
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
