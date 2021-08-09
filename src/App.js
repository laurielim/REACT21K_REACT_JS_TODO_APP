import React, { useState, useRef } from "react";

import "./App.css";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
	// const [taskList, setTaskList] = useState([])
	const [taskList, setTaskList] = useState([
		{
			id: 1,
			name: "Laundry",
			isDone: false,
		},
		{
			id: 2,
			name: "Grocery",
			isDone: true,
		},
		{
			id: 3,
			name: "Dishes",
			isDone: false,
		},
	]); // dev only

	const newTask = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const newTaskId = taskList.length + 1; // dev only
		const task = {
			id: newTaskId,
			name: newTask.current.value,
			isDone: false,
		};
		setTaskList([...taskList, task]);
		newTask.current.value = "";
	};

	const checkHandler = (task) => {
		const updatedTask = { ...task };
		updatedTask.isDone = updatedTask.isDone ? false : true;
		setTaskList(
			taskList.map((task) => (task.id === updatedTask.id ? updatedTask : task))
		);
	};

	const deleteHandler = (deletedTask) =>
		setTaskList(taskList.filter((task) => task.id !== deletedTask.id));

	return (
		<div className='App'>
			<header>
				<h1>To Do App</h1>
			</header>
			<main>
				<TaskInput newTask={newTask} submitHandler={submitHandler} />
				<TaskList
					taskList={taskList}
					checkHandler={checkHandler}
					deleteHandler={deleteHandler}
				/>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
