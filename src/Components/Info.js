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

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Shop By Health Concern</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medicines to your needs. Our platform allows you to
          connect with experienced online doctors who provides medicines, expert
          medical advice, issue online prescriptions, and offer quick refills
          whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard title="Cardiac Care" icon={faHeartPulse} />

        <InformationCard title="Stomach Care" icon={faChild} />

        <InformationCard title="Liver Care" icon={faPlus} />
        <InformationCard title="Kidney Care" icon={faPlus} />
        <InformationCard
          title="Pain relief "
          // description="Smile with confidence as our Dental Care services cater to all your
          //   oral health needs. Our skilled dentists provide a wide range of
          //   treatments, from routine check-ups and cleanings to cosmetic
          //   procedures and restorative treatments."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
