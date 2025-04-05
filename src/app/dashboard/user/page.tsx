"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


// Types
type User = {
  id: number;
  name: string;
  email: string;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function RegularUserDashboard() {
  const [user] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("user") || "null");
    }
    return null;
  });

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await res.json();

      const userPosts = data.filter((post) => post.userId === user?.id);
      setPosts(userPosts);
      setLoading(false);
    };

    if (user) fetchPosts();
  }, [user]);


  // Inside your component
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (loading) return <p className="text-center mt-10">Loading your posts...</p>;
  if (!user) return <p className="text-center mt-10">User not logged in.</p>;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <div className="max-w-4xl mx-auto py-10 px-4 w-full">
        <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}!</h1>
        <h2 className="text-xl mb-4">Your Posts</h2>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Logout
        </button>


        {posts.length === 0 ? (
          <p className="text-gray-500">You have no posts.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.id} className="border p-4 rounded shadow">
                <Link href={`/dashboard/post/${post.id}`}>
                  <h2 className="text-lg font-semibold text-blue-600 hover:underline">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-700 mt-1">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SidebarProvider>
  );
}
