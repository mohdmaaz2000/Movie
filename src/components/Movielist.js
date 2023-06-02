import React, { useEffect, useState } from 'react'
import Item from './Item';


export default function Movielist() {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async (movies) => {
        let url = `https://api.tvmaze.com/search/shows?q=all`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setMovies(parsedData);
    }
    useEffect(() => {
        fetchMovies(movies);
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <h1 className='mb-3 mx-3' style={{ textAlign: 'center', marginTop: '1rem' }}>Movies </h1>

            <div className="container">
                {
                    movies.map((element) => {
                        return (
                            <div key={element.score} className='col-md-4 my-3'>
                                <Item data={element}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}