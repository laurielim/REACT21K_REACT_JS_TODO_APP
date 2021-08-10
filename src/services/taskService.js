import axios from "axios";
const baseUrl = "http://localhost:3001/tasks";

const getAllTasks = () => {
	return axios
		.get(baseUrl)
		.then((res) => res.data)
		.catch((e) => console.log(e));
};

const addTask = (newTask) => {
	return axios
		.post(baseUrl, newTask)
		.then((res) => res.data)
		.catch((e) => console.log(e));
};

const deleteTask = (id) => {
	return axios.delete(`${baseUrl}/${id}`);
};

const updateTask = (id, update) => {
	return axios.put(`${baseUrl}/${id}`, update).then((res) => res.data);
};

export { getAllTasks, addTask, deleteTask, updateTask };
