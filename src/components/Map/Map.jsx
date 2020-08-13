import React from "react"; //
import Iframe from "react-iframe";
import "./Map.css";

const Map = ({ latitude, longitude }) => {
  return (
    <div className="iframeDiv">
      <Iframe
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=${latitude},${longitude}`}
        allowFullScreen
      ></Iframe>
    </div>
  );
};

export default Map;
