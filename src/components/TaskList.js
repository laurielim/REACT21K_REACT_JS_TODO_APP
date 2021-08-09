import React from "react";

import Task from "./Task";

const TaskList = ({ taskList, checkHandler, deleteHandler }) => {
	const tasks = taskList.map((task) => (
		<Task
			key={task.id}
			task={task}
			checkHandler={checkHandler}
			deleteHandler={deleteHandler}
		/>
	));
	return <ul>{taskList.length > 0 && tasks}</ul>;
};

export default TaskList;
