import React, { useEffect } from 'react';
import axios from 'axios';

function DataFetcher() {
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount


    function fetchData() {
        axios.get('http://localhost:3000/api/data')
            .then(response => {
                console.log('Data received: ', response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div>
            Check console for data.
        </div>
    );
}

export default DataFetcher;