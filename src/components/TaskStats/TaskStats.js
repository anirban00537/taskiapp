import "./TaskStats.css";
import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-date-picker";
import pic1 from "./pic.png";
import { createAndUpdateTaskAction } from "../../state/action/TaskAction";
import { useDispatch } from "react-redux";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "400px",
    border: "1px solid #f5f5f5",
  },
};
const TaskStats = ({ total, completed, incomolete }) => {
  const [value, onChange] = useState(new Date());
  const [title, setTitle] = useState("");
  const uid = localStorage.getItem("uid");
  const dispatch = useDispatch();
  const handleSubmitTask = () => {
    dispatch(createAndUpdateTaskAction({ date: value, title, uid }));
    closeModal();
  };
  function openModal() {
    setIsOpen(true);
  }
  Modal.setAppElement(undefined || null);
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="titleContainerstat">
        <h4 className="TaskStatsTitle">Task Statistics</h4>
        <i onClick={openModal} class="fas fa-plus-square Add-task"></i>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>
          <i class="fas fa-tasks"></i> Add Task{" "}
        </h3>
        <div class="input-group mb-3 inputTitleTaskScreen">
          <input
            type="text"
            className="form-control inputCstmTsK"
            placeholder="Add A Task "
            aria-label="Add A Task "
            aria-describedby="basic-addon1"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <DatePicker onChange={onChange} value={value} />
        </div>
        <div className="modalTaskPicContainer">
          <img src={pic1} className="modalTaskPic" />
        </div>
        <button className="btn btnCstm" onClick={handleSubmitTask}>
          Add Task
        </button>
      </Modal>
      <div className="taskStats">
        <div className="taskStatsContainer total">
          <h1>{total}</h1>
          <h3>Total</h3>
        </div>
        <div className="taskStatsContainer completed">
          <h1>{completed}</h1>
          <h3>Completed</h3>
        </div>
        <div className="taskStatsContainer incomolete">
          <h1>{incomolete}</h1>
          <h3>Incompleted</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
