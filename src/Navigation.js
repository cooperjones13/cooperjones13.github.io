import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Components.scss';
import { Link } from 'react-router-dom';
export default function Navigation() {
  return (
    <nav className="navigation">
        <Link to="/">
          <svg id="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.16 199.38"><defs><style>{".cls-1{fill:#f06449;}"}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M44.63,47.29q-9.42,9-9.42,23.58t9.42,23.48a31.37,31.37,0,0,0,4.23,3.32,31.9,31.9,0,0,0,9.22,4.08,43.79,43.79,0,0,0,11.68,1.46h12.1a20,20,0,0,1,20,20V136.3a5,5,0,0,1-5,5H69.76a88,88,0,0,1-11-.67,75.41,75.41,0,0,1-9.86-1.9,67.28,67.28,0,0,1-7.78-2.52,62.79,62.79,0,0,1-22-14.29A63.23,63.23,0,0,1,5,99.66a80.87,80.87,0,0,1-5-29A83.57,83.57,0,0,1,4.87,41.53a60.87,60.87,0,0,1,14-22.26,62.42,62.42,0,0,1,22-14.06,80,80,0,0,1,28.9-5h77.1a5,5,0,0,1,5,5V33.32a5,5,0,0,1-5,5H69.76Q54,38.32,44.63,47.29Z"/><path className="cls-1" d="M179.16,0a20,20,0,0,1,20,20V129.62a77.66,77.66,0,0,1-5.1,28.68,61.27,61.27,0,0,1-36.54,36.1,80.87,80.87,0,0,1-29,5,83.34,83.34,0,0,1-29.12-4.87,60.78,60.78,0,0,1-22.26-13.95,62.19,62.19,0,0,1-14.06-22c-.16-.42-.32-.84-.47-1.27a5,5,0,0,1,4.7-6.73H99.21a5,5,0,0,1,4,2c.61.78,1.27,1.55,2,2.27q9,9.42,23.59,9.41t23.48-9.41a31.48,31.48,0,0,0,7.62-14.29,45.27,45.27,0,0,0,1.23-10.85V5a5,5,0,0,1,5-5Z"/></g></g></svg>
        </Link>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="https://github.com/cooperjones13" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={['fab',"github"]} className="socialIcon"/></a></li>
            <li><a href="https://www.linkedin.com/in/cooper-jones-dev/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={['fab',"linkedin"]} className="socialIcon"/></a></li>
        </ul>
    </nav>
  );
}