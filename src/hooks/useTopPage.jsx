import { useEffect } from "react";

const useTopPage = (dependencies = []) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, dependencies);
};

export default useTopPage;
