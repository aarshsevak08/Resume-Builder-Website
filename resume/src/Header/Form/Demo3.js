
import {React, useState } from "react"
import {Link} from "react-router-dom"
// import axios from 'axios'
const Demo3 = () => {
     const[formdata3,setformdata]=useState("")
  function handlechange(event)
  {
    const name=event.target.name
    const value=event.target.value
    setformdata({...formdata3,[name]:value})
  }
  function handlesubmit(event)
  {
//     event.preventDefault()
//     axios.post('http://localhost:5000/server.js', {formdata3})
     console.log(formdata3)
  } 
  return (
    <div className="container-lg justify-content-center">
        <h2>Projects</h2>
    <form >
        <div className='row'>
            <div className='col-6'>
            <div className="mb-3 ">
                 <label htmlFor="Projects" className="form-label">Projects Title:</label>
                 <input type="text" className="form-control" id="Projects" name="project_title" onChange={handlechange} placeholder="Title"/>
            </div>
            <div className="mb-3 ">
                 <label htmlFor="overview" className="form-label">Overview:</label>
                 <input type="text" className="form-control" id="overview"  name="overview" onChange={handlechange} placeholder="Overview of the project"/>
            </div>
            <div className="mb-3 ">
                 <label htmlFor="github" className="form-label">Github Link:</label>
                 <input type="text" className="form-control" id="github"  name="github" onChange={handlechange} placeholder="eg sdhgrhjyt"/>
            </div>
            <div className="mb-3 ">
                 <label htmlFor="des" className="form-label">Project Description:</label>
                 <input type="text" className="form-control" id="des"  name="des_p" onChange={handlechange} placeholder="Line1"/>
                 <input type="text" className="form-control mt-2" id="des"   name="des_p1" onChange={handlechange}placeholder="Line2"/>
                 <input type="text" className="form-control mt-2" id="des"  name="des_p2" onChange={handlechange} placeholder="Line3"/>
            </div>
            </div>
            <div className="container-fluid justify-content-space-betwe">
                 {/* <button type="submit" className="btn btn-primary btn-md">Submit</button> */}
                 <Link to="/Demo4" className="btn btn-primary btn-md" onClick={handlesubmit}>Save & Next</Link>
        </div>
        </div>
    </form>
    </div>
  )
}

export default Demo3