import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  const [name, setName] = useState("Andree");

  useEffect(() => {
    console.log("Moviendo el Scroll");

    const detectScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectScroll);

    return () => window.removeEventListener("scroll", detectScroll);
  }, [scrollY]);

  useEffect(() => {
    console.log("Fase de montaje");
  }, []);

  useEffect(() => {
    console.log("Fase de Actualización");
  });

  useEffect(() => {
    return () => {
      console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}
