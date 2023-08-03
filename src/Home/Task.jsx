import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Task = ({ task }) => {
  const { taskTitle, taskDescription, Details, status, time, _id } = task;

  // State to manage the modal visibility
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]); // Change "tasks" state name

  const url = 'https://task-server-suraiyatithi.vercel.app/tasks';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTasks(data)); // Update the "tasks" state after fetching data
  }, []);

  // Function to handle opening and closing the modal
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://task-server-suraiyatithi.vercel.app/tasks/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data); // Check the response from the server
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your Toy has been deleted.', 'success');
              // Update the tasks state after deletion
              const remaining = tasks.filter((cof) => cof._id !== _id);
              setTasks(remaining);
            }
          })
          .catch((error) => {
            console.error('Error deleting the task:', error);
          });
      }
    });
  };
  const [showModal2, setShowModal2] = useState(false);
  const [formValues, setFormValues] = useState({
    taskTitle: task.taskTitle,
    taskDescription: task.taskDescription,
    Details: task.Details,
    time: task.time,
    status: task.status,
  });

  // Function to handle opening and closing the modal
  const handleModal2 = (show) => {
    setShowModal2(show);
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Function to handle the form submission and update the task
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`https://task-server-suraiyatithi.vercel.app/tasks/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       Swal.fire('Updated!', 'Task information has been updated.', 'success');
    //       // Close the modal and update the task with the new information
    //       handleModal2(false); // Pass 'false' to close the modal
    //       // Update the tasks state after update
    //       const updatedTasks = tasks.map((task) =>
    //         task._id === _id ? { ...task, ...formValues } : task
    //       );
    //       setTasks(updatedTasks);
    //     } else {
    //       Swal.fire('Error!', 'Failed to update task information.', 'error');
    //     }
    //   })
    .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire('Updated!', 'Task information has been updated.', 'success');
          handleModal2(false); 
          // Update the tasks state after update
          const updatedTasks = tasks.map((task) =>
            task._id === _id ? { ...task, ...formValues } : task
          );
          setTasks(updatedTasks);
        } else {
          Swal.fire('Error!', 'Failed to update task information.', 'error');
        }
      })
      .catch((error) => {
        console.error('Error updating the task:', error);
      });
  };
  

  return (
    <div className="mb-4">
      <Card style={{ width: '18rem', height: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-dark mt-4">{taskTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Status: {status}</Card.Subtitle>
          <Card.Text>{taskDescription.substring(0, 100)}...</Card.Text>
          <Button variant="success" onClick={handleModal}>
            Show More
          </Button>
          <p>
            <button className="mt-1 bg-success text-white">
              <FaEdit onClick={() => handleModal2(true)}  className="bg-success"></FaEdit>
            </button>{' '}
            <button onClick={() => handleDelete(_id)} className="mt-1 bg-success text-white">
              <FaTrashAlt className="bg-success"></FaTrashAlt>
            </button>
          </p>
        </Card.Body>
      </Card>
      {/* modal for edit */}
      <Modal className="p-4" show={showModal2} onHide={handleModal2}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Task Title</label>
              <input
                type="text"
                className="form-control"
                name="taskTitle"
                value={formValues.taskTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <input
                type="text"
                className="form-control"
                name="status"
                value={formValues.status}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Time</label>
              <input
                type="text"
                className="form-control"
                name="time"
                value={formValues.time}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Task Description</label>
              <textarea
                className="form-control"
                name="taskDescription"
                value={formValues.taskDescription}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Task Details</label>
              <textarea
                className="form-control"
                name="taskDescription"
                value={formValues.Details}
                onChange={handleInputChange}
              />
            </div>
            {/* Add input fields for Details, time, and status */}
            {/* ... */}
            <div className="d-grid">
              <Button type="submit" variant="success">
                Update
              </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal */}
      <Modal className="p-4" show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{taskTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{taskDescription}</p>
          <p>{Details}</p>
        </Modal.Body>
        <Modal.Footer>
          <p>Task Duration: {time}</p>
          <Button variant="success" onClick={handleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Task;

