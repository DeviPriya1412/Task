import "./styles.css";
import Displaydata from "./Components/Displaydata.js";
import SearchData from "./Components/SearchData.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Displaydata /> },
    { path: "/search", element: <SearchData /> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
