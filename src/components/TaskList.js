import React from "react";

import Task from "./Task";

const TaskList = ({ taskList }) => {
	const tasks = taskList.map((task) => <Task key={task} />);
	return <ul>{tasks}</ul>;
};

export default TaskList;
