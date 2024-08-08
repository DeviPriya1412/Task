import { userdata } from "./userdata.js";
import { Link } from "react-router-dom";
export default function Display() {
  return (
    <div>
      <h1>List Of Users</h1>
      <button>
        <Link to="/search">SEARCH</Link>
      </button>
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
            {userdata.map((person) => (
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
    </div>
  );
}
