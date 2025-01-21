
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm  } from 'react-hook-form';
import axios from 'axios';


export default function Details() {
    const navigate= useNavigate();
    const {id}=useParams();

    const {register, handleSubmit , setValue} = useForm();
    
    const getDetails = async ()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);
        setValue("userName",data.user.userName);
        setValue("email",data.user.email);
        setValue("phone",data.user.phone);
    }
    
    useEffect(()=>{
        getDetails();
    },[]);

const updateUser = async (value)=>{
    const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,
    {
    userName:value.userName 
    });
    if (response.status===200){
        navigate('/users');
        alert("User Updated Successfully");
    }
}



  return (
  <form onSubmit={handleSubmit(updateUser)}>
    <div className='container form1'>
    <div className="form-floating mb-3">
    <input type="text" className="form-control" id="userName" placeholder="Enter Your User Name Here"  {...register("userName")} />
    <label htmlFor="userName">User Name</label>
    </div>
    <div className="form-floating mb-3">
    <input type="email" className="form-control" id="Email" placeholder="Enter Your Email Here" {...register("email")} disabled />
    <label htmlFor="Email">Email</label>
    </div>
    <div className="form-floating">
    <input type="text" className="form-control" id="Phone" placeholder="Enter Your Phone Here" {...register("phone")} disabled />
    <label htmlFor="Phone">Phone</label>
    </div>
    <button type='submit'  className='btn3'>Update</button>
    </div>
    
    </form>
  )
}
