import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Food Gallery - ${title}`;
  }, [title]);
};

export default useTitle;
