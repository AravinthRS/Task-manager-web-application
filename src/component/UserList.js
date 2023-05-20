import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.user.usersList);
  const [usersList, setUsersList] = useState([...data]);

  const sortByName = () => {
    const list = [...usersList];
    setUsersList(
      list.sort((a, b) => {
        let nameA = a.userName.toLowerCase(),
          nameB = b.userName.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      })
    );
  };

  const handlelogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };

  const handleView = (userName) => {
    navigate(`/user/${userName}`);
  };
  return (
    <React.Fragment>
      <div className="p-5">
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="primary"
            className="action-button"
            onClick={sortByName}
          >
            Sort by order
          </Button>
          <Button
            variant="primary"
            className="action-button"
            onClick={handlelogout}
          >
            Logout
          </Button>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((userList, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{userList.userName}</td>
                  <td>{userList.email}</td>
                  <td className="d-flex justify-content-center">
                    <Button
                      variant="secondary"
                      className="action-button"
                      onClick={() => handleView(userList.id)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserList;
