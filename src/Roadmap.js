import React from "react";
import { useState, useEffect } from "react";
const Roadmap = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch(`https://picsum.photos/200/300`).then((res) => {
        setImages(res);
      });
    }, 10000);
  }, []);
  return (
    <>
      <h1>Roadmap</h1>
      <div>
        <img src={images.url} />
      </div>
    </>
  );
};
export default Roadmap;
