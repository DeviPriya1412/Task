import { userdata } from "./userdata.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SearchData() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();

    const filtered = userdata.filter(
      (item) =>
        item.id.toLowerCase().includes(term) ||
        item.name.toLowerCase().includes(term) ||
        item.place.toLowerCase().includes(term) ||
        item.email.toLowerCase().includes(term)
    );

    setFilteredData(filtered);
    setSearchTriggered(true);
    setSearchTerm("");
  };

  useEffect(() => {
    return () => {
      setSearchTriggered(false);
      setFilteredData([]);
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Id,name, place, or email"
        value={searchTerm}
        onChange={handleSearchInput}
      />
      <button onClick={handleSearch}>Search</button>
      <button>
        <Link to="/">Go Back</Link>
      </button>
      {searchTriggered &&
        (filteredData.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Place</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((person) => (
                  <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                    <td>{person.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <li>No Results Found. Try Again.</li>
        ))}
    </div>
  );
}
