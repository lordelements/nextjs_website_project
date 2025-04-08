/* eslint-disable react/no-children-prop */
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";

// // Types
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   avatar?: string;
// };

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// export default function RegularUserDashboard() {
//   const [user, setUser] = useState<User | null>(null);
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);

//   const router = useRouter();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data: Post[] = await res.json();

//       const userPosts = data.filter((post) => post.userId === user?.id);
//       setPosts(userPosts);
//       setLoading(false);
//     };

//     if (user) {
//       fetchPosts();
//     }
//   }, [user]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     router.push("/login");
//   };

//   if (!user) {
//     return <p className="text-center mt-10">User not logged in.</p>;
//   }

//   if (loading) {
//     return <p className="text-center mt-10">Loading your posts...</p>;
//   }

//   return (

//       <div className="max-w-4xl mx-auto py-10 px-4 w-full">
//         <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}!</h1>
//         <h2 className="text-xl mb-4">Posts</h2>

//         <button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4"
//         >
//           Logout
//         </button>

//         {posts.length === 0 ? (
//           <p className="text-gray-500">You have no posts.</p>
//         ) : (
//           <ul className="space-y-6 mt-6">
//             {posts.map((post) => (
//               <li key={post.id} className="border p-4 rounded shadow">
//                 <Link href={`/dashboard/post/${post.id}`}>
//                   <h2 className="text-lg font-semibold text-blue-600 hover:underline">
//                     {post.title}
//                   </h2>
//                 </Link>
//                 <p className="text-gray-700 mt-1">{post.body}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import UsersNavbar from "../../components/users/UsersNavbar";


type User = {
  id: number;
  name: string;
  email: string;
  avatar?: string;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function RegularUserDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);



  useEffect(() => {
    const fetchPosts = async () => {
      if (!user) return;

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await res.json();


      const userPosts = data.filter((post) => post.userId === user.id);
      setPosts(userPosts);
      setLoading(false);
    };

    if (user) {
      fetchPosts();
    }
  }, [user]);


  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };


  if (!user) {
    return <p className="text-center mt-10">User not logged in.</p>;
  }


  if (loading) {
    return <p className="text-center mt-10">Loading your posts...</p>;
  }

  return (
    <>
      <UsersNavbar
        user={{
          ...user,
          id: user.id.toString(),  // Convert the `id` to a string
          avatar: user.avatar || "/default-avatar.png",  // Ensure avatar is a string
        }}
      >
        <div className="max-w-4xl mx-auto py-10 px-4 w-full">
          <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}!</h1>
          <h2 className="text-xl mb-4">Posts</h2>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Logout
          </button>


          {posts.length === 0 ? (
            <p className="text-gray-500">You have no posts.</p>
          ) : (
            <ul className="space-y-6 mt-6">
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
      </UsersNavbar>
    </>
  );
}
