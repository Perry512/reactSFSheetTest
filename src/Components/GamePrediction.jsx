import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const GamePrediction = ({ games }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      setData(games);
    }, [games]);
  
    const fetchData = async () => {
      try {
        const response = await fetch('testFile.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div>
      <h1>Game Predictions</h1>
      <table>
        <thead>
          <tr>
            <th>Week Number</th>
            <th>Game Count</th>
            <th>Player Name</th>
            <th>Character Name</th>
            <th>Outcome</th>
            <th>Games Won</th>
            <th>Games Lost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
              <td>{row[4]}</td>
              <td>{row[5]}</td>
              <td>{row[6]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GamePrediction;
