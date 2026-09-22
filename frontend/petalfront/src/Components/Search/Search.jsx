import "./Search.css";

const SearchBar = ({ selectedCity, setSelectedCity, onSearch }) => {
    return (
      
// options for selecting a city
      <div className="search">
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="" disabled> Search by City</option>
          <option value="All Cities">All Cities</option>
          <option value="New York City">New York City</option>
          <option value="Philadelphia">Philadelphia</option>
          <option value="Washington D.C.">Washington D.C.</option>
          <option value="St. Louis">St. Louis</option>
        </select>
        
        <button type="button" onClick={() => onSearch(selectedCity)}> Search </button>

      </div>
    );

};

export default SearchBar;