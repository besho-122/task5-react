import React from 'react'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function Create() {
  const {register, control,handleSubmit}=useForm();
  const navigatio=useNavigate();
  const registerUser = async (soso)=>{
    const response = await axios.post(`${import.meta.env.VITE_BURL}/users`,soso);
    if (response.status === 201) {
      navigatio('/users');
    } 
  

  }
  return (  
  <form onSubmit={handleSubmit(registerUser)}>
  <div className='container form1'>
  <div className="form-floating mb-4">
  <input type="text" className="form-control" id="userName" placeholder="Enter Your User Name Here"  {...register("userName")}/>
  <label htmlFor="userName">User Name</label>
  </div>
  <div className="form-floating mb-4">
  <input type="email" className="form-control" id="Email" placeholder="Enter Your Email Here" {...register("email")} />
  <label htmlFor="Email">Email</label>
  </div>
  <div className="form-floating mb-4">
  <input type="password" className="form-control" id="Password" placeholder="Enter Your Password Here"  {...register("password")}/>
  <label htmlFor="Password">Password</label>
  </div>
  <div className="form-floating">
  <input type="text" className="form-control" id="Phone" placeholder="Enter Your Phone Here" {...register("phone")} />
  <label htmlFor="Phone">Phone</label>
  </div>
  <button type='submit'  className='btn3'>Add New User </button>
  </div>
  <DevTool control={control} />
  </form>
  )
}