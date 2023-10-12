import React, { useState } from 'react';
import Blowfish from 'node-blowfish';

const Cifradoblowfish = () => {
  const [opcion, setOpcion] = useState('1');
  const [frase, setFrase] = useState('');
  const [resultado, setResultado] = useState('');

  const cifrarDescifrar = () => {
    const bf = new Blowfish('laclave');
    let textoProcesado = '';

    if (opcion === '1') {
      textoProcesado = bf.encrypt(frase);
    } else if (opcion === '2') {
      textoProcesado = bf.decrypt(frase);
    }

    setResultado('Resultado: ' + textoProcesado);
  };

  return (
    <div>
      <h1>Cifrado Blowfish</h1>
      <label htmlFor="opcion">Elige una opción:</label>
      <select id="opcion" value={opcion} onChange={(e) => setOpcion(e.target.value)}>
        <option value="1">Cifrar</option>
        <option value="2">Descifrar</option>
      </select>
      <div>
        <label htmlFor="frase">Ingresa una frase:</label>
        <input type="text" id="frase" value={frase} onChange={(e) => setFrase(e.target.value)} />
      </div>
      <button onClick={cifrarDescifrar}>Ejecutar</button>
      <div id="resultado">{resultado}</div>
    </div>
  );
};

export default Cifradoblowfish;
