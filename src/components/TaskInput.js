import React from "react";

const TaskInput = ({ submitHandler, newTask }) => {
	return (
		<form onSubmit={submitHandler} className='task-container'>
			<button type='submit'>Add</button>
			<input type='text' ref={newTask} />
		</form>
	);
};

export default TaskInput;
