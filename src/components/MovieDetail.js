import React from 'react'
import { useLocation } from 'react-router-dom';
import Form from './Form';
export default function MovieDetail() {
    const location = useLocation();
    const data = location.state.data
    console.log(data);
    return (
        <>
            <h1 className='mb-3 mx-3' style={{ textAlign: 'center', marginTop: '1rem' }}>{data.show.name} </h1>
            <div className="parent">
                <img src={data.show.image.original} alt="..." />
            </div>
            <div className="container-box">
                <div>
                    <b>Name - </b> {data.show.name}
                </div>
                <hr />
                <div>
                    <b>Language - </b> {data.show.language}
                </div>
                <hr />
                <div>
                    <b>Type - </b>Type  {data.show.type}
                </div>
                <hr />
                <div>
                    <b>Genres -</b> {data.show.genres.map((element) => {
                        return (
                            <span>{element},</span>
                        )
                    })}
                </div>
                <hr />
                <div>
                    <b>Rating -</b> {data.show.rating.average}
                </div>
                <hr />
                <div>
                    <b>Summary -</b>  <p style={{ width: '127%', display: 'block' }} dangerouslySetInnerHTML={{ __html: data.show.summary }} />
                </div>

                <a href={data.show.url} rel="noreferrer" target="_blank" style={{ display: 'table', margin: 'auto' }} className=" btn btn-sm btn-dark my-btn">Read More about Movie</a>
            </div>

                <Form data={data} />
        </>
    )
}
