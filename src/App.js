import React, {useState} from "react";
import "./App.css";

export default() => {
const[numero1, setnumero1]= useState("");
const[numero2, setnumero2]= useState("");
const[resultado, setresultado] = useState("");

const soma = Number(numero1) + Number(numero2);
  return(
    <div className="container">

      <div className="card">
      <h2>Soma de 02 Números</h2>

      <input type="number"  
            placeholder="Digite o primeiro número"
            value={numero1}
            onChange={(e) => setnumero1(e.target.value)}
        />
         <input type="number"  
            placeholder="Digite o segundo número"
            value={numero2}
            onChange={(e) => setnumero2(e.target.value)}
        />

        <p className="resultado">Resultado: {soma}</p>
        </div>
    </div>
  )
}
