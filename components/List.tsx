import React, { useState, useEffect } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";

type todoList = {
	id: number;
	text: string;
	completed: boolean;
};

export default function List() {
	const [todoInput, setTodoInput] = useState("");
	const [todos, setTodos] = useState<todoList[]>([]);

	function handleTodos() {
		if (todoInput.length > 0) {
			setTodos((prevTodos) => [
				...prevTodos,
				{ id: new Date().valueOf(), text: todoInput, completed: false },
			]);
			localStorage.setItem(
				"todos",
				JSON.stringify([
					...todos,
					{
						id: new Date().valueOf(),
						text: todoInput,
						completed: false,
					},
				])
			);
			setTodoInput("");
		}
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleTodos();
		}
	};

	useEffect(() => {
		const localTodos = localStorage.getItem("todos");
		if (localTodos) {
			setTodos(JSON.parse(localTodos));
		}
	}, []);

	return (
		<div className="h-100 w-full flex items-center justify-center">
			<div className="p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
				<div className="flex mb-4">
					<div className="flex mt-4 w-full">
						<input
							value={todoInput}
							type="text"
							placeholder="Add a new to do..."
							onChange={(e) => setTodoInput(e.target.value)}
							onKeyPress={handleKeyPress}
							className="flex shadow appearance-none  w-full py-2 px-3 mr-4 bg-aurablack text-aurawhite p-2 rounded-lg text-3xl h-fit border-0 outline-none focus:outline-none"
						/>
						<button onClick={handleTodos}>
							<PlusIcon className="flex-no-shrink  transition ease-in-out text-aurapurple w-9 h-9 hover:text-aurapink duration-300" />
						</button>
					</div>
				</div>

				{todos.map((todo) => (
					<li
						className="flex p-4 mb-4 text-xl items-center text-aurawhite bg-aurablack w-full border-2 rounded-xl transition ease-in-out border-aurapurple hover:border-aurapink duration-300"
						key={todo.id}
					>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => {
								setTodos(
									todos.map((t) =>
										t.id === todo.id ? { ...t, completed: !t.completed } : t
									)
								);
								localStorage.setItem(
									"todos",
									JSON.stringify(
										todos.map((t) =>
											t.id === todo.id ? { ...t, completed: !t.completed } : t
										)
									)
								);
							}}
						/>
						<span
							className={
								todo.completed
									? "flex w-full p-2 overflow-hidden line-through"
									: "flex w-full p-2 overflow-hidden"
							}
						>
							{todo.text}
						</span>
						<button
							className="flex-no-shrink  transition ease-in-out text-aurapurple w-9 h-9 hover:text-aurapink duration-300"
							onClick={() => {
								setTodos((prevTodos) =>
									prevTodos.filter((t) => t.id !== todo.id)
								);
								localStorage.setItem(
									"todos",
									JSON.stringify(todos.filter((t) => t.id !== todo.id))
								);
							}}
						>
							<TrashIcon className="flex-no-shrink  transition ease-in-out text-aurapurple w-9 h-9 hover:text-aurapink duration-300" />
						</button>
					</li>
				))}
			</div>
		</div>
	);
}
