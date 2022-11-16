import React, { useEffect, useState } from "react";

export function Task() {
	const [task, setTask] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [inputColor, setInputColor] = useState("border-orange-300");

	function handleInput(e) {
		setInputValue(e.currentTarget.value);
	}

	function addTask() {
		if (inputValue != "") {
			setTask([...task, inputValue]);
			setInputValue("");
		} else {
			setInputColor("border-red-500");
			setTimeout(() => setInputColor("border-orange-300"), 300);
		}
	}

	function handleKeyDown(e) {
		if (e.key == "Enter") {
			addTask();
		}
	}

	return (
		<div className="sm:min-w-[400px] sm:max-w-[400px] min-w-full max-w-full  p-5 ">
			<h3
				className="text-white text-center
            mt-20 sm:text-2xl text-xl"
			>
				Adicione uma tarefa
			</h3>

			<div className="flex justify-center items-center mt-3 gap-4 mb-20">
				<button onClick={addTask}>
					<i className="bi bi-plus-circle text-orange-300 sm:text-2xl text-xl"></i>
				</button>
				<input
					type="text"
					className={`w-full h-7 bg-transparent  border-0 border-b-2 ${inputColor} text-white outline-none transition duration-300`}
					value={inputValue}
					onChange={handleInput}
					onKeyDown={handleKeyDown}
				/>
			</div>

			{task.map((item, index) => {
				return (
					<TaskComponent key={`${item}`} task={item} taskArray={task} setTaskArray={setTask} index={index} />
				);
			})}
		</div>
	);
}

export function TaskComponent({ task, taskArray, setTaskArray, index }) {
	const [taskStatus, setTaskStatus] = useState("");
	const [taskSelected, setTaskSelected] = useState("bi-square");
	const [colorText, setColorText] = useState("text-white");

	function scratchTask() {
		if (taskStatus == "") {
			setTaskStatus("line-through");
			setTaskSelected("bi-check-square");
			setColorText("text-gray-400");
		} else {
			setTaskStatus("");
			setTaskSelected("bi-square");
			setColorText("text-white");
		}
	}

	return (
		<div className="flex justify-center items-center gap-4 mb-3">
			<button onClick={scratchTask}>
				<i className={`bi ${taskSelected} text-orange-300`}></i>
			</button>
			<span onClick={scratchTask} className={`${colorText} w-full ${taskStatus} cursor-pointer`}>
				{task}
			</span>
			<button
				onClick={() => {
					const deleteTask = [...taskArray].filter((item, i) => i != index);
					setTaskArray([...deleteTask]);
				}}
			>
				<i className="bi bi-trash text-orange-300"></i>
			</button>
		</div>
	);
}
