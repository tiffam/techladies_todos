import React from 'react';


const Card = (props) => (

    <div class="row">
    <div class="col s12 m12">
      <div class="card">
        <div class="card-content white-text">
          <span class="card-title">{props.title}</span>
          <p>{props.reason}</p>
        </div>
      </div>
    </div>
  </div>

)

export default Card