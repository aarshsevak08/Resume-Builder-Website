import { React, useState, createContext } from "react";
import { Link } from "react-router-dom"
import Finalresume from "./Finalresume";

const FormData1 = createContext();

const Demo = () => {
  const [formdata, setformdata] = useState("")
  function handlechange(event) {
    const name = event.target.name
    const value = event.target.value
    setformdata({ ...formdata, [name]: value })
  }
 
  return (
    <div>
      <fieldset>
    <div className="container-lg justify-content-center">
      <h2>Personal Details</h2>
      <form >
        <div className="row">
          <div className="col-6">
            <div className="mb-3 ">
              <label htmlFor="firstname" className="form-label">First Name:</label>
              <input type="text" className="form-control" id="firstname" name="fname" placeholder="eg kishan" onChange={handlechange} />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">Last Name:</label>
              <input type="text" className="form-control" id="lastname" name="lname" placeholder="eg parmar" onChange={handlechange} />
            </div>
            <div className="mb-3">
              <label htmlFor="profession" className="form-label">Profession:</label>
              <input type="text" className="form-control" id="profession" name="profession" placeholder="eg Software Engineer" onChange={handlechange} />
            </div>
            <div className="mb-3">
              <label htmlFor="City" className="form-label">City:</label>
              <input type="text" className="form-control" id="city" name="city" placeholder="eg Ahmedabad" onChange={handlechange} />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="Country" className="form-label">Country:</label>
              <input type="text" className="form-control" id="country" name="country" placeholder="eg India" onChange={handlechange} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Mobile No:</label>
              <input type="tel" className="form-control" id="phone" name="phone" placeholder="eg 9854145163" onChange={handlechange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="kishan@gmail.com" onChange={handlechange} />
            </div>
          </div>
        </div>
        {/*         
        <div className="container-fluid justify-content-space-betwe"> */}
        {/* <button type="submit" className="btn btn-primary btn-md">Submit</button> */}
        {/* <Link to="/Demo1"  className=  "btn btn-primary btn-md" onClick={handlesubmit}>Save & Next</Link>
        </div> */}
        <div className='container-lg justify-content-center'>
          <h2>Education Details</h2>
          {/* <form> */}
          <div className='row'>
            <div className='col-6'>
              <div className='mb-3'>
                <label htmlFor="institute name" className="form-label">Institue/College Name:</label>
                <input type="text" className="form-control" id="institute name" name="college" onChange={handlechange} placeholder="eg LJ" />
              </div>
              <div className='mb-3'>
                <label htmlFor="pass-out" className="form-label">Year of Passing Out:</label>
                <input type="date" className="form-control" id="pass-out" name="year" onChange={handlechange} placeholder="eg 2023" />
              </div>
              <div className='mb-3'>
                <label htmlFor="School" className="form-label">School Name:</label>
                <input type="text" className="form-control" id="School" name="school" onChange={handlechange} placeholder="eg Saint Francis School" />
              </div>

              <div className='mb-3'>
                <label htmlFor="pass-out" className="form-label">Year of Passing Out:</label>
                <input type="date" className="form-control" id="pass-out" name="yearc" onChange={handlechange} placeholder="eg 2023" />
              </div>
            </div>
          </div>
        </div>
        <div className='container-lg justify-content-center'>
          <h2>Skills</h2>
          {/* <form> */}
          <div className='row'>
            <div className='col-6'>
              <div className='mb-3'>
                <label htmlFor="institute name" className="form-label">Skills</label>
                <input type="text" className="form-control" id="institute name" name="Skill" onChange={handlechange} placeholder="Techinal Skills...."/>
                <input type="text" className="form-control" id="des" name="Skill1" onChange={handlechange} placeholder="Line1" />
                <input type="text" className="form-control mt-2" id="des" name="Skill2" onChange={handlechange} placeholder="Line2" />
              </div>
            </div>
         </div>  
        </div>
        <div className="container-lg justify-content-center">
          <h2>Work Experience</h2>
          <div className='row'>
            <div className='col-6'>
              <div className="mb-3 ">
                <label htmlFor="job" className="form-label">Title:</label>
                <input type="text" className="form-control" id="job" name="title" onChange={handlechange} placeholder="Work " />
              </div>
              <div className="mb-3 ">
                <label htmlFor="cname" className="form-label">Compamy Name:</label>
                <input type="text" className="form-control" id="cname" name="cname" onChange={handlechange} placeholder="eg Amazon" />
              </div>
              <div className="mb-3 ">
                <label htmlFor="certificate" className="form-label">Certificate Link:</label>
                <input type="text" className="form-control" id="certificate" name="cert_link" onChange={handlechange} placeholder="eg bfefefo" />
              </div>
              <div className="mb-3 ">
                <label htmlFor="location" className="form-label">Location:</label>
                <input type="text" className="form-control" id="location" name="Location" onChange={handlechange} placeholder="eg Hyderabad" />
              </div>
              <div className="mb-3 ">
                <label htmlFor="sd" className="form-label">Starting Date:</label>
                <input type="date" className="form-control" id="sd" placeholder="dd-mm-yy" name="sdate" onChange={handlechange} />
              </div>
              <div className="mb-3 ">
                <label htmlFor="ed" className="form-label">End Date:</label>
                <input type="date" className="form-control" id="ed" placeholder="dd-mm-yy" name="edate" onChange={handlechange} />
              </div>
              <div className="mb-3 ">
                <label htmlFor="des" className="form-label">Enter your Work Description:</label>
                <input type="text" className="form-control" id="des" name="des" onChange={handlechange} placeholder="Line1" />
                <input type="text" className="form-control mt-2" id="des" name="des1" onChange={handlechange} placeholder="Line2" />
                <input type="text" className="form-control mt-2" id="des" name="des2" onChange={handlechange} placeholder="Line3" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg justify-content-center">
          <h2>Projects</h2>
          <div className='row'>
            <div className='col-6'>
              <div className="mb-3 ">
                <label htmlFor="Projects" className="form-label">Projects Title:</label>
                <input type="text" className="form-control" id="Projects" name="project_title" onChange={handlechange} placeholder="Title" />
              </div>
              <div className="mb-3 ">
                <label htmlFor="overview" className="form-label">Overview:</label>
                <input type="text" className="form-control" id="overview" name="overview" onChange={handlechange} placeholder="Overview of the project" />
              </div>
              <div className="mb-3 ">
                <label htmlFor="github" className="form-label">Github Link:</label>
                <input type="text" className="form-control" id="github" name="github" onChange={handlechange} placeholder="eg sdhgrhjyt" />
              </div>
              <div className="mb-3 ">
                <label htmlFor="des" className="form-label">Project Description:</label>
                <input type="text" className="form-control" id="des" name="des_p" onChange={handlechange} placeholder="Line1" />
                <input type="text" className="form-control mt-2" id="des" name="des_p1" onChange={handlechange} placeholder="Line2" />
                <input type="text" className="form-control mt-2" id="des" name="des_p2" onChange={handlechange} placeholder="Line3" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg justify-content-center">
          <h2>Achivements:</h2>

          <div className='row'>
            <div className="mb-3 ">
              <label htmlFor="achivement" className="form-label">Achievements</label>
              <input type="text" className="form-control" id="achivements" name='achivement' onChange={handlechange} placeholder="Line1" />
              <input type="text" className="form-control" id="achivements" name='achivement1' onChange={handlechange} placeholder="Line2" />
              <input type="text" className="form-control" id="achivements" name='achivement2' onChange={handlechange} placeholder="Line3" />
            </div>
          </div>
        </div>
      </form>
      </div>
    </fieldset>
      <FormData1.Provider value={formdata}>
        <Finalresume />
      </FormData1.Provider>

    </div>
  
  )
};

export default Demo;
export { FormData1 };


