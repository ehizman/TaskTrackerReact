import { Link } from "react-router-dom";
const About = () => {
  return (
    <div style={{display: "flex", textAlign:"center"}}>
      <div>
        <h4> Version 1.0.0  </h4>
        <p> A Task Tracker built with React by Ehizman <br/>
          An introduction to working with React. The Project help me undertsstand how to use the React UseState hooks
          and also the React Router dom
        </p>
        <br/>
        <Link to="/"> Go back </Link>
      </div>
    </div>
  );
}

export default About;
