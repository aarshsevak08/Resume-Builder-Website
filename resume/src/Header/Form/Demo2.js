
import {React, useState } from "react"
import {Link} from "react-router-dom"
// import axios from "axios"

const Demo2 = () => {
  const[formdata2,setformdata]=useState("")
  function handlechange(event)
  {
    const name=event.target.name
    const value=event.target.value
    setformdata({...formdata2,[name]:value})
  }
  function handlesubmit(event)
  {
    // event.preventDefault()
    // axios.post('http://localhost:5000/server.js', {formdata2})
    console.log(formdata2)
  }
  return (
  <div className="container-lg justify-content-center">
      <h2>Work Experience</h2>
    <form action='/Demo3'>
        <div className='row'>
          <div className='col-6'>
        <div className="mb-3 ">
          <label htmlFor="job" className="form-label">Title:</label>
          <input type="text" className="form-control" id="job" name="title" onChange={handlechange} placeholder="Work "/>
        </div>  
        <div className="mb-3 ">
          <label htmlFor="cname" className="form-label">Compamy Name:</label>
          <input type="text" className="form-control" id="cname" name="cname" onChange={handlechange} placeholder="eg Amazon"/>
        </div>  
        <div className="mb-3 ">
          <label htmlFor="certificate" className="form-label">Certificate Link:</label>
          <input type="text" className="form-control" id="certificate" name="cert_link" onChange={handlechange} placeholder="eg bfefefo"/>
        </div>
        <div className="mb-3 ">
          <label htmlFor="location" className="form-label">Location:</label>
          <input type="text" className="form-control" id="location" name="Location" onChange={handlechange} placeholder="eg Hyderabad"/>
        </div>  
        <div className="mb-3 ">
          <label htmlFor="sd" className="form-label">Starting Date:</label>
          <input type="date" className="form-control" id="sd" placeholder="dd-mm-yy" name="sdate" onChange={handlechange}/>
        </div>  
        <div className="mb-3 ">
          <label htmlFor="ed" className="form-label">End Date:</label>
          <input type="date" className="form-control" id="ed" placeholder="dd-mm-yy" name="edate" onChange={handlechange}/>
        </div> 
        <div className="mb-3 ">
          <label htmlFor="des" className="form-label">Enter your Work Description:</label>
          <input type="text" className="form-control" id="des" name="des" onChange={handlechange} placeholder="Line1"/>
          <input type="text" className="form-control mt-2" id="des" name="des1" onChange={handlechange} placeholder="Line2"/>
          <input type="text" className="form-control mt-2" id="des" name="des2" onChange={handlechange} placeholder="Line3"/>
        </div>  
        </div>
        </div>
        <div className="container-fluid justify-content-space-betwe">
             {/* <button type="submit" className="btn btn-primary btn-md">Submit</button> */}
             <Link to="/Demo3" className="btn btn-primary btn-md" onClick={handlesubmit}>Save & Next</Link>
        </div>
    </form>
  </div>
  )
}

export default Demo2