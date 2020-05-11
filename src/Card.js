import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Card({id,title, desc, githubRepo, figmaLink}) {


    function displayGithubLink(){
        if(githubRepo && githubRepo !== "")
            return <a href={"https://github.com/cooperjones13/"+githubRepo} target='_blank' rel="noopener noreferrer" as="button" className="btn">View on Github <FontAwesomeIcon icon={['fab',"github"]}/> </a>
    }
    function displayFigmaLink(){
        if(figmaLink && figmaLink !== "")
            return <a href={figmaLink} target='_blank' rel="noopener noreferrer" as="button" className="btn">View Prototype <FontAwesomeIcon icon={['fab',"figma"]}/> </a>
    }

  return (
    <div className="card" id={id}>
        <div className="card-body">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-description">
                <p>{desc}</p>
            </div>
            <div className="project-links">
                {displayGithubLink()}
                {displayFigmaLink()}
            </div>
        </div>
    </div>
  );
}

export default Card;
