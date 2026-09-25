import { useState, useEffect } from "react";
import "./Event.css"

// events url
const API_URL = "http://localhost:8080/events";
//locations url
const LOCATIONS_URL = "http://localhost:8080/locations";
// cities url
const CITIES_URL = "http://localhost:8080/cities";

const Events = () => {
// list of events from database
const [events, setEvents] = useState ([]);

// these will hold the state of the values in the event form
const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [locations, setLocations] = useState([]);
const [locationId, setLocationId] = useState("");

// thse will hold the state for the values in location
const [cities, setCities] = useState ([]); //location from dropdown
const [locationName, setLocationName] = useState ("");
const [locationDescription, setLocationDescription] = useState("");
const [locationCityId, setLocationCityId] = useState("");
const [locationEdit, setLocationEdit] = useState(null);
const [cityToAdd, setCityToAdd] = useState("");

// for event id
const [idEdit, setIdEdit] = useState(null);

useEffect(() => {
    fetchEvents();
    fetchLocations();
    fetchCities();
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

const fetchCities = () => {
  fetch(CITIES_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
      setCities(data);
    })
    .catch(function (error) {
      console.error("Error fetching cities", error);
    });

}


// marking a city of interest
const handleAddCityInterest = (e) => {
  e.preventDefault();
  const city = cities.find((city) => city.id === parseInt(cityToAdd));
  if (!city) return;
  
  fetch (`${CITIES_URL}/${city.id}`, {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ name: city.name, state: city.state, interested: true })
  })
  
  .then(function (response) {
    return response.json();
  })
  .then(function () {
    setCityToAdd("");
    fetchCities();
  })
  .catch(function(error) {
    console.error ("Error adding city interest:", error);
  });

};

//removing a city of interest
const handleRemoveCityOfInterest = (city) => {
  fetch(`${CITIES_URL}/${city.id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name: city.name, state: city.state, interested: false }),

    })

    .then(function(response) {
      return response.json();
    })

    .then(function() {
      fetchCities();

    })

    .catch(function (error) {
      console.error("Error removing city:", error)

    });

};




// CRUD for location

//reseting location form 
const resetLocationForm = () => {
  setLocationName("");
  setLocationDescription("");
  setLocationCityId("");
  setLocationEdit(null);
};

//sending location to backend (for post)
const handleAddLocation = (locationData) => {
  fetch(LOCATIONS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(locationData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      resetLocationForm();
      fetchLocations();
    })
    .catch(function (error) {
      console.error("Error adding location:", error);
    });
};
// updating existing location (for put)
const handleUpdateLocation = (id, locationData) => {
  fetch(`${LOCATIONS_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(locationData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      resetLocationForm();
      fetchLocations();
    })
    .catch(function (error) {
      console.error("Error updating location:", error);
    });
};

// deleting location by id ( for delete)
const handleDeleteLocation = (id) => {
  fetch(`${LOCATIONS_URL}/${id}`, {
    method: "DELETE",
  })
    .then(function () {
      fetchLocations();
    })
    .catch(function (error) {
      console.error("Error deleting location:", error);
    });
};

const handleLocationSubmit = (e) => {
  e.preventDefault(); // prevents page from refreshing


//building location object to send
const locationData = {
  name: locationName,
  description: locationDescription,
  city: {id: parseInt(locationCityId)}
};

//
if (locationEdit) {
  handleUpdateLocation(locationEdit, locationData);
} else {
  handleAddLocation (locationData);
}
};

//handling update
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

  //one for location and one for event
  return (
    <section className="events-section">
      <h1 className="events-title"> Manage Locations </h1>

      <div className="events-content"> 
        <form className = "event-form" onSubmit={handleAddCityInterest}>
          <h2>Add City of Interest</h2>

          <label htmlFor="cityToAdd"> city </label>
          <select id="cityToAdd" value={cityToAdd} onChange={(e) => setCityToAdd(e.target.value)} required>
            <option value="">Choose a city</option>
           {cities.map((city) => (
            <option key={city.id} value={city.id}>{city.name}</option>
             ))}
           </select>

           <button type="submit">Save City</button>

        </form>

        <div className = "event-list">
          {cities.filter((city) => city.interested).length === 0 && 
            <p>No cities of interest yet.</p>}
          {cities.filter((city) => city.interested).map((city) => ( 
            <div className = "event-row" key={city.id}> 
            <div className = "event-info">
              <strong>{city.name}</strong>
            </div>

          <div className = "event-buttons">
            <button onClick={() => handleRemoveCityOfInterest(city)}>Remove</button>
            </div>
            </div>

          ))}
          </div>
        </div> 

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

                {locations
                  .filter((location) => location.city && location.city.interested)
                  .map((location) => (
                    <option key={location.id} value={location.id}>{location.name}</option>
                ))}

              </select>

          <button type="submit">{idEdit ? "Update Event" : "Save Event"}</button>
          {idEdit && <button type="button" onClick={resetForm}>Cancel</button>}
        </form>

        <div className="event-list">
          {events.length === 0 && <p>No events planned.</p>}
          {events.map((event) => (
            <div className="event-row" key={event.id}>
              <div className="event-info"> 
                <strong>{event.title}</strong> - {event.date}
                {event.location &&` | ${event.location.name}`}
                {event.location && event.location.city && ` | ${event.location.city.name}`}
              </div>
              <div className ="event-buttons">
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