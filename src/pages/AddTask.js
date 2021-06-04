import "./Addtask.css";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
const AddTask = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="leftSideMAr">
      <h1 className="TaskStatsTitle">Create Task</h1>
      <div className="containerTaskcreate taskInputTitle">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <DateTimePicker
          className="datePick"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default AddTask;
