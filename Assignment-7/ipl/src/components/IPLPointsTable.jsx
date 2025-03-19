import React, { useEffect, useState } from 'react';

const IPLPointsTable = () => {
    const [points, setPoints] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.NRR - b.NRR);
                setPoints(data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>IPL Points Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Team</th>
                        <th>Matches</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Tied</th>
                        <th>Points</th>
                        <th>NRR</th>
                    </tr>
                </thead>
                <tbody>
                    {points.map(point => (
                        <tr key={point.no}>
                            <td>{point.No}</td>
                            <td>{point.Team}</td>
                            <td>{point.Matches}</td>
                            <td>{point.Won}</td>
                            <td>{point.Lost}</td>
                            <td>{point.Tied}</td>
                            <td>{point.Points}</td>
                            <td>{point.NRR}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}   

export default IPLPointsTable;