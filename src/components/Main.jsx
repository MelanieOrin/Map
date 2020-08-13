import React, { useState, useEffect } from "react";
import axios from "axios";
import Location from "./Location.jsx";
import Map from "./Map/Map.jsx";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [responseData, setResponseData] = useState({});

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url:
        "https://api.ipdata.co/?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e&fields=city,country_name,latitude,longitude",
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => {
        setResponseData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {isLoading && <h2>Loading... </h2>}
      {!isLoading && (
        <div>
          <Location
            city={responseData.city}
            country={responseData.country_name}
          />
          <Map
            latitude={responseData.latitude}
            longitude={responseData.longitude}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
