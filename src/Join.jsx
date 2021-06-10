import React from 'react'
import { useState } from 'react'

const Join = () => {

   const[newinput, setnewinput] = useState({
     firstName: '',
     lastName: '',
     createid:'',
     password:'',
     cpassword:'',
     mobile:''
   })

   const inputChange = (e) => {
             const{name, value} = e.target; 
       
          setnewinput((previnput) =>{
               return{
                 ...previnput,
                 [name]: value
               }
          })
           
   }

             
   const pDefault = (e) =>{
    e.preventDefault();
   
   }

   const newJoin = () =>{
    alert('thanks for joining')
     }

    return (
        <>
          <div className='login'>
           <form onChange={pDefault} >
            <div className='main_inputs' onChange={inputChange}>
                  <input type='text' placeholder='First Name' 
                  value={newinput.firstName} onChange={inputChange} name='firstName'/><br />
                  <input type='text' placeholder='Last Name' 
                  value={newinput.lastName} onChange={inputChange} name='lastName' /><br />
                  <input type='text' placeholder='Create UserId' 
                  value={newinput.createid}  onChange={inputChange} name='createid' /><br />
                  <input type='password' placeholder='Create Password' 
                  value={newinput.password} onChange={inputChange} name='password' /><br />
                  <input type='password' placeholder='Confirm Password'
                   value={newinput.cpassword} onChange={inputChange} name='cpassword'/><br />
                  <input type='text' placeholder='Mobile No.' value={newinput.mobile} onChange={inputChange} 
                  name='mobile'/><br />
                 <button onClick={newJoin}>Join</button>
            </div>
          </form>
          </div>
        </>
    )
}

export default Join
