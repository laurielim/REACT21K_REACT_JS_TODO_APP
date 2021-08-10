import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
				className='task-btn'
				aria-label={ariaLabel}
				onClick={() => deleteHandler(task)}
			>
				<FontAwesomeIcon icon={faTrash} />
			</button>
		</li>
	);
};

export default Task;
