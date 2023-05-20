import React from "react";
import UserList from "../component/UserList";
import { useLoaderData, Navigate } from "react-router-dom";

function Dashboard() {
  const isLoggedIn = useLoaderData();
  return (
    <React.Fragment>
      {isLoggedIn ? <UserList /> : <Navigate to="/login" />}
    </React.Fragment>
  );
}

export default Dashboard;

export const loader = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    return true;
  } else {
    return null;
  }
};
