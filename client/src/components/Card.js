import React from 'react';


const Card = (props) => (

    <div className="row">
    <div className="col s12 m12">
      <div className="card">
        <div className="card-content white-text">
          <span className="card-title">{props.title}</span>
          <p>{props.reason}</p>
        </div>
      </div>
    </div>
  </div>

)

export default Card