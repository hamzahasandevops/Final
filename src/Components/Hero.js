import React, { useEffect, useState, useContext } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/Hero.css";

import { CartContext } from "./Features/ContextProvider";
import ResultProduct from "./ResultProduct";

function Hero({ filteredData, query }) {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const { cart } = useContext(CartContext);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="d-none d-sm-none d-lg-block">
      <AnimatePresence>
        {filteredData.length > 0 && query.length > 0 ? (
          filteredData.map((d) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0, X: 0 }}
              transition={{ duration: 0.1 }}
            >
              <ResultProduct product={d} />
            </motion.div>
          ))
        ) : (
          <div className="section-container">
            <motion.div
              className="section-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.0 }}
            >
              <div className="hero-section">
                <div className="text-section">
                  <p className="text-headline">
                    <motion.p
                      className="text-headline"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 1.0 }}
                    >
                      ❤️ Health comes first
                    </motion.p>
                  </p>

                  <motion.p
                    className="text-headline"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1.2 }}
                  >
                    <h2 className="text-title">
                      Find your Cure and life free With MedicineCare{" "}
                    </h2>
                  </motion.p>

                  <motion.p
                    className="text-headline"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1.4 }}
                  >
                    <p className="text-descritpion">
                      Talk to online doctors and get medical advice, online
                      prescriptions, refills and medical notes within minutes.
                      On-demand healthcare services at your fingertips.{" "}
                    </p>
                  </motion.p>

                  <button
                    className="text-appointment-btn "
                    style={{ display: "none" }}
                    type="button"
                    onClick={handleBookAppointmentClick}
                  >
                    <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
                  </button>
                  <div className="text-stats">
                    <div className="text-stats-container">
                      <p>145k+</p>
                      <p>Receive Patients</p>
                    </div>

                    <div className="text-stats-container">
                      <p>5000+</p>
                      <p>Medicines Available</p>
                    </div>

                    <div className="text-stats-container">
                      <p>10+</p>
                      <p>Years of Excellence</p>
                    </div>
                  </div>
                </div>

                <div className="hero-image-section">
                  {" "}
                  <img className="hero-image1" src={Doctor} alt="Doctor" />
                </div>
              </div>

              <div
                onClick={scrollToTop}
                className={`scroll-up ${goUp ? "show-scroll" : ""}`}
              >
                <FontAwesomeIcon icon={faAngleUp} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hero;
