import { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);

  // with async-await
  const getApiData = async () => {
    const res = await axios.get("https://random.dog/woof.json");
    setData(res.data.url);
  };

  useEffect(() => {
    // with .then promise
    /* axios.get("https://random.dog/woof.json").then((res) => {
      const data = res.data.url;
      setData(data);
    }); */
    getApiData();
  }, []);

  return (
    <div>
      <img width={500} src={data} />
    </div>
  );
};

export default Axios;
