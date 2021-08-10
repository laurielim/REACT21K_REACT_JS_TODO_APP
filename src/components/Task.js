import React from "react";

const Task = ({ task, checkHandler, deleteHandler }) => {
	const taskId = `taskCheck_${task.id}`;
	const ariaLabel = `Delete task ${task.name}`;
	const labelCSS = task.isDone ? "task task-done" : "task";
	return (
		<li className='task-container'>
			<input
				type='checkbox'
				name={taskId}
				id={taskId}
				checked={task.isDone}
				onChange={() => checkHandler(task)}
			/>
			<label className={labelCSS} htmlFor={taskId}>
				{task.name}
			</label>
			<button
				className='task-btn-delete'
				aria-label={ariaLabel}
				onClick={() => deleteHandler(task)}
			>
				Delete
			</button>
		</li>
	);
};

export default Task;
