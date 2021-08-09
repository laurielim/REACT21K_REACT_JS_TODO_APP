import React, { useState, useRef } from "react";

import "./App.css";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
	const [taskList, setTaskList] = useState([1, 2, 3]);

	const newTask = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div className='App'>
			<header>
				<h1>To Do App</h1>
			</header>
			<main>
				<TaskInput newTask={newTask} submitHandler={submitHandler} />
				<TaskList taskList={taskList} />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
