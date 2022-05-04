import {
  useParams,
} from "react-router-dom";

function Contact() {
  var params = useParams();
  return <p>Contact Page content for {params.country}</p>;
}

export default Contact;