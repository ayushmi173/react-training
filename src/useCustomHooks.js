import { useEffect, useState } from "react";

/**
 * Fetching the latest data from the url
 * @param {*} url 
 * @returns 
 */
const useCustomHooks = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [data]);

  return [data];
};

export default useCustomHooks;
