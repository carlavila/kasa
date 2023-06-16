import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Card } from "../components/Card";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import logements from "../datas/logements.json";

export default function Home() {
  const [housing, setHousing] = useState(logements);

  useEffect(() => {
    setHousing(logements);
  }, []);

  return (
    <section className="home-container">
      <Navbar />
      <Banner />
      <div className="gallery-layout">
        <div className="gallery">
          {housing.map((house) => (
            <Card key={house.id} house={house} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
