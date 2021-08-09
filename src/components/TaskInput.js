import React from "react";

const TaskInput = ({ submitHandler, newTask }) => {
	return (
		<form onSubmit={submitHandler}>
			<input type='text' ref={newTask} />
			<button type='submit'>Add</button>
		</form>
	);
};

export default TaskInput;
