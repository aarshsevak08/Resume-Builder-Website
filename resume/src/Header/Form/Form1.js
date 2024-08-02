import React,{useState} from 'react'

const Form1 = () => {
  const[form,setform]=useState({})
  const handlechange=(e)=>{
    const value=e.target.value
    setform(value)
  }
  const handlesubmit=(e)=>{
    alert(form.value)
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>Personal Details</label>
        <label>First Name</label>
          <input type='text' name='fname' placeholder='First name' onChange={handlechange}/>
        <label>Last Name</label>
          <input type='text' name='lname' placeholder='Last name' onChange={handlechange}/>
        <label>Profession</label>
          <input type='text' name='profession' placeholder='Eg Engineer' onChange={handlechange}/>
        <label>City</label>
          <input type='text' name='city' placeholder='City' onChange={handlechange}/>
        <label>Country</label>
          <input type='text' name='country' placeholder='Country' onChange={handlechange}/>
        <label>Phone</label>
          <input type='Number' name='phone' placeholder='Mobile No' onChange={handlechange}/>
        <label>Email</label>
          <input type='email' name='email' placeholder='Enter Email' onChange={handlechange}/>
      

        {/* Education section */}

        <label>Institute Name</label>
          <input type='text' name='institutename' placeholder='School,college' onChange={handlechange}/>
        <label>Location</label>
          <input type='text' name='location' placeholder='location' onChange={handlechange}/>
          <input type='submit' onChange={handlesubmit}/>
      </form>
    </div>
  )
}

export default Form1