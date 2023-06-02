
import { useNavigate } from "react-router-dom"
export default function Item(props) {
    const navigate = useNavigate();
    let {data} = props

    const handleClick = () => {
        navigate('/movieDetail', { state:{data : data} });
    }

    return (
        <>
            <div className="card">
                <img src={data.show.image.medium} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.show.name}</h5>
                    <p className="card-text"><b>Language-</b>{data.show.language}</p>
                    <p className='card-text'><b>Type-</b>{data.show.type}</p>
                    <footer className="blockquote-footer my-1 mb-2">Rating-{data.show.rating.average}</footer>
                    <button onClick={handleClick} href='/movieDetail' rel="noreferrer" target="_blank" style={{display:'table',margin:'auto'}} className=" btn btn-sm btn-dark">Read More</button>
                </div>
            </div>

        </>
    )
}
