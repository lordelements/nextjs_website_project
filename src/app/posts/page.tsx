'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const filteredPosts = user?.email === 'admin@admin.com'
    ? posts
    : posts.filter((post) => post.userId === user?.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <ul className="space-y-4">
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-600 hover:underline text-lg font-medium"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
