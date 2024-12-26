import { useEffect } from "react";

const useTopPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useTopPage;
