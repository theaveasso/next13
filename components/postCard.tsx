import Link from 'next/link';
import React from 'react';
import { PostProps } from '../types/types';

const PostCard = ({ userId, title, body, id }: PostProps) => {
	return (
		<Link href={`posts/${id}`}>
			<h3>{title}</h3>
			<p>{body}</p>
			<h5>{userId}</h5>
		</Link>
	);
};

export default PostCard;
