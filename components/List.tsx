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
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: new Date().valueOf(), text: todoInput, completed: false },
		]);
		setTodoInput("");
	}

	return (
		<div className="flex justify-center p-4">
			<div>
				<input
					value={todoInput}
					type="text"
					placeholder="Add a new to do..."
					onChange={(e) => setTodoInput(e.target.value)}
					className="bg-aurablack text-aurawhite p-2 rounded-lg text-3xl h-fit"
				/>
				<button className="" onClick={handleTodos}>
					<PlusIcon className="transition ease-in-out text-aurapurple w-8 h-8 hover:text-aurapink duration-300" />
				</button>
			</div>
			{todos.map((todo) => (
				<ul className="flex justify-center p-4" key={todo.id}>
					<li>
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
				</ul>
			))}
		</div>
	);
}
