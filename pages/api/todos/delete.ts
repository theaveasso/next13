import { deleteTodo } from './todolist';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'DELETE') {
		let { id } = req.query;
		if (!id) {
			return res.status(401).json({ message: 'Reqiured Id' });
		}
		deleteTodo(id as string);

		res.status(200).json({ message: 'Successfully Delete todo' });
	} else {
		res.status(400).json({ message: 'Invalid request method' });
	}
}
