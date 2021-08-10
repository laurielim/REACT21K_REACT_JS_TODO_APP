import React, { useState, useRef, useEffect } from "react";

import "./App.css";

import { getAllTasks, addTask, deleteTask } from "./services/taskService";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import Footer from "./components/Footer";

function App() {
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		getAllTasks().then((res) => setTaskList(res));
	}, []);

	const newTask = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		if (!newTask.current.value) {
			alert("No task added");
			return;
		}

		const task = {
			name: newTask.current.value,
			isDone: false,
		};
		addTask(task).then((res) => {
			console.log(res);
			setTaskList([...taskList, res]);
			newTask.current.value = "";
		});
	};

	const checkboxHandler = (task) => {
		const updatedTask = { ...task };
		updatedTask.isDone = updatedTask.isDone ? false : true;
		setTaskList(
			taskList.map((task) => (task.id === updatedTask.id ? updatedTask : task))
		);
	};

	const deleteHandler = (deletedTask) => {
		deleteTask(deletedTask.id);
		setTaskList(taskList.filter((task) => task.id !== deletedTask.id));
	};

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
					checkboxHandler={checkboxHandler}
					deleteHandler={deleteHandler}
				/>
				<TaskInput newTask={newTask} submitHandler={submitHandler} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
