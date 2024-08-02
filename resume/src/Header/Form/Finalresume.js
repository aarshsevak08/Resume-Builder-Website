import React, { useContext,useRef } from 'react'
import { FormData1 } from './Demo'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styles from './Finalresume.module.css'
function Finalresume() {
    const value = useContext(FormData1);
    console.log(value);
    const pdfRef=useRef()
    const downloadPDF=()=>{
      const input=pdfRef.current
      html2canvas(input).then((canvas)=>{
        const imgData=canvas.toDataURL('image/png')
        const pdf=new jsPDF('p','mm','a4',true)
        const pdfwidth=pdf.internal.pageSize.getWidth()
        const pdfHeight=pdf.internal.pageSize.getHeight()
        const imgWidth=canvas.width
        const imgHeight=canvas.height
        const ratio=Math.min(pdfwidth/imgWidth,pdfHeight/imgHeight)
        const imgX=(pdfwidth-imgWidth*ratio)/2
        const imgY=30
        pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio)   
        pdf.save('resume.pdf')
      })
    }
  return (
    <>    <div ref={pdfRef} className={styles.container}>
        <h1 className={styles.name}>{value.fname} {value.lname}</h1> 
        <div className={styles.personal}>
        <h4>Personal Details</h4>
        </div>
        <ul>

          <li>{value.profession}</li>
          <li>{value.city},{value.country}</li>
          <li>{value.phone}</li>
          <li>{value.email}</li>
        </ul>
        <div className={styles.Education}>
        <h4>Education Details</h4> 
        </div>
        <ul>
          <li>{value.college} {value.year}</li>
          <li>{value.school} {value.yearc}</li>
        </ul> 
        <div className={styles.Skills}>
        <h4>Skills</h4>
        </div>
        <ul>
          <li>{value.Skill}</li>
          <li>{value.Skill1}</li>
          <li>{value.Skill2}</li>
        </ul>
        <div className={styles.work}>    
          <h4>Work Experience</h4>
        </div>
        <h5>Title</h5>

        <ul>
          <li>{value.cname}</li>
          <li><a href='{value.cert_link}'>{value.cert_link}</a></li>
          <li>{value.Location}</li>
          <li>{value.sdate}-{value.edate}</li>
          <li>{value.des} {value.des1} {value.des2}</li>
        </ul>
        <div className={styles.projects}>
        <h4>Projects</h4>
        </div>
        <h5>{value.project_title}</h5>
        <ul>
          <li>{value.overview}</li>
          <li><a href="{value.github}">{value.github}</a></li>
          <li>{value.des_p} {value.des_p1} {value.des_p2}</li>
        </ul>
        <div className={styles.achievement}>
        <h4>Achievements</h4>
        </div>
        <ul>
          <li>{value.achivement}</li>
          <li>{value.achivement1} {value.achivement2}</li>
        </ul>

    </div>
      <div className='row text-center mt-5'>
       <button className={styles.button} onClick={downloadPDF}>Download Pdf</button>  
    </div>
    </>

  )
}

export default Finalresume