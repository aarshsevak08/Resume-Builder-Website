
import {React, useState } from "react"
import {Link} from "react-router-dom"
// import axios from "axios"
const Demo1 = () => {
    const[formdata,setformdata]=useState("")
  function handlechange(event)
  {
    const name=event.target.name
    const value=event.target.value
    setformdata({...formdata,[name]:value})
  }
  function handlesubmit(event)
  {
  //   event.preventDefault()
  //   axios.post('http://localhost:5000/server.js', {formdata1})
    console.log(formdata)
   }
  return (
    <div className='container-lg justify-content-center'>
        <h2>Education Details</h2>
        <form>
            <div className='row'>
                <div className='col-6'>
                    <div className='mb-3'>
                        <label htmlFor="institute name" className="form-label">Institue/College Name:</label>
            `            <input type="text" className="form-control" id="institute name" name="college" onChange={handlechange} placeholder="eg LJ"/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="pass-out" className="form-label">Year of Passing Out:</label>
            `            <input type="date" className="form-control" id="pass-out" name="year" onChange={handlechange} placeholder="eg 2023"/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="School" className="form-label">School Name:</label>
            `            <input type="text" className="form-control" id="School" name="school" onChange={handlechange} placeholder="eg Saint Francis School"/>
                    </div>
           
                    <div className='mb-3'>
                        <label htmlFor="pass-out" className="form-label">Year of Passing Out:</label>
            `            <input type="date" className="form-control" id="pass-out" name="yearc" onChange={handlechange} placeholder="eg 2023"/>
                </div>
                </div>
                    <div className="container-fluid justify-content-space-between">
                         {/* <button type="submit" className="btn btn-primary btn-md">Submit</button> */}
                         <Link to="/Demo2"  className="btn btn-primary btn-md" onClick={handlesubmit}>Save & Next</Link>
                     </div>
                 </div>
        </form>
    </div>
  )
}

export default Demo1