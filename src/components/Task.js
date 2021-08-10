import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Task = ({ task, checkboxHandler, deleteHandler }) => {
	const taskId = `taskCheck_${task.id}`;
	const ariaLabel = `Delete task ${task.name}`;
	const labelCSS = task.isDone ? "task task-done" : "task";

	return (
		<li className='task-container'>
			<input
				checked={task.isDone}
				className='visually-hidden'
				id={taskId}
				name={taskId}
				onChange={() => checkboxHandler(task)}
				type='checkbox'
			/>
			<label className={labelCSS} htmlFor={taskId}>
				<FontAwesomeIcon icon={task.isDone ? faCheckCircle : faCircle} />{" "}
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
