import React from "react";

import Task from "./Task";

const TaskList = ({ taskList, checkboxHandler, deleteHandler }) => {
	const tasks = taskList.map((task) => (
		<Task
			key={task.id}
			task={task}
			checkboxHandler={checkboxHandler}
			deleteHandler={deleteHandler}
		/>
	));
	return <ul>{taskList.length > 0 && tasks}</ul>;
};

export default TaskList;
