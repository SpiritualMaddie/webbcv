import React from 'react';
import RESUME from "../cv-data.json";
import picMe from "../img/me.png";

export default function CvPage() {
    console.log('start')
    console.log(RESUME);
    return(     
      <div className='container-MainContent'>

            <section className="main-content">
                <section className="main-content">
                <h1 className="col" id="welcome">CV</h1><br />
                <img className="profile-pic-big" src={picMe} alt="Picture of me" />
                </section>
                <div className="cardCv col">
                <h4 className="card-titleCv">{RESUME && RESUME[0].personInfo.name}</h4>
                <p>Occupation: {RESUME && RESUME[0].personInfo.title}</p>
                <p className='contact'>Contact: <br/>
                <a 
                href='mailto:maddel89@gmail.com' 
                target='_blank'
                >
                {RESUME && RESUME[0].personInfo.email}
                </a></p>
                <p>City: {RESUME && RESUME[0].personInfo.location.city}</p>

                <button className='default-btn'>
                  <a 
                  className='btn'
                  href={RESUME && RESUME[0].personInfo.profiles.url} 
                  target="_blank"
                  >
                    LinkedIn
                    </a>
                </button>
              </div>

            </section>

        <WorkHistory/>
        <br/><br/>
        <hr/><br/>
        <Education/>
        <br/><br/>
        </div>
    )
}



const WorkHistory = () => {
    return(     
      <>
      <h1 className='bigText'>Arbetsliverfarenhet</h1>
      <div className="card-group">
          {
          RESUME && RESUME[0].workHistory.map((work, index) =>

          <div key={work.index}>
            
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{work.company}</h5>
                <p className="card-text"><em>{work.startDate} - {work.endDate}</em></p>
                <p><em>{work.position}</em></p>
              </div>
              <hr/>
              <br/>
              <div 
              className="card-footer"
              style={{maxHeight: '100px', overflowY: 'scroll' }}
              >
              <p>{work.summary}</p>
              </div>
              <br/>
            </div>
          </div>
            )}
      </div>
    </>
    )
}

const Education = () => {
    return(     
      <>
      <h1 className='bigText'>Utbildning</h1>
      <div className="card-group">
          {
          RESUME && RESUME[0].education.map((school, index) =>

          <div key={school.index}>
            
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{school.institution}</h5>
                <p className="card-text"><em>{school.startDate} - {school.endDate}</em></p>
                <p><strong>Utbildningtyp: </strong><br/>
                {school.studyType}</p>
                <p><strong>Område: </strong><br/>
                {school.area}</p>
              </div>
              <hr/>
              <br/>
              <div 
              className="card-footer"
              style={{maxHeight: '95px', overflowY: 'scroll' }}
              >
                {school.courses && school.courses.map((courses, index) =>
                <ul key={courses.index}>
                  <li>{courses}</li>
                </ul>           
                )}
              </div>
              <br/>
            </div>
          </div>
            )}
      </div>
    </>

      // <div className='container-MainContent'>
      //       <br/><br/><br/><br/>
      //       <h1>Utbildning</h1>
      //       <br/><br/>
      //       {RESUME && RESUME[0].education.map((school) =>
      //       <div key={school.id}>
      //           <h4><strong>{school.institution}</strong></h4>
      //           <p><em>{school.startDate} - {school.endDate}</em></p>
      //           <p><em>{school.position}</em></p>
      //           <p>{school.courses}</p>
      //           <p>--------------------------------------------------------------------------------------------------------------------------</p>
      //           <br/>
      //       </div>
      //           )}
      //           </div>
    )
}




// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";


// export default function CvPage() {

//   fetch('./cv-data.json')
//   .then(function(resp) {
//     return resp.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   })

//   return (
// 	<div></div>
//   );
// };








