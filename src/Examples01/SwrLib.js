import useSWR from "swr"; // HOOK TO MAKE API REQUEST

// this function will take the url as input arg and uses fetch api
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SwrLib = () => {
  // 1st para is api, 2nd para is function
  const { data, error } = useSWR("https://random.dog/woof.json", fetcher, {
    suspense: true,
  }); // fetcher is used as a function how to handle/organize the data

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <div>
      {/* <img width={500} src={data?.url}/> */}
      <img width={500} src={data.url} />{" "}
      {/* here ? is not needed as suspense fallback is used */}
    </div>
  );
};

export default SwrLib;
