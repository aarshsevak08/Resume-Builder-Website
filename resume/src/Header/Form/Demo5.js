import {React, useState } from "react"
import {Link} from "react-router-dom"

// import axios from 'axios'
const Demo5 = () => {
  const[formdata5,setformdata]=useState("")
  function handlechange(event)
  {
    const name=event.target.name
    const value=event.target.value
    setformdata({...formdata5,[name]:value})
  }
  function handlesubmit(event)
  {
    // event.preventDefault()
    // axios.post('http://localhost:5000/server.js', {formdata5})
    console.log(formdata5)
  } 
  return (
    <div className="container-lg justify-content-center">
        <h2>Other Details</h2>
    <form>
        <div className='row'>
        <div className="col-6">
        <div className="mb-3 ">
          <label htmlFor="others" className="form-label">Other Details:</label>
          <input type="text" className="form-control" id="other"name="line1"placeholder="Line1" onChange={handlechange}/>
          <input type="text" className="form-control mt-2" id="other" name="line2" placeholder="Line2" onChange={handlechange}/>
          <input type="text" className="form-control mt-2" id="other" name="line3" placeholder="Line3" onChange={handlechange}/>
        </div>    
        </div>
        </div>
        <div className="container-fluid justify-content-space-betwe">
          <Link to="/FinalResume"  className=  "btn btn-primary btn-md" onClick={handlesubmit}>Submit</Link>
           {/* <button type="submit" className="btn btn-primary btn-md" onClick={handlesubmit}>Submit</button> */}
           {/* <button type="submit" className="btn btn-primary btn-md">Save & Next</button> */}
        </div>
    </form>
    </div>
  )
}

export default Demo5