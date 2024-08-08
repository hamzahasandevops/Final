import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../Components/Navbar";
import CategoryFooter from "./CategoryFooter";

const itemDetails = {
  1: {
    title: "Homeopathy",
    description:
      "Homeopathy is a system of alternative medicine founded on the principle of like cures like, where substances that induce symptoms in healthy individuals are used in highly diluted form to treat similar symptoms in sick patients. Remedies are individualized based on the totality of symptoms and the person's unique constitution, aiming to restore balance and stimulate the body's innate healing mechanisms. Despite debate over its scientific basis, homeopathy remains popular for treating various acute and chronic conditions, emphasizing safety due to its highly diluted nature and minimal risk of side effects.Homeopathy is characterized by its principle of using highly diluted substances, often to the point where no molecules of the original substance remain, yet it is believed that the essence or energy of the substance retains therapeutic properties. Practitioners of homeopathy, known as homeopaths, conduct thorough consultations to understand not only the physical symptoms but also the emotional and psychological aspects of a person's health. Remedies are chosen based on this comprehensive understanding, aiming to stimulate the body's innate healing mechanisms rather than simply suppressing symptoms. Despite ongoing debates about its scientific validity and efficacy, homeopathy maintains a loyal following among those seeking alternative or complementary approaches to health and wellness. Its gentle nature and individualized approach appeal to many who prefer a more holistic perspective on healthcare.",
    image: "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
    banner: [
      "https://t4.ftcdn.net/jpg/02/00/73/71/240_F_200737116_X9M3OxXezaroMWsFXbnOIXGJRLkq0vJN.jpg",
      "https://t4.ftcdn.net/jpg/01/87/31/33/240_F_187313347_uMXAgil3uL3BwUg1hhu9PH815SaUoaGY.jpg",
      "https://img.freepik.com/premium-vector/pharmacy-caduceus-icon-vector-medical-logo-use-holistic-medicine-rehabilitation-pharmacology-homeopathy-creative-symbol-composed-with-mortar-pestle_570429-36374.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
    ],
    images: [
      "https://static.oxinis.com/healthmug/image/asset/2882-pu.webp",
      "https://static.oxinis.com/healthmug/image/asset/2883-eb.webp",
      "https://static.oxinis.com/healthmug/image/asset/2886-fm.webp",
      "https://static.oxinis.com/healthmug/image/asset/2885-sr.webp",
      "https://static.oxinis.com/healthmug/image/asset/4041-pj.webp",
    ],

    img: [
      "https://static.oxinis.com/healthmug/image/asset/3622-qf.webp",
      "https://static.oxinis.com/healthmug/image/asset/3623-pe.webp",
      "https://static.oxinis.com/healthmug/image/asset/3624-gq.webp",
      "https://static.oxinis.com/healthmug/image/asset/3625-lp.webp",
    ],

    products: [
      {
        id: 20,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 135,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 21,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 143,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 22,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 1341,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 23,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 355,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 24,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 656,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 25,
        title: "Garcinia combogia",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        offPrice: "10% OFF",
        old_mrp: 766,
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      // Add more products as needed
    ],
  },
  2: {
    title: "Ayurveda",
    description:
      "Ayurveda, originating from ancient India, is a holistic system of medicine that views health as a balance between the body, mind, and spirit. It focuses on promoting wellness through a personalized approach, considering each person's unique constitution (prakriti) and the interplay of the three doshas: Vata (air and space), Pitta (fire and water), and Kapha (earth and water).In Ayurvedic philosophy, health results from harmony within oneself and with the environment. Disease arises when this balance is disrupted, often due to factors like poor diet, lack of exercise, stress, or environmental conditions. Ayurvedic practices aim to restore balance through various methods including herbal remedies, dietary changes, yoga, meditation, detoxification (panchakarma), and lifestyle adjustments tailored to individual needs.Ayurveda categorizes substances and treatments based on their qualities (gunas) and tastes (rasas), aiming to bring opposing qualities into balance. For example, a person with a dominant Pitta constitution might be prescribed cooling herbs and foods to pacify excess heat and acidity.The holistic approach of Ayurveda extends beyond physical health to encompass mental, emotional, and spiritual well-being. It emphasizes prevention rather than just treatment of ailments, advocating a lifestyle that fosters longevity, vitality, and harmony with nature.",

    image: "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
    banner: [
      "https://img.freepik.com/free-vector/flat-gradient-nature-concept-logotype_52683-13458.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
      "https://img.freepik.com/premium-vector/tech-logo_1056333-179.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
      "https://img.freepik.com/premium-vector/traditional-green-herbal-logo-design-vector-idea_855487-4.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
    ],
    images: [
      "https://static.oxinis.com/healthmug/image/asset/3714-dh.webp",
      "https://static.oxinis.com/healthmug/image/asset/3610-bp.webp",
      "https://static.oxinis.com/healthmug/image/asset/3611-gv.webp",
      "https://static.oxinis.com/healthmug/image/asset/3609-ec.webp",
      "https://static.oxinis.com/healthmug/image/asset/3612-kb.webp",
    ],
    img: [
      "https://static.oxinis.com/healthmug/image/asset/3622-qf.webp",
      "https://static.oxinis.com/healthmug/image/asset/3623-pe.webp",
      "https://static.oxinis.com/healthmug/image/asset/3624-gq.webp",
      "https://static.oxinis.com/healthmug/image/asset/3625-lp.webp",
    ],
    products: [
      {
        id: 26,
        title: "Garcinia ",
        ratings: 2,
        offPrice: "10% OFF",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 13,
        ml: [20, 30, 100, 1000],
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Discount: 10,
      },
      {
        id: 27,
        title: "Harami combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        ratings: 11,
        new_mrp: 118,
        quantity: 1,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 28,
        title: "kutta combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 118,
        ratings: 1,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 29,
        title: "Kamini combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 3,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 30,
        title: "Dayan combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 5,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 31,
        title: "Churail combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 4,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 32,
        title: "Pishach combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 4,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 33,
        title: "Rachhasni combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 4,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 34,
        title: "Surprakha combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 4,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 35,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 4,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 36,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 4,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 37,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 4,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 38,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 4,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 39,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 4,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 40,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ratings: 4,
        ml: [20, 30, 100, 1000],
      },
      // Add more products as needed
    ],
  },
  3: {
    title: "Unani",
    description:
      "Unani medicine, also known as Yunani medicine, is a traditional system of medicine that originated in ancient Greece and was later adopted and developed by Arabs and Persians. It is based on the teachings of Greek physicians such as Hippocrates and Galen, combined with principles from traditional Arabic and Persian medicine.Unani medicine is founded on the concept of the four humors—blood, phlegm, yellow bile, and black bile—and emphasizes the balance of these bodily fluids as key to health. It also incorporates the notion of the four temperaments, linking physical health with psychological and emotional well-being.Practitioners of Unani medicine, known as Hakims, diagnose patients through careful observation of symptoms and pulse examination. Treatment typically involves herbal medicines, dietary adjustments, and lifestyle recommendations aimed at restoring the body's natural balance and promoting self-healing.Unani medicine places a strong emphasis on individualized care, taking into account a person's unique constitution, temperament, and environmental factors. It has been practiced for centuries in various parts of the world, particularly in South Asia and the Middle East, and continues to be valued by many for its holistic approach to health and disease prevention.",
    image: "https://static.oxinis.com/healthmug/image/asset/2387-gq.webp",
    banner: [
      "https://img.freepik.com/free-vector/flat-design-medical-pharmacy-symbol_23-2149542033.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/gradient-hub-logo-template_23-2149845600.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
      "https://img.freepik.com/premium-vector/leaf-with-dna-logo-design-combination-vector-template_527431-1741.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
    ],
    images: [
      "https://static.oxinis.com/healthmug/image/asset/2388-mq.webp",
      "https://static.oxinis.com/healthmug/image/asset/2390-lw.webp",
      "https://static.oxinis.com/healthmug/image/asset/3732-uj.webp",
      "https://static.oxinis.com/healthmug/image/asset/2389-oj.webp",
      "https://static.oxinis.com/healthmug/image/asset/2861-di.webp",
    ],
    img: [
      "https://static.oxinis.com/healthmug/image/asset/3622-qf.webp",
      "https://static.oxinis.com/healthmug/image/asset/3623-pe.webp",
      "https://static.oxinis.com/healthmug/image/asset/3624-gq.webp",
      "https://static.oxinis.com/healthmug/image/asset/3625-lp.webp",
    ],
    products: [
      {
        id: 32,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        ratings: 4,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 33,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        ratings: 5,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 34,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        ratings: 6,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 35,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        new_mrp: 118,
        ratings: 7,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 36,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        new_mrp: 118,
        ratings: 8,
        quantity: 1,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
    ],
  },
};

const CategoryDetails = () => {
  const { id } = useParams();
  const item = itemDetails[id];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [item.images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  if (!item) {
    return (
      <div>
        <h2>Item not found</h2>
        <p>Could not find details for category with ID: {id}</p>
      </div>
    );
  }

  const itemData = [
    {
      id: 1,
      mrp: 789,
      images: [
        {
          name: "Garcinia",
          url: "https://static.oxinis.com/healthmug/image/asset/2882-pu.webp",
        },
        {
          name: "Spondin",
          url: "https://static.oxinis.com/healthmug/image/asset/2883-eb.webp",
        },
        {
          name: "Paracetamol",
          url: "https://static.oxinis.com/healthmug/image/asset/2886-fm.webp",
        },
        {
          name: "Alfalfa",
          url: "https://static.oxinis.com/healthmug/image/asset/2885-sr.webp",
        },
        {
          name: "Orasor",
          url: "https://static.oxinis.com/healthmug/image/asset/4041-pj.webp",
        },
      ],
      title: "Breakfast",
      author: "@bkristastucchio",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      id: 2,
      mrp: 1228,
      images: [
        {
          name: "Image 1",
          url: "https://static.oxinis.com/healthmug/image/asset/3714-dh.webp",
        },
        {
          name: "Image 2",
          url: "https://static.oxinis.com/healthmug/image/asset/3610-bp.webp",
        },
        {
          name: "Image 3",
          url: "https://static.oxinis.com/healthmug/image/asset/3611-gv.webp",
        },
        {
          name: "Image 4",
          url: "https://static.oxinis.com/healthmug/image/asset/3609-ec.webp",
        },
        {
          name: "Image 5",
          url: "https://static.oxinis.com/healthmug/image/asset/3612-kb.webp",
        },
      ],
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      id: 3,
      mrp: 933,
      images: [
        {
          name: "Image 1",
          url: "https://static.oxinis.com/healthmug/image/asset/2388-mq.webp",
        },
        {
          name: "Image 2",
          url: "https://static.oxinis.com/healthmug/image/asset/2390-lw.webp",
        },
        {
          name: "Image 3",
          url: "https://static.oxinis.com/healthmug/image/asset/3732-uj.webp",
        },
        {
          name: "Image 4",
          url: "https://static.oxinis.com/healthmug/image/asset/2389-oj.webp",
        },
        {
          name: "Image 5",
          url: "https://static.oxinis.com/healthmug/image/asset/2861-di.webp",
        },
      ],
      title: "Camera",
      author: "@helloimnik",
    },
  ];

  // const totalPrice = itemData.reduce((acc, item) => acc + item.mrp, 0);
  return (
    <div className="container-fluid">
      <div className="w-100">
        <Navbar />
      </div>

      <div className="row container-fluid">
        <div className="col-12 col-sm-6 col-lg-6 ">
          <div className="card  shadow px-5">
            <div className="card-body h-75">
              <h5 className="card-title mb-3 mt-3">
                Top {item.title} Medicines
              </h5>

              <p className="card-text lh-lg">{item.description}</p>
            </div>
            <div className="d-flex px-3 pb-3 gap-3">
              {item.banner.map((b, i) => {
                return (
                  <div key={i}>
                    <img src={b} height="150px" width="150px" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-4 col-md-12 col-lg-6 p-5">
          <div className="slider ">
            <div
              className="slider-images"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                height: "570px",
              }}
            >
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  style={{ height: "545px" }}
                  alt={`Slide ${index + 1}`}
                  className="slider-image"
                />
              ))}
            </div>
            <button
              className="slider-button prev"
              onClick={prevImage}
              aria-label="Previous slide"
            >
              <svg
                className="arrow-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="slider-button next"
              onClick={nextImage}
              aria-label="Next slide"
            >
              <svg
                className="arrow-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>{" "}
        <div className="col-6 col-sm-6 col-md-6 col-lg-12  ">
          <div className="card-title px-5 py-3 mt-5 ms-2 ">
            <p>UPTO 20% OFF</p>
            <h5>{item.title} Products</h5>
          </div>

          <div
            className="card-products d-flex px-5"
            style={{ overflowX: "auto" }}
          >
            <div className="d-flex flex-nowrap py-3">
              {item.products.slice(0, 6).map((p, index) => (
                <div
                  key={index}
                  className="card p-3 mx-3"
                  style={{ width: "300px" }}
                >
                  <img
                    src={p.image}
                    className="card-img-top"
                    alt="Product Image"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">
                      Description of the product goes here. You can include ...
                    </p>
                    <p className="card-text">
                      <del>${p.old_mrp}</del>{" "}
                      <ins className="text-decoration-none fs-5 text-primary">
                        ${p.new_mrp}
                      </ins>
                    </p>
                    <a href="#" className="btn btn-light">
                      <i className="fas fa-plus"></i>
                    </a>
                    <a href="#" className="btn btn-light">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a href="#" className="btn btn-light">
                      View More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-12   m-auto  p-3 container mt-3">
          <div className="card-title px-5 py-3">
            <p>BEST BRANDS</p>
            <h5>BEST{item.title} Offers</h5>
          </div>
          <div
            className="container-fluid px-5 d-flex "
            style={{ columnGap: "10px" }}
          >
            {item.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  style={{ width: "100%", height: "250px" }}
                  alt={`Image ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-12  ">
          <div className="card-title px-5 py-3 ms-2">
            <p>UPTO 40% OFF On Combo Packs</p>
            <h5>{item.title} Products</h5>
          </div>

          <div
            className="card-products d-flex px-5"
            style={{ overflowX: "auto" }}
          >
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {itemData.map((p) => (
                <div key={p.id} className="col">
                  <div className="card h-100">
                    <ImageList
                      variant="inset"
                      sx={{ width: "100%", height: 450 }}
                    >
                      {p.images &&
                        p.images.map((item, index) => (
                          <ImageListItem key={index}>
                            <img
                              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              src={`${item.url}?w=248&fit=crop&auto=format`}
                              alt=""
                              loading="lazy"
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                            <ImageListItemBar
                              title={item.name} // Render the name here
                              actionIcon={
                                <IconButton
                                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                  aria-label={`info about ${item.name}`}
                                >
                                  <InfoIcon />
                                </IconButton>
                              }
                            />
                          </ImageListItem>
                        ))}
                    </ImageList>
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>{" "}
                      {/* Render the name again if needed */}
                      <p className="card-text">{p.description}</p>
                      <p className="card-text">
                        <div className="d-flex">
                          <div>
                            <del>${p.mrp * 1.5}</del>{" "}
                            <ins className="text-decoration-none fs-5 text-primary">
                              ${p.mrp}
                            </ins>
                          </div>
                        </div>
                      </p>
                      <a href="#" className="btn btn-light">
                        <i className="fas fa-plus"></i> Add to Wishlist
                      </a>
                      <a href="#" className="btn btn-light">
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                      </a>
                      <a href="#" className="btn btn-light">
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <CategoryFooter />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
