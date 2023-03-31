import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Heart from "./Heart";

const Galeria = () => {
  const  fotos = useContext(MyContext);
const handleClick = (id)=>{
    console.log('me diste click en el id', id)
}
  
  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto) => (
        <div
          onClick={() => handleClick(foto.id)}
          className="foto"
          key={foto.id}
          style={{ backgroundImage: `url(${foto.src})` }}
        >
          <Heart filled={foto.favorito} />
        </div>
      ))}
    </div>
  );
};

export default Galeria;
