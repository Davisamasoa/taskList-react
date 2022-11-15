import { useState } from "react";
import { Task } from "./components/Task";
import { Header } from "./components/Header";

function App() {
	return (
		<>
			<div className="flex justify-center flex-col items-center">
				<Header />
				<Task />
			</div>
		</>
	);
}

export default App;
