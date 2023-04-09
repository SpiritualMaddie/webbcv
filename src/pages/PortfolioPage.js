import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InfinitySpin } from  'react-loader-spinner'

import codingImg from '../img/coding.jpg'

export default function PortfolioPage() {
  const [gitProjects, setGitProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch(`https://api.github.com/users/SpiritualMaddie/repos?page=1&per_page=10&sort=updated`)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true)
        setGitProjects(result)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])

  if(error) {
    return <h3>Error: {error.message}</h3>
  }
  else if(!isLoaded){
    return (
      <div className='spinner'>
          <InfinitySpin 
            width='200'
            color="#374709"
          />
      </div>
    )
  }
  else{

    return (
      <section className="container-MainContent">
      <div className="card-group">              
      { 
      gitProjects && gitProjects.map((project, index) => (

        <div key={project.index}>

          <div className="card">
            <img src={codingImg} className="card-img-top" alt="This will have an image" />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
              </div>
              <br/>
              <button className='default-btn-small'>
                  <a 
                  className='btn-small'
                  href={project.html_url} 
                  target="_blank"
                  >
                    Link
                    </a>
                </button>
                <br/>
              <div className="card-footer">
                <small className="text-body-secondary">Language:  {project.language}</small>
              </div>
          </div>

        </div>
          
          ))
      }
      </div>
      </section>
    );
  }

};