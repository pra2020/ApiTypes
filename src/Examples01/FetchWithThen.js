import { useState, useEffect } from "react";

const FetchWithThen = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://random.dog/woof.json")
      .then((res) => res.json())
      .then((res) => setData(res.url));
  }, []);

  return (
    <div>
      <img src={data} width={500} />
    </div>
  );
};

export default FetchWithThen;
