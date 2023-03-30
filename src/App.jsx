import "./App.css";

import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { MyContext } from "./context/MyContext";

const App = () => {
  const [fotos, setFotos] = useState([]);

  const url = "./src/data/data.json";

  const getPhotos = async () => {
    const res = await fetch(url);
    let { photos } = await res.json();
    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      favorito: false,
    }));

    setFotos(photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <MyContext.Provider value={fotos}>
      <NavBar />
      <AppRouter />
      </MyContext.Provider>
    </div>
  );
};

export default App;
