import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard({ icon, title, image }) {
  return (
    <div className="info-card">
      <div className="card-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <img src={image} alt={title} className="card-background" />
    </div>
  );
}

export default InformationCard;
