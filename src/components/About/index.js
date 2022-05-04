import {
  useLocation,
} from "react-router-dom";

function About() {
  var params = new URLSearchParams(useLocation().search);
  var name = params.get("name");
  return <p>About Page content for {name}</p>;
}

export default About;
