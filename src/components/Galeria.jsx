import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Heart from "./Heart";

const Galeria = () => {
  const  {fotos, setFotos} = useContext(MyContext);
const handleClick = (id)=>{
    const fotoIndex = fotos.findIndex((f) => f.id === id);
    console.log(fotoIndex)
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    console.log(fotos[fotoIndex].favorito)
    setFotos([...fotos]);
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
