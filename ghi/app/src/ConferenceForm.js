import React from 'react';
import { useEffect, useState } from 'react';

function ConferenceForm() {
    const [locations, setLocations] = useState([]);

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const [start, setStart] = useState('');
    const handleStartChange = (event) => {
        const value = event.target.value;
        setStart(value);
    }

    const [end, setEnd] = useState('');
    const handleEndChange = (event) => {
        const value = event.target.value;
        setEnd(value);
    }

    const [description, setDescription] = useState('');
    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
    }

    const [maxPresentations, setMaxPresentations] = useState('');
    const handleMaxPresentationsChange = (event) => {
        const value = event.target.value;
        setMaxPresentations(value);
    }

    const [maxAttendees, setMaxAttendees] = useState('');
    const handleMaxAttendeesChange = (event) => {
        const value = event.target.value;
        setMaxAttendees(value);
    }

    const [location, setLocation] = useState('');
    const handleLocationChange = (event) => {
        const value = event.target.value;
        setLocation(value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = name;
        data.starts = start;
        data.ends = end;
        data.description = description;
        data.max_presentations = maxPresentations;
        data.max_attendees = maxAttendees;
        data.location = location;

        console.log(data);
        const conferenceUrl = 'http://localhost:8000/api/conferences/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(conferenceUrl, fetchConfig);
        if (response.ok) {
            const newConference = await response.json();
            console.log(newConference);

            setName('');
            setStart('');
            setEnd('');
            setDescription('');
            setMaxPresentations('');
            setMaxAttendees('');
            setLocation('');
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/locations/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setLocations(data.locations);
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
                        <h1>Create a new Conference</h1>

                        <form onSubmit={handleSubmit} id="create-conference-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={handleStartChange} required type="date" name="startDate" id="startDate" className="form-control" />
                                <label htmlFor="startDate">Conference Start Date</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={handleEndChange} required type="date" name="endDate" id="endDate" className="form-control" />
                                <label htmlFor="endDate">Conference End Date</label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea onChange={handleDescriptionChange} className="form-control" id="description" name="description" rows="5" required></textarea>
                                <label htmlFor="description"></label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={handleMaxPresentationsChange} required type="number" name="max_presentations" id="max_presentations" className="form-control" />
                                <label htmlFor="max_presentations">Max Presentations</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={handleMaxAttendeesChange} required type="number" name="max_attendees" id="max_attendees" className="form-control" />
                                <label htmlFor="max_attendees">Max Attendees</label>
                            </div>

                            <div className="mb-3">
                                <select onChange={handleLocationChange} value={location} required name="location" id="location" className="form-select">
                                    <option value="">Choose a Location</option>
                                    {locations.map(location => {
                                        return (
                                            <option value={location.id} key={location.name}>
                                                {location.name}
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

export default ConferenceForm;
