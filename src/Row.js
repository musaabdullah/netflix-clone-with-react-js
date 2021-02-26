import React, { useState, useEffect } from 'react'
import axios from './axios';
function Row({ title, fetchUrl }) {

    const [movies , setMovies] = useState([]);

    const baseUrl = "";

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
        }

        fetchData();
        
    }, [fetchUrl])

    return (
        <div>
            
            {/* title  */}
            <h2>{title }</h2>

            {/* container -> posters  */}

        </div>
    )
}

export default Row
