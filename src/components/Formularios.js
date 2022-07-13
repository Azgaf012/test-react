import React, { useState } from "react";

export default function Formularios() {
    const [nombre, setNombre]=useState("");
    const [sabor, setSabor]=useState("");

  return (
    <>
      <h2>Formularios</h2>
       <form>
        <label htmlFor="nombre">Nombre</label>
        <input 
        type="text" 
        id="nombre" 
        name="nombre" 
        onChange={(e)=> setNombre(e.target.value)} 
        value={nombre}
        />
        <p>Elige tu sabor de JS Favorito</p>
        <label htmlFor="novanillambre">Vanilla</label>
        <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={(e)=> setSabor(e.target.value)} />
        <label htmlFor="react">React</label>
        <input type="radio" id="react" name="sabor" value="react" onChange={(e)=> setSabor(e.target.value)} />
        <label htmlFor="angular">Angular</label>
        <input type="radio" id="angular" name="sabor" value="angular" onChange={(e)=> setSabor(e.target.value)} />
       </form>
    </>
  );
}
