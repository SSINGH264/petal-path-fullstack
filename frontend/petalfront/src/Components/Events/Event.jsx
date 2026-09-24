import { useState, useEffect } from "react";
import "./Event.css"

// base url
const API_URL = "http://localhost:8080/events";
//locations url
const LOCATIONS_URL = "http://localhost:8080/locations";

const Events = () => {
// list of events from database
const [events, setEvents] = useState ([]);

// these will hold the state of the values in the form
const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [locations, setLocations] = useState([]);
const [locationId, setLocationId] = useState("");

// for event id
const [idEdit, setIdEdit] = useState(null);

useEffect(() => {
    fetchEvents();
    fetchLocations();
}, []);

const fetchEvents = () => {
  fetch(API_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setEvents(data);
    })
    .catch(function (error) {
      console.error("Error fetching events:", error);
    });
};

const fetchLocations = () => {
  fetch(LOCATIONS_URL)
  .then(function (response) {
    return response.json();
  })

  .then(function(data) {
    setLocations(data);
  })

  .catch(function (error) {
    console.error("Error fetching locations", error);
  });

}

const handleUpdateEvent = (id, eventData) => {
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      resetForm();
      fetchEvents();
    })
    .catch(function (error) {
      console.error("Error updating event:", error);
    });
};

const resetForm = () => { //resets the fields
    setTitle("");
    setDate("");
    setLocationId("");
    setIdEdit(null);
};

const handleAddEvent = (eventData) => {
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
  })
    .then(function (response) {
        return response.json();
    })
    .then(function () {
        resetForm();
        fetchEvents();
    })
    .catch(function (error) {
      console.error("Error adding event:", error);
    });
};

const handleDeleteClick = (id) => {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })
    .then(function () {
      fetchEvents();
    })
    .catch(function (error) {
      console.error("Error deleting event:", error);
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = { title,
                        date,
                        location:{id: parseInt(locationId)} 
                      }; //adding the event data to JSON

    if (idEdit) {
      handleUpdateEvent(idEdit, eventData);
    } else {
      handleAddEvent(eventData);
    }
  };

  const handleEditClick = (event) => { //edit event will read all the values
    setTitle(event.title);
    setDate(event.date);
    setIdEdit(event.id);
    setLocationId(event.location ? event.location.id : "");
  };

  return (
    <section className="events-section">
      <h1 className="events-title">Manage Events</h1>

      <div className="events-content">
        <form className="event-form" onSubmit={handleSubmit}>
          <h2>{idEdit ? "Edit Event" : "Add New Event"}</h2>

          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

          <label htmlFor="date">Date</label>
          <input id="date" type="text" value={date} onChange={(e) => setDate(e.target.value)} required />

          <label htmlFor="location">Location</label>
          <select id="location" value={locationId} onChange={(e) => setLocationId(e.target.value)} required>
              <option value="">Choose a location</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}> {location.name} </option>
                ))}
              </select>

          <button type="submit">{idEdit ? "Update Event" : "Save Event"}</button>
          {idEdit && <button type="button" onClick={resetForm}>Cancel</button>}
        </form>

        <div className="event-list">
          {events.length === 0 && <p>No events planned.</p>}
          {events.map((event) => (
            <div className="event-row" key={event.id}>
              <div>
                <strong>{event.title}</strong> - {event.date}
                {event.location &&` | ${event.location.name}`}
                {event.location && event.location.city && ` | ${event.location.city.name}`}
              </div>
              <div>
                <button onClick={() => handleEditClick(event)}>Edit</button>
                <button onClick={() => handleDeleteClick(event.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;