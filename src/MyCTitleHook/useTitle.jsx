import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Master Chef India`;
  }, [title]);
};
export default useTitle;
