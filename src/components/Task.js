import React from "react";

const Task = ({ task, checkHandler, deleteHandler }) => {
	const taskId = `taskCheck_${task.id}`;
	return (
		<li>
			<input
				type='checkbox'
				name={taskId}
				id={taskId}
				checked={task.isDone}
				onChange={() => checkHandler(task)}
			/>
			<label htmlFor={taskId}>{task.name}</label>
			<button onClick={() => deleteHandler(task)}>Delete</button>
		</li>
	);
};

export default Task;
