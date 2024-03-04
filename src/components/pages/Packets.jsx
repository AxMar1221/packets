import { Button, Card, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { data } from '../../data';

export const Packets = () => {
    const [inputText, setInputText] = useState('');
    const [results, setResults] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleCompare = () => {
        const lines = inputText.split('\n');
        const lineResults = [];

        lines.forEach((line) => {
            const inputNum = line.match(/\d+/);

            if (inputNum) {
                const matchData = data.find((i) => i.num === inputNum[0]);

                if (matchData) {
                    setResults(matchData.char);
                } else {
                    setResults('No hay datos que coincidan');
                }
            } else {
                setResults('Datos no encontrados');
            }
        });
        setResults(lineResults);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleCompare();
        }
    }

    return (
        <>
            <TextField
                multiline
                rows={4}
                type='text'
                value={inputText}
                variant='outlined'
                onChange={handleInputChange}
                onKeyPress={handleEnter}
            />
            <Button variant='contained' onClick={handleCompare}>Comparar</Button>
            <Card>
                {Array.isArray(results) && results.length > 0 ? (
                    results.map((result, index) => (
                        <Typography key={index} variant="h4">
                            Resultado {index + 1}: {result}
                        </Typography>
                    ))
                ) : (
                    <Typography variant="h4">No hay resultados para mostrar</Typography>
                )}
            </Card>
        </>
    )
}
