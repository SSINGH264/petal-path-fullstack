import { useState } from "react";

//importing card images
import flowerShow from "../../assets/philadelphiaflowershow.png";
import NYBGOrchid from "../../assets/NYBGOrchid.png";
import MOBOT from "../../assets/MOBOT.png";
import cherryBlossomDC from "../../assets/NationalCherryBlossom.png";
import stateFlowers from "../../assets/stateflowersDC.png";
import lyndhurst from "../../assets/lyndhurst.png";
import macys from "../../assets/macys.png";
import bonsai from "../../assets/bonsai.png";
import artinbloom from "../../assets/artinbloom.png";
import carlsbadflower from "../../assets/carlsbadflower.png";


import "./Browse.css";
import SearchBar from "../Search/Search";

// to create the card
// child component is browsecard

const BrowseCard = ({title, image, date, location}) => {
    return (
        <div className="browse-card">
          <div className = "card-image" >
        <img src={image} alt={title} />
        </div>

          {/* alt text is set by using the event title */}

        <div className="card-content">
          <p><strong>{date}</strong></p>
          <p>{location}</p>
        </div>

        <div className="card-label">{title}</div>

      </div>
    );
};

//the browse is the parent component storing needed information
const Browse = () => {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [appliedCity, setAppliedCity] = useState("All Cities");
  
 // Array of events

  const categories = [
    { title: "Philadelphia Flower Show",
      city: "Philadelphia",
      image: flowerShow,
      date: "February 28 - March 8 2026",
      location: "Penn Convention Center"
    
    },

    { title: "Orchid Show NYBG",
      city: "New York City",
      image: NYBGOrchid,
      date: "February 7 - April 26, 2026",
      location: "Haupt Conservatory, NYBG"
    },

    { title: "America's State Flowers",
      city: "Washington D.C.",
      image: stateFlowers,
      date: "April 10 - October 12 2026",
      location: "United States Botanic Garden"
    },

    { title: "Patterns in Nature MOBOT",
      city: "St. Louis",
      image: MOBOT,
      date: "April 10 - September 26 2026",
      location: "Missouri Botanical Garden"

    },

    { title: "Cherry Blossom Festival",
      city: "Washington D.C.",
      image: cherryBlossomDC,
      date: "March 20 - April 12, 2026",
      location: "Tidal Basin"

    },

    { title: "Lyndhurst Flower House",
      city: "New York City",
      image: lyndhurst,
      date:  "April 18 - 19 2026",
      location: "635 S Broadway"
    },

    { title: "Macy's Flower Show",
      city: "New York City",
      image: macys,
      date: "April 23 - May 10 2026",
      location: "Macy's Herald Square"
    },

    { title: "Kurume Azalea Bonsai Display",
      city: "Philadelphia",
      image: bonsai,
      date: "April 23 - May 10 2026",
      location: "Longwood Gardens"
    },

    { title: "Art in Bloom",
      city: "St. Louis",
      image: artinbloom,
      date: "February 27 - March 1 2026",
      location: "St. Louis Art Museum"
    },


    { title: "The Flower Fields",
      city: "Carlsbad",
      image: carlsbadflower,
      date: "March 1 - May 10 2026",
      location: "5704 Paseo del Norte"
    },
  ];

// updates the search filter when user selects city

    const handleSearch = (city) => {
      setAppliedCity(city);
    };

  const filteredCategories =
    appliedCity === "All Cities"
    ? categories
    : categories.filter((category) => category.city === appliedCity);

// search bar is passing props from browse

return (
    <section className="browse-section">
      <div className="browse-header">
        <h2 className="browse-title">Featured Events</h2>

      <SearchBar
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        onSearch={handleSearch}
      />
      </div>
{/* maps through filtered event data and creates one card per event */}

      <div className="browse-row">
        {filteredCategories.map((category, index) => (
          <BrowseCard 
          key={index} 
          title={category.title}
          image={category.image}
          date={category.date}
          location={category.location}/>
        ))}
      </div>
    </section>
  );

};

export default Browse;