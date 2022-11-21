import { addTodo } from './todolist';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		let { name: todo } = JSON.parse(req.body as any);
		addTodo(todo);

		res.status(200).json({ message: 'Successfully Add todo' });
	} else {
		res.status(400).json({ message: 'Invalid request method' });
	}
}
