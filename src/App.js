import "./App.css";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import UserPage from "./Pages/UserPage";
import Dashboard, { loader as homePageLoader } from "./Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: homePageLoader,
  },
  {
    path: "/login",
    element: <Login />,
    index: true,
  },
  {
    path: "/user/:id",
    element: <UserPage />,
    index: true,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
