import React, { useEffect, useState, useContext } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

import { CartContext } from "./Features/ContextProvider";
import ResultProduct from "./ResultProduct";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);
  const [query, setQuery] = useState("");
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

  const techData = [
    {
      id: 1,
      title: "Garcinia Cobogia Drop",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://img.freepik.com/free-photo/flowers-cosmetics-containers_23-2149270029.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_user",
      new_mrp: 120,
      desc: "It has an organic ingredient called hydroxycitric acid (HCA), which causes weight loss. It inhibits the body's capacity to produce fat and curbs your appetite. Additionally, it aids in lowering your bad cholesterol levels.",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 2,
      title: "Spondin",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://www.medicinecare.in/assets/images/product/Spondin_Drops1.jpg",
      new_mrp: 120,
      desc: "Spondin Drop is one of the most effective Homeopathic Medicine for cervical spondylitis. As you seek the most faithful homeopathic medicine for neck pain, look no further than this particular fluid. It's well known to work fast and renowned for its eff",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 3,
      title: "Kidcough",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://img.freepik.com/free-psd/beauty-sales-podium-background_23-2151644314.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_user",
      new_mrp: 120,
      desc: "Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 4,
      title: "Paracetamol",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://img.freepik.com/free-photo/top-view-set-beauty-products_23-2148574354.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_user",
      new_mrp: 120,
      desc: "Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 5,
      title: "Alfalfa",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_user",
      new_mrp: 120,
      desc: "Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.",
      quantity: 1,
    },
    {
      id: 6,
      title: "Intocunal",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://img.freepik.com/free-vector/makeup-realistic-composition_1284-18448.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_user",
      new_mrp: 120,
      desc: "Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
  ];

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <form className="d-flex">
            <input
              className="form-control me-2 w-50   fst-italic"
              type="search"
              value={query}
              placeholder="Search Garcinia, kidcough, paracetamol, spondin"
              aria-label="Search"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <button
              className="btn btn-outline-primary"
              type="submit"
              disabled={true}
            >
              Search
            </button>
          </form>
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">
            Find your Cure and life free With MedicineCare
          </h2>
          <p className="text-descritpion">
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </p>
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
          {query ? (
            techData
              .filter((c) => c.title.toLowerCase().includes(query))
              .map((d) => {
                return <ResultProduct product={d} />;
              })
          ) : (
            <img className="hero-image1" src={Doctor} alt="Doctor" />
          )}
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
