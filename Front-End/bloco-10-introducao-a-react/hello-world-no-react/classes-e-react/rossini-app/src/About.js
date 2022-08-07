import React from 'react';

class About extends React.Component {
  render() {
    const skills = ["HTML", "CSS", "JS", "Testes unitários"] 
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return (
      <div>
        <h1>
          {'Meu nome é Glaucon Rossini'}
        </h1>
        <p>
          {'Sou estudante de desenvolvimento Web Full-Stack na Trybe, no qual tenho desenvolvido minhas habilidades em:'}
        </p>
        <ul>{jsxSkills}</ul>
      </div>
    );
  }
}

export default About;