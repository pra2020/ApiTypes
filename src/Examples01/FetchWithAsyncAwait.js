import { useEffect, useState } from "react";

const FetchWithAsyncAwait = () => {

    const [ data, setData ] = useState(null);
    
     const getImgUrl = async () => {
        const res = await fetch("https://random.dog/woof.json");
        const data = await res.json();
        setData(data.url);
    }

    useEffect(() => {
        getImgUrl();
    }, [])

    return <div>
        <img width={500} src={data}/>
    </div>
};

export default FetchWithAsyncAwait;