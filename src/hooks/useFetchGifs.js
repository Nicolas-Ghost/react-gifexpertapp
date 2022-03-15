import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (anime) => {
  const [state, setState] = useState({ data: [], loading: true });

  // No pueden ser async
  useEffect(() => {
    getGifs(anime).then((imgs) => {
      
        setState({ data: imgs, loading: false });
      
    });
  }, [anime]);

  return state; // { data:[], loading: true }
};
