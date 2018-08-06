import React from 'react';
import intro from '../intro.png'
import Card from '../components/Card'


const about_me = () => (
      <div className="container">
        <img class="responsive-img" src={intro} alt="Creator, Learner, Doer"/>
          <h4 className="question">Why do I want to join Techladies?</h4>
          <Card reason="I want to work on a web project that will be useful, with a team of highly-motivated individuals." />
          <Card reason="I want to get feedback and guidance from people working in web development." />
          <Card reason="Learn and practice coding." />
          <Card reason="Gain the skills and confidence in web development to secure a job in the tech industry" />
      </div>)

      
export default about_me;