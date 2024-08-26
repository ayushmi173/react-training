import { useEffect, useState } from "react";

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
