import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Users() {
    const [users ,setUsers]=useState([]);
    

    const getUsers =async ()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_BURL}/users`);
         setUsers(data.users);
     
 

    }

    useEffect(() => {
        getUsers();
    },[users])

const deleteUser =(id)=>{
    axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);


}


    return (
<>


{users.map (user => 
<div className='container card1'>
 
    <div className="card h-100 card2">
      <div className="card-body">
        <h5 className="card-title"><h2>{user.userName}</h2></h5>
        <p className="card-text"> Email : {user.email}</p>
        <p className="card-text">Phone : {user.phone}</p>
        <a href={`mailto:${user.email}`} className="btncard">Email Me Now</a>
        <a onClick={()=>deleteUser(user._id)} className='btncard'>Delete </a>
        <Link to={`/users/${user._id}`}><a className='btncard'>Details</a></Link>
       
        
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>


)}
<div className='container link1'> <Link className="" to={'/create'}>Create</Link></div>
</>
    );


  
}
