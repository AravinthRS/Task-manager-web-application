import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const CustomModal = ({
  show,
  setShowModal,
  title,
  handleModalSubmit,
  setAddTask,
  addTask,
  handleClose,
  handleModalValidation,
  type,
  taskIndex,
}) => {
  if (type === "edit") {
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={addTask.title}
                onChange={(e) =>
                  setAddTask({ ...addTask, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={addTask.description}
                onChange={(e) =>
                  setAddTask({ ...addTask, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Due date"
                value={addTask.dueDate}
                onChange={(e) =>
                  setAddTask({ ...addTask, dueDate: e.target.value })
                }
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleModalSubmit(e, taskIndex)}
                disabled={handleModalValidation()}
              >
                {type === "add" ? "Add" : "Save"}
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CustomModal;
