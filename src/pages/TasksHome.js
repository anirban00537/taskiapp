import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAndSetTaskAction,
  deleteTaskAction,
  updateTaskAction,
} from "../state/action/TaskAction";
import * as moment from "moment";
import TaskStats from "../components/TaskStats/TaskStats";
import { Flex, Grid, Text } from "@chakra-ui/react";
import TaskCard from "../components/TaskComponents/TaskCard";

const TasksHome = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  // const completed = task.nap(task);
  const completed = tasks.filter((task) => task.complete == true);
  const notCompleted = tasks.filter((task) => task.complete == false);
  const deleteTask = (id) => {
    dispatch(deleteTaskAction(id));
  };
  const updateTaskStatus = (id, status) => {
    dispatch(updateTaskAction(id, status));
  };
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    dispatch(getAndSetTaskAction(uid));
  }, []);
  return (
    <Flex
      className=""
      width="100%"
      flexDirection="column"
      backgroundColor="gray.100"
      height="100vh"
    >
      <TaskStats
        total={tasks.length}
        tasks={tasks}
        completed={completed.length}
        incomolete={notCompleted.length}
      />
      <Text fontSize="3xl" fontWeight="bold" color="#a9aec4" textAlign="center">
        Yous All Tasks
      </Text>
      <Grid templateColumns="repeat(5, 1fr)">
        {tasks.map((task) => (
          <Flex alignItems="center" justifyContent="center">
            <TaskCard
              task={task}
              date={moment(task.date, "YYYYMMDD").fromNow()}
              deleteTask={deleteTask}
              updateTaskStatus={updateTaskStatus}
            />
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default TasksHome;
