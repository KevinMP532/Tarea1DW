import axios from "axios";
import { useEffect, useState } from "react";
const Response = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.boredapi.com/api/activity")
      .then((res) => {
        setResponse(res.data);
      });
  }, []);
  return response;
};

export default Response;
