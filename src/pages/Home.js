import "./Home.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAndSetTaskAction,
  deleteTaskAction,
  updateTaskAction,
} from "../state/action/TaskAction";
import * as moment from "moment";
import TaskStats from "../components/TaskStats/TaskStats";

// Modal.setAppElement("#yourAppElement");
const Home = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  // const completed = task.nap(task);
  const completed = tasks.filter((task) => task.complete == true);
  const notCompleted = tasks.filter((task) => task.complete == false);
  const deleteTask = (id) => {
    console.log(id);
    dispatch(deleteTaskAction(id));
  };
  const updateTaskStatus = (id, status) => {
    dispatch(updateTaskAction(id, status));
  };
  useEffect(() => {
    dispatch(getAndSetTaskAction());
  }, []);
  return (
    <div className="leftSideMAr">
      <TaskStats
        total={tasks.length}
        tasks={tasks}
        completed={completed.length}
        incomolete={notCompleted.length}
      />

      <h4 className="TaskStatsTitle">Your Tasks</h4>
      <div className="taskGrid">
        {tasks.map((task) => (
          <div className="taskCard">
            <div className="tasktitleContainer">
              <p className="taskTitle">{task.title}</p>
              <p className="taskDate">
                {moment(task.date, "YYYYMMDD").fromNow()}
              </p>
            </div>
            <div className="taskStatus">
              {task.complete == true ? (
                <div
                  className="taskNotDone mar10"
                  onClick={() => {
                    updateTaskStatus(task._id, "false");
                  }}
                >
                  <i class="fas fa-thumbs-down tup"></i>
                </div>
              ) : (
                <div
                  className="taskDone mar10"
                  onClick={() => {
                    updateTaskStatus(task._id, "true");
                  }}
                >
                  <i class="fas fa-thumbs-up tup"></i>
                </div>
              )}
              <div
                className="taskNotDone mar10"
                onClick={() => {
                  deleteTask(task._id);
                }}
              >
                <i class="fas fa-trash"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
