import { useParams, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tags from "../../components/Tags/Tags";
import Collapses from "../../components/Collapses/Collapses";
import Host from "../../components/Host/Host";
import Rating from "../../components/Likes/Likes";
import logements from "./../../datas/logements.json";

const Houses = () => {
  const { id } = useParams(); ///house/:id

  const data = logements.find((house) => house.id === id);

  if (!data) {
    return <Navigate to="*" />;
  }

  return (
    <>
      <Navbar />
      <div className="housing-container">
        <Carrousel img={data.pictures} />

        <div className="housing-inner-container">
          <div className="housing-title-location">
            <h2 className="housing-title">{data.title}</h2>
            <h3 className="housing-location">{data.location}</h3>
            <Tags tags={data.tags} />
          </div>

          <div className="rating-host-container">
            <Rating rating={data.rating} />
            <Host
              name={data.host && data.host.name}
              img={data.host && data.host.picture}
            />
          </div>
        </div>

        <div className="dropdown-container">
          <Collapses title="Description">{data.description}</Collapses>
          <Collapses title="Équipements">
            {data.equipments.map((equipment) => (
              <div key={equipment}>{equipment}</div>
            ))}
          </Collapses>
        </div>
      </div>
    </>
  );
};

export default Houses;