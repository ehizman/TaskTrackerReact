import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div>
        <h4> Version 1.0.0  </h4>
        <p> A Task Tracker built with React by Ehizman</p>
        <p> An introduction to working with React. The Porject help me undertsstand how to use the React UseState hooks
            and also the Reacr Router dom
        </p>
        <Link to="/"> Go back </Link>
    </div>
  )
}

export default About;
