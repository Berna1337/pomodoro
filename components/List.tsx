import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";

export default function List() {
	const [todoInput, setTodoInput] = useState("");
	const [todos, setTodos] = useState<
		{
			id: number;
			text: string;
			completed: boolean;
		}[]
	>([]);

	function handleTodos() {
		if (todoInput.length > 0) {
			setTodos((prevTodos) => [
				...prevTodos,
				{ id: new Date().valueOf(), text: todoInput, completed: false },
			]);
			setTodoInput("");
		}
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleTodos();
		}
	};

	return (
		<div className="h-100 w-full flex items-center justify-center">
			<div className="p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
				<div className="flex mb-4">
					<div className="flex mt-4">
						<input
							value={todoInput}
							type="text"
							placeholder="Add a new to do..."
							onChange={(e) => setTodoInput(e.target.value)}
							onKeyPress={handleKeyPress}
							className="flex shadow appearance-none  w-full py-2 px-3 mr-4 bg-aurablack text-aurawhite p-2 rounded-lg text-3xl h-fit"
						/>
						<button onClick={handleTodos}>
							<PlusIcon className="flex-no-shrink  transition ease-in-out text-aurapurple w-9 h-9 hover:text-aurapink duration-300" />
						</button>
					</div>
				</div>

				{todos.map((todo) => (
					<li className="flex mb-4 items-center text-aurawhite" key={todo.id}>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => {
								setTodos(
									todos.map((t) =>
										t.id === todo.id ? { ...t, completed: !t.completed } : t
									)
								);
							}}
						/>
						{todo.text}
					</li>
				))}
			</div>
		</div>
	);
}
