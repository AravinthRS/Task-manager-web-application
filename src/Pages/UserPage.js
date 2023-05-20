import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import CustomModal from "../component/CustomModal";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../store/user";
import "./Login.css";

function UserPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [modalType, setModalType] = useState("add");
  const [showModal, setShowModal] = useState(false);
  const [taskIndex, setTaskIndex] = useState(0);
  const data = useSelector((state) => state.user.usersList);
  const user = data.find((user) => Number(id) === Number(user.id));

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleShow = (type, index) => {
    if (type === "edit") {
      const currentTask = user.tasks[index];
      setTask(currentTask);
      setTaskIndex(index);
    } else {
      setTask({
        title: "",
        description: "",
        dueDate: "",
      });
    }
    setShowModal(true);
    setModalType(type);
  };

  const handleClose = () => setShowModal(false);

  const handleModalSubmit = (e, index) => {
    e.preventDefault();
    if (modalType === "add") {
      dispatch(
        userAction.addTask({
          task,
          id,
        })
      );
    } else {
      dispatch(
        userAction.editTask({
          task,
          index,
          id,
        })
      );
    }
    setTask({
      title: "",
      description: "",
      dueDate: "",
    });
    setShowModal(false);
  };

  const handleModalValidation = () => {
    return !(
      task.title.length > 0 &&
      task.description.length > 0 &&
      task.dueDate.length > 0
    );
  };

  const handleDeleteTask = (index) => {
    dispatch(
      userAction.deleteTask({
        index,
        id,
      })
    );
  };

  return (
    <React.Fragment>
      <div>
        <div className="user-container">
          <h2>{user.userName}</h2>

          {user?.tasks.length > 0 ? (
            <div className="p-5">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Delete</th>
                    <th>Edit </th>
                  </tr>
                </thead>
                <tbody>
                  {user?.tasks.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.title}</td>
                      <td>{value.description}</td>
                      <td>{value.dueDate}</td>
                      <td>
                        <Button
                          variant="secondary"
                          className="dashboard-button"
                          onClick={() => handleDeleteTask(index)}
                        >
                          Delete
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="secondary"
                          className="dashboard-button"
                          onClick={() => handleShow("edit", index)}
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <p>No tasks found</p>
          )}
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <Button variant="outline-success" onClick={() => handleShow("add")}>
            Add Task
          </Button>
          <Button variant="outline-success" onClick={() => navigate("/")}>
            Back
          </Button>
        </div>
        <CustomModal
          type={modalType}
          show={showModal}
          taskIndex={taskIndex}
          setShowModal={setShowModal}
          title={modalType === "add" ? "Add Task" : "Edit Task"}
          handleModalSubmit={handleModalSubmit}
          setAddTask={setTask}
          addTask={task}
          handleClose={handleClose}
          handleModalValidation={handleModalValidation}
        />
      </div>
    </React.Fragment>
  );
}

export default UserPage;
