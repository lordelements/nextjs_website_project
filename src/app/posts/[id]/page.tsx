'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const postData = await postRes.json();
      setPost(postData);

      const commentRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const commentData = await commentRes.json();
      setComments(commentData);
    };

    fetchData();
  }, [id]);

  if (!post) return <p className="text-center py-10">Loading post...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-gray-700 mt-2 mb-6">{post.body}</p>

      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-gray-100 p-4 rounded">
            <p className="font-semibold text-sm text-gray-800">{comment.email}</p>
            <p className="text-gray-600">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
