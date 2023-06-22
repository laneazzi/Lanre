import "./picture.css";
import pp from "../assets/profilePic.jpg";
function Picture() {
  return <img className="picture" src={pp} loading="lazy" />;
}

export default Picture;
