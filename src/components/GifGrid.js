import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ anime }) => {
  // const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(anime);

  // // hook para que se dispare solo una vez la api
  // // Si el anime cambia, lanza el api
  // useEffect(() => {
  // getGifs( anime )
  // .then(imgs => setImages( imgs ))
  // }, [ anime ]);

  // parentesis retorna
  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {anime}</h3>
      {/* Si loading es true entonces carga, si no no hace nada */}
      {loading && <p className="animate__animated animate__shakeX">Cargando...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
