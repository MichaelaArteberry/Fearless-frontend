import React from 'react';
import { useEffect, useState } from 'react';

function PresentationForm() {
    const [states, setStates] = useState([]);

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const [presenterEmail, setPresenterEmail] = useState('');
    const handlePresenterEmail = (event) => {
        const value = event.target.value;
        setPresenterEmail(value);
    }

    const [companyName, setCompanyName] = useState('');
    const handleCompanyName = (event) => {
        const value = event.target.value;
        setCompanyName(value);
    }

    const [title, setTitle] = useState('');
    const handleTitleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
    }

    const [synopsis, setSynopsis] = useState('');
    const handleSynopsisChange = (event) => {
        const value = event.target.value;
        setSynopsis(value);
    }

    const [conference, setConference] = useState('');
    const handleConferenceChange = (event) => {
        const value = event.target.value;
        setConference(value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.presenter_name = name;
        data.presenter_email = presenterEmail;
        data.company_name = companyName;
        data.title = title;
        data.synopsis = synopsis;
        data.conference = conference;

        console.log(data);
        const presentationUrl = `http://localhost:8000${conference}presentations/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(presentationUrl, fetchConfig);
        if (response.ok) {
            const newPresentation = await response.json();
            console.log(newPresentation);

            setName('');
            setPresenterEmail('');
            setCompanyName('');
            setTitle('');
            setSynopsis('');
            setConference('');
        }
        const form = document.getElementById('create-presentation-form');
        form.reset();
    }

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/conferences/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setStates(data.conferences);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new Presentation</h1>
                        <form onSubmit={handleSubmit} id="create-presentation-form">

                            <div className="form-floating mb-3">
                                <input onChange={handleNameChange} placeholder="Presenter name" required type="text" name="presenter_name" id="presenter_name" className="form-control" />
                                <label htmlFor="presenter_name">Presenter name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={handlePresenterEmail} placeholder="Presenter email" required type="email" name="presenter_email" id="presenter_email" className="form-control" />
                                <label htmlFor="presenter_email">Presenter email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={handleCompanyName} placeholder="Company name" type="text" name="company_name" id="company_name" className="form-control" />
                                <label htmlFor="company_name">Company name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={handleTitleChange} placeholder="Title" required type="text" name="title" id="title" className="form-control" />
                                <label htmlFor="title">Title</label>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="synopsis">Synopsis</label>
                                <textarea onChange={handleSynopsisChange} className="form-control" id="synopsis" rows="3" name="synopsis" />
                            </div>

                            <div className="mb-3">
                                <select onChange={handleConferenceChange} required name="conference" id="conference" className="form-select">
                                    <option value="">
                                        Choose a conference
                                    </option>
                                    {states.map(conference => {
                                        return (
                                            <option value={conference.href} key={conference.href}>
                                                {conference.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PresentationForm;
