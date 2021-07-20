import axios from "axios";
import { useEffect, useState } from "react";
const Response = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name")
      .then((res) => {
        setResponse(res.data);
      });
  }, []);
  return response;
};

export default Response;
