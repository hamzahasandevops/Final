import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
  faPlus,
  faChild,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import Back1 from "../Assets/cardiaccare1.webp";
import Back2 from "../Assets/cardiac2.webp";
import Back3 from "../Assets/cardiac3.webp";
import Back4 from "../Assets/cardiac4.webp";
import Back5 from "../Assets/cardiac5.webp";

const infoCardsData = [
  { title: "Cardiac Care", icon: faHeartPulse, image: Back1 },
  { title: "Stomach Care", icon: faChild, image: Back2 },
  { title: "Liver Care", icon: faPlus, image: Back3 },
  { title: "Kidney Care", icon: faPlus, image: Back4 },
  { title: "Dental Care", icon: faTooth, image: Back5 },
];

function Info() {
  return (
    <div className="info-section p-5" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Shop By Health Concern</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medicines to your needs. Our platform allows you to
          connect with experienced online doctors who provide medicines, expert
          medical advice, issue online prescriptions, and offer quick refills
          whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        {infoCardsData.map((card, index) => (
          <InformationCard
            key={index}
            title={card.title}
            icon={card.icon}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Info;
