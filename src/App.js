import React, { useState, useRef } from "react";

import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import Footer from "./components/Footer";

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

		if (!newTask.current.value) return;

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

	const tasksToDo = taskList.filter((task) => !task.isDone).length;
	const percentDone = (
		((taskList.length - tasksToDo) / taskList.length) *
		100
	).toFixed(2);

	return (
		<div className='page-wrapper'>
			<Header todo={tasksToDo} done={percentDone} />
			<main>
				<TaskList
					taskList={taskList}
					checkHandler={checkHandler}
					deleteHandler={deleteHandler}
				/>
				<TaskInput newTask={newTask} submitHandler={submitHandler} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
