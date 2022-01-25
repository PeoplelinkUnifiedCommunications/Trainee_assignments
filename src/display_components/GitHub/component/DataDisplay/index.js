import React from 'react';
import './index.css';

function DataDisplay({details}) {
  
  return (
  <div className="details-container">
    <div className="image-container">
      <img src={details.avatar_url} alt={details.avatar_url} className="image-width"/>
    </div>
    <div>
      {!details.name ? <h1 className="details-heading">null</h1>: <h1 className="details-heading">{details.name}</h1>}
      {!details.bio  ? <p className="details-paragraph">null</p>: <p className="details-paragraph">{details.bio}</p>}
      <div className="details-para-container">
        <p className="details-paragraph">{details.followers} Followers</p>
        <p className="details-paragraph">{details.following} Following</p>
        <p className="details-paragraph">{details.public_repos} Repos</p>
      </div>
    </div>
  </div>
  )
}

export default DataDisplay;
