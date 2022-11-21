import { updateTodo } from './todolist';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		let { id, title, isDone } = JSON.parse(req.body as any);

		updateTodo({ id, isDone: Boolean(isDone) });

		res.status(200).json({ message: 'Successfully Updated todo' });
	} else {
		res.status(400).json({ message: 'Invalid request method' });
	}
}
