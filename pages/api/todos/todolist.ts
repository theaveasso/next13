import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

type TodoList = TodoItem[];

interface TodoItem {
	id: string;
	title: string;
	isDone: boolean;
}

const shortId = () => uuid().slice(0, 8);

let todoList: TodoList = [
	{
		id: shortId(),
		title: 'Learn NextJS 13',
		isDone: false,
	},
	{
		id: shortId(),
		title: 'Prepare for job interview',
		isDone: false,
	},
	{
		id: shortId(),
		title: 'Go to the gym',
		isDone: false,
	},
	{
		id: shortId(),
		title: 'Have 1000 commit',
		isDone: false,
	},
];

export const addTodo = (title: string) => {
	const newTodo = {
		id: shortId(),
		title,
		isDone: false,
	};

	return [...todoList, newTodo];
};

export const deleteTodo = (id: string) => {
	todoList.filter((todo) => {
		return todo.id != id;
	});
};

export const updateTodo = ({ id, isDone }: { id: string; isDone: boolean }) => {
	let newTodoList: TodoList = [];
	todoList.map((todo: TodoItem) => {
		let newTodo = { ...todo };
		if (todo.id === id) {
			newTodo = { id, title: todo.title, isDone };
		}
		newTodoList.push(newTodo);
	});
	todoList = newTodoList;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		return res.status(200).json({ todoList });
	} catch (error) {
		return res.status(500).json({ message: `Something went wrong` });
	}
}
