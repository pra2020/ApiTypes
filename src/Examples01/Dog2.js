import { useQuery } from "react-query";

const Dog2 = () => {
  const {data} = useQuery("dog", () =>
    fetch("https://random.dog/woof.json").then((res) => res.json())
  );

  return <img src={data.url} width={100} />;
};

export default Dog2;
