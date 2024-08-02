
import {React, useState } from "react"
import {Link} from "react-router-dom"
// import axios from "axios"

const Demo4 = () => {
  const[formdata4,setformdata]=useState("")
  function handlechange(event)
  {
    const name=event.target.name
    const value=event.target.value
    setformdata({...formdata4,[name]:value})
  }
  function handlesubmit(event)
  {
    // event.preventDefault()
    // axios.post('http://localhost:5000/server.js', {formdata4})
    console.log(formdata4)
  } 
  return (
    <div className="container-lg justify-content-center">
        <h2>Achivements:</h2>
    <form>
        <div className='row'>
        <div className="mb-3 ">
          <label htmlFor="achivement" className="form-label">Achivements</label>
          <input type="text" className="form-control" id="achivements" name='achivement' onChange={handlechange} placeholder="Line1"/>
          <input type="text" className="form-control" id="achivements"  name='achivement1' onChange={handlechange} placeholder="Line2"/>
          <input type="text" className="form-control" id="achivements"  name='achivement2' onChange={handlechange} placeholder="Line3"/>
        </div> 
        </div>
        <div className="container-fluid justify-content-space-betwe">
              {/* <button type="submit" className="btn btn-primary btn-md">Submit</button> */}
              <Link to="/Demo5" className="btn btn-primary btn-md" onClick={handlesubmit}>Save & Next</Link>
        </div>
    </form>
    </div>
  )
}

export default Demo4