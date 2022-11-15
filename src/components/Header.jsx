import React from "react";

export function Header() {
	return (
		<header>
			<figure className="flex justify-center gap-2 mb-2 mt-5">
				<a href="https://github.com/Davisamasoa" target="blank">
					<i className="bi bi-github text-orange-300 text-2xl"></i>
				</a>

				<a href="https://www.linkedin.com/in/davisamasoa/" target="blank">
					<i className="bi bi-linkedin text-orange-300 text-2xl"></i>
				</a>
			</figure>
			<h1 className="text-white font-semibold sm:text-5xl text-4xl text-center">Lista de Tarefas</h1>
		</header>
	);
}
