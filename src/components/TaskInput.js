import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TaskInput = ({ submitHandler, newTask }) => {
	return (
		<form onSubmit={submitHandler} className='task-container'>
			<input
				type='text'
				ref={newTask}
				aria-label='Add a task'
				placeholder='Add a task'
			/>
			<button type='submit' aria-label='Submit new task' className='task-btn'>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</form>
	);
};

export default TaskInput;
