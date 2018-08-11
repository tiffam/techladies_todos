import React from 'react';
import intro from '../intro.png'
import Card from '../components/Card'


const about_me = () => (
      <div className="container">
        <img className="responsive-img" src={intro} alt="Creator, Learner, Doer"/>
          <h4 className="question">Reasons for Joining TechLadies:</h4>
          <Card reason="I want to work with a team of highly-motivated individuals on a web project that will be used by people." />
          <Card reason="I want to get feedback and guidance from people working in web development." />
          <Card reason="I want to learn and practice coding." />
          <Card reason="Finally, I want to be a TechLady!" />
      </div>)

      
export default about_me;