import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
// import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import TrendMed from "../Components/TrendMed";
import MinNav from "../Components/HeroNav/MinNav";
import MediHero from "../Components/Medihero/MediHero";

function Home() {
  const [query, setQuery] = useState("");
  const [filteredData1, setFilteredData1] = useState([]);

  const techData = [
    {
      id: 8,
      title: "Garcinia Cobogia Drop",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://th.bing.com/th?id=OIP.p05ehFEjIZm1ayTK1vCPaAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2r",
      new_mrp: 120,
      meta_desc:
        "Bhargava Spondin Drop, It contains flavonoids that help in reducing the inflammation and there by reducing the pain in the affected regions. Start taking Homeopathic medicine today and get best treatment. As far as symptoms of cervical spondylitis are concerned, most people do not even feel any signs of the problem. However, at a certain stage, some symptoms occur. This might include stiffness and pain in the neck area. Sometimes, cervical spondylitis might result in the narrowing of space between your spinal cord and nerve roots. This hinders the passage of your spine towards the rest of your back portion. In case the area between your spinal cord and nerve roots is altered, you may experience weakness and numbness around your arms, and legs as well. A lack in proper coordination is experienced, which might lead to difficulty in walking. Even there can be a significant loss in bladder and bowel control.Spondylitis is a disease that normally does not show the effect on the human body, whatsoever. Although, over time the inflammation caused in the neck and spinal region sometimes leads to hunching of spines. In spondylitis, the smaller bones of the vertebrae (common term, Spine) fuse and thus, hampers the movement of the spine causing a hunched-forward posture. In certain extreme cases, chest ribs are also affected, making it difficult for the person suffering from cervical spondylitis to breathe. ",

      desc: "It has an organic ingredient called hydroxycitric acid (HCA), which causes weight loss. It inhibits the body's capacity to produce fat and curbs your appetite. Additionally, it aids in lowering your bad cholesterol levels.",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 9,
      title: "Spondin",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://www.medicinecare.in/assets/images/product/Spondin_Drops1.jpg",
      new_mrp: 120,
      meta_desc:
        "Bhargava Spondin Drop, It contains flavonoids that help in reducing the inflammation and there by reducing the pain in the affected regions. Start taking Homeopathic medicine today and get best treatment. As far as symptoms of cervical spondylitis are concerned, most people do not even feel any signs of the problem. However, at a certain stage, some symptoms occur. This might include stiffness and pain in the neck area. Sometimes, cervical spondylitis might result in the narrowing of space between your spinal cord and nerve roots. This hinders the passage of your spine towards the rest of your back portion. In case the area between your spinal cord and nerve roots is altered, you may experience weakness and numbness around your arms, and legs as well. A lack in proper coordination is experienced, which might lead to difficulty in walking. Even there can be a significant loss in bladder and bowel control.Spondylitis is a disease that normally does not show the effect on the human body, whatsoever. Although, over time the inflammation caused in the neck and spinal region sometimes leads to hunching of spines. In spondylitis, the smaller bones of the vertebrae (common term, Spine) fuse and thus, hampers the movement of the spine causing a hunched-forward posture. In certain extreme cases, chest ribs are also affected, making it difficult for the person suffering from cervical spondylitis to breathe. ",
      desc: "Spondin Drop is one of the most effective Homeopathic Medicine for cervical spondylitis. As you seek the most faithful homeopathic medicine for neck pain, look no further than this particular fluid. It's well known to work fast and renowned for its effectiveness ",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 10,
      title: "Kidcough",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://th.bing.com/th?id=OIP.Yu3Rl4_tHJ81p652jomqjgHaIl&w=232&h=269&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      new_mrp: 120,
      meta_desc:
        "Bhargava Spondin Drop, It contains flavonoids that help in reducing the inflammation and there by reducing the pain in the affected regions. Start taking Homeopathic medicine today and get best treatment. As far as symptoms of cervical spondylitis are concerned, most people do not even feel any signs of the problem. However, at a certain stage, some symptoms occur. This might include stiffness and pain in the neck area. Sometimes, cervical spondylitis might result in the narrowing of space between your spinal cord and nerve roots. This hinders the passage of your spine towards the rest of your back portion. In case the area between your spinal cord and nerve roots is altered, you may experience weakness and numbness around your arms, and legs as well. A lack in proper coordination is experienced, which might lead to difficulty in walking. Even there can be a significant loss in bladder and bowel control.Spondylitis is a disease that normally does not show the effect on the human body, whatsoever. Although, over time the inflammation caused in the neck and spinal region sometimes leads to hunching of spines. In spondylitis, the smaller bones of the vertebrae (common term, Spine) fuse and thus, hampers the movement of the spine causing a hunched-forward posture. In certain extreme cases, chest ribs are also affected, making it difficult for the person suffering from cervical spondylitis to breathe. ",

      desc: "Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 11,
      title: "Paracetamol",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://th.bing.com/th?id=OIP.3Qx5TaJDJ-pe0_9FdeR3IwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      new_mrp: 120,
      meta_desc:
        "Bhargava Spondin Drop, It contains flavonoids that help in reducing the inflammation and there by reducing the pain in the affected regions. Start taking Homeopathic medicine today and get best treatment. As far as symptoms of cervical spondylitis are concerned, most people do not even feel any signs of the problem. However, at a certain stage, some symptoms occur. This might include stiffness and pain in the neck area. Sometimes, cervical spondylitis might result in the narrowing of space between your spinal cord and nerve roots. This hinders the passage of your spine towards the rest of your back portion. In case the area between your spinal cord and nerve roots is altered, you may experience weakness and numbness around your arms, and legs as well. A lack in proper coordination is experienced, which might lead to difficulty in walking. Even there can be a significant loss in bladder and bowel control.Spondylitis is a disease that normally does not show the effect on the human body, whatsoever. Although, over time the inflammation caused in the neck and spinal region sometimes leads to hunching of spines. In spondylitis, the smaller bones of the vertebrae (common term, Spine) fuse and thus, hampers the movement of the spine causing a hunched-forward posture. In certain extreme cases, chest ribs are also affected, making it difficult for the person suffering from cervical spondylitis to breathe. ",

      desc: "Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 12,
      title: "Alfalfa",
      old_mrp: 150,
      ml: 20,
      Discount: 10,
      images:
        "https://www.bing.com/th?id=OIP.t8P05Q7ZuTrlEY2iLurZawHaHa&w=206&h=206&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      new_mrp: 120,
      meta_desc:
        "Bhargava Spondin Drop, It contains flavonoids that help in reducing the inflammation and there by reducing the pain in the affected regions. Start taking Homeopathic medicine today and get best treatment. As far as symptoms of cervical spondylitis are concerned, most people do not even feel any signs of the problem. However, at a certain stage, some symptoms occur. This might include stiffness and pain in the neck area. Sometimes, cervical spondylitis might result in the narrowing of space between your spinal cord and nerve roots. This hinders the passage of your spine towards the rest of your back portion. In case the area between your spinal cord and nerve roots is altered, you may experience weakness and numbness around your arms, and legs as well. A lack in proper coordination is experienced, which might lead to difficulty in walking. Even there can be a significant loss in bladder and bowel control.Spondylitis is a disease that normally does not show the effect on the human body, whatsoever. Although, over time the inflammation caused in the neck and spinal region sometimes leads to hunching of spines. In spondylitis, the smaller bones of the vertebrae (common term, Spine) fuse and thus, hampers the movement of the spine causing a hunched-forward posture. In certain extreme cases, chest ribs are also affected, making it difficult for the person suffering from cervical spondylitis to breathe. ",

      desc: "Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 13,
      title: "Intocunal",
      old_mrp: 150,
      Discount: 10,
      images:
        "https://th.bing.com/th?id=OIP.19NP6OVQHW601ygI4x_JpAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      new_mrp: 120,
      meta_desc:
        "Bhargava Spondin Drop, It contains flavonoids that help in reducing the inflammation and there by reducing the pain in the affected regions. Start taking Homeopathic medicine today and get best treatment. As far as symptoms of cervical spondylitis are concerned, most people do not even feel any signs of the problem. However, at a certain stage, some symptoms occur. This might include stiffness and pain in the neck area. Sometimes, cervical spondylitis might result in the narrowing of space between your spinal cord and nerve roots. This hinders the passage of your spine towards the rest of your back portion. In case the area between your spinal cord and nerve roots is altered, you may experience weakness and numbness around your arms, and legs as well. A lack in proper coordination is experienced, which might lead to difficulty in walking. Even there can be a significant loss in bladder and bowel control.Spondylitis is a disease that normally does not show the effect on the human body, whatsoever. Although, over time the inflammation caused in the neck and spinal region sometimes leads to hunching of spines. In spondylitis, the smaller bones of the vertebrae (common term, Spine) fuse and thus, hampers the movement of the spine causing a hunched-forward posture. In certain extreme cases, chest ribs are also affected, making it difficult for the person suffering from cervical spondylitis to breathe. ",

      desc: "Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.",
      quantity: 1,
      ml: [20, 30, 100, 1000],
    },
  ];

  const handleSearch = () => {
    if (query.length >= 2) {
      const results = techData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData1(results);
    } else {
      setFilteredData1([]);
    }
  };

  return (
    <div className="home-section">
      <Navbar
        query={query || ""}
        setQuery={setQuery}
        handleSearch={handleSearch}
        techData={techData}
      />
      <MinNav query={query} setQuery={setQuery} />

      <MediHero />
      <Hero filteredData={filteredData1} />

      <Info />
      <About />
      <TrendMed />
      <BookAppointment />
      {/* <Reviews /> */}
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
