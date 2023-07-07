import fullStar from "../../assets/fullStar.svg";
import emptyStar from "../../assets/emptyStar.svg";

const Likes = (props) => {
  const likeString = [];

  for (let i = 0; i < props.rating; i++) {
    likeString.push(
      <img
        key={"Rating" + i}
        className="rating-full"
        src={fullStar}
        alt={"nombre étoiles " + props.rating}
      >
      </img>
    );
  }

  for (let i = props.rating; i < 5; i++) {
    likeString.push(
      <img
        key={"Rating" + i}
        className="rating-empty"
        src={emptyStar}
        alt={"nombre étoiles " + props.rating}
      >
      </img>
    );
  }

  return <div className="rating">{likeString}</div>;
};

export default Likes;
