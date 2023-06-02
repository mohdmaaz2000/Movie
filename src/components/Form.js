import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert';

export default function Form(props) {
    let { data } = props
    const [alert, setAlert] = useState(null);
    const [credentials, setCredentials] = useState({ name: '', email: '', Mname: `${data.show.name}`, Language: `${data.show.language}` })
    const navigate = useNavigate();

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const showAlert = () => {
        setAlert({
            msg: 'The ticket has been booked and sent to your email',
            type: 'success'
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const submit = () => {
        showAlert();
        setCredentials({ name: '', email: '', Mname: `${data.show.name}`, Language: `${data.show.language}` });
    }
    const goHome = () => {
        navigate('/');
    }
    return (
        <>
            <hr />
            <h1 className='mb-3 mx-3' style={{ textAlign: 'center', marginTop: '1rem' }}>Book Ticket </h1>

            <div className="formContainer">
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onChange={onchange} placeholder='Enter yor name' required type="text" className="form-control" name='name' id="name" aria-describedby="emailHelp" minLength={3} />
                    </div>
                    <div className="mb-3" >
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={onchange} placeholder='example@email.com' required type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Mname" className="form-label">Movie Name</label>
                        <input onChange={onchange} value={data.show.name} required readOnly type="text" className="form-control" name='Mname' id="Mname" aria-describedby="emailHelp" minLength={3} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Language" className="form-label">Language </label>
                        <input onChange={onchange} value={data.show.language} required readOnly type="text" className="form-control" name='Language' id="Language" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label for="Time">Select Time</label>
                        <select required id="Time" class="form-control">
                            <option selected>Choose...</option>
                            <option>8 am</option>
                            <option>12 noon</option>
                            <option>4pm</option>
                            <option>8pm</option>
                            <option>11pm</option>
                        </select>
                    </div>
                </form>
                <button onClick={submit} type="submit" className="btn btn-sm btn-dark my-btn">Book Ticket</button>
                <Alert alert={alert} />
            </div>
            <button onClick={goHome} className="btn btn-sm btn-dark my-btn">Go to Home page</button>

        </>
    )
}
