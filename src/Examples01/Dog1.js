import { useQuery } from "react-query";

const Dog1 = () => {
  const {data} = useQuery("dog", () =>
    fetch("https://random.dog/woof.json").then((res) => res.json())
  );

  return <img src={data.url} width={100} />;
};

export default Dog1;
