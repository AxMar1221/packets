import React, { useState } from 'react'

export const Packets = () => {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleCompare = () => {
        const matchData = data.find((item) => item.num === inputText);
        if (matchData) {
            setResult(matchData.char);
        } else {
            setResult('No hay coincidencia')
        }
    }

  return (
    <>
        <input
            type='text'
            value={inputText}
            onChange={handleInputChange}
        />
        <button onClick={handleCompare}>Comparar</button>
        <div>Resultado</div>
    </>
  )
}
