import React from 'react';
import react from './reactlogo.png';
import python from './pythonlogo.png';
import git from './git.png';
import node from './nodelogo.png';
import docker from './docker.png';
import azure from './azure.png';
import mongo from './mongo.png';    
import angular from './angular.png';
import unity from './unity.png';


const technologies = [
  { name: 'React.js', logo: react },
  { name: 'Python', logo: python },
  { name: 'GitHub', logo: git },
  { name: 'Node.js', logo: node },
  { name: 'Docker', logo: docker },
  // Add more technologies as needed
];

const technologies2 = [
    {name:'Azure', logo: azure},
    {name:'MongoDB', logo: mongo},
    {name:'Angular.js', logo: angular},
    {name:'Unity', logo: unity},
];

const TechnologyShowcase = () => {
  return (
    <div style={{paddingTop: '100px', marginBottom: '100px'}}>
      <h1 style={{display: 'flex', justifyContent: 'center', paddingBottom: '20px;'}}>Learn Technologies Like</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent: 'space-around'}}>
        {technologies.map((tech) => (
          <div key={tech.name} style={{ margin: '10px' }}>
            <img src={tech.logo} alt={tech.name} height="100" />
            <p>{tech.name}</p>
          </div>
        ))}
    
      </div>


      <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent: 'space-around'}}>
        {technologies2.map((tech) => (
          <div key={tech.name} style={{ margin: '10px' }}>
            <img src={tech.logo} alt={tech.name} height="100" />
            <p>{tech.name}</p>
          </div>
        ))}
    
      </div>
    </div>
  );
};

export default TechnologyShowcase;
