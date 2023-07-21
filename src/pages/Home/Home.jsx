import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import logements from "../../datas/logements.json";
import Banner from "../../components/Banner/Banner"

export default function Home() {
  const [housing, setHousing] = useState(logements);

  useEffect(() => {
    setHousing(logements);
  }, []);

  return (
    <section className="home-container">
      <Navbar />
     {/* <Banner />*/} 
     <Banner page="home" />
      <div className="gallery-layout">
        <div className="gallery">
          {housing.map((house) => (
            <Card key={house.id} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
}
