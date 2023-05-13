import { useState, useEffect } from "react";

import axios from "axios";
import GutterRow from "../../GutterRow";

const EffectUsecase = () => {
  const [data, setData] = useState(null);
  const [fetchTimes, setFetchTimes] = useState(0);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      console.log("API CALLED");
    });
  };

  const handleFetch = () => {
    setFetchTimes(fetchTimes + 1);
    console.log(`Fetch again ${fetchTimes} times`);
  };

  useEffect(() => {
    fetchData();
  }, [fetchTimes]);

  return (
    <>
      <div>
        Fetched: {data ? `${data.length} posts (#${fetchTimes})` : "No data"}
      </div>
      <div>
        <button onClick={handleFetch}>Re-fetch</button>
        <GutterRow />
        <span>times: {fetchTimes}</span>
      </div>
    </>
  );
};

export default EffectUsecase;
