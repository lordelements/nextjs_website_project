/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          About the Project: Dynamic Web Application using Next.js and Tailwind CSS
        </h1>

        {/* Project Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            This project is a fully-functional web application built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, designed to showcase the integration of modern frontend technologies. The application fetches and displays user data, posts, and comments from a third-party API (JSON Placeholder) and includes features like user profiles, role-based access control, data visualization for admins, and a dynamic user registration form. The aim of this project is to assess proficiency in frontend development, API integration, and responsive design.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>User Profiles & Listings:</strong> Display a list of users with their profile details, and include an interactive map (using Mapbox/Maplibre) to showcase user locations.
            </li>
            <li>
              <strong>Post & Comment System:</strong> Users can view posts and comments, with role-based access control. Admin users can view all posts and comments, while regular users can only access their own.
            </li>
            <li>
              <strong>Data Visualization (Admin-only):</strong> Visualize key statistics such as the total number of users, posts, and comments using <strong>ApexCharts</strong>. This feature is exclusive to admin users.
            </li>
            <li>
              <strong>User Registration Form:</strong> A user registration form is built with input validation using <strong>Zod</strong>, allowing users to sign up without requiring backend functionality.
            </li>
            <li>
              <strong>Authentication:</strong> Login functionality is implemented using <strong>JSON Placeholder API</strong>, allowing users to authenticate and access the dashboard.
            </li>
          </ul>
        </section>

        {/* Technologies Used in Project Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
          <p className="text-lg text-gray-700 mb-6">
            The following technologies and tools were used to build this project:
          </p>
          <ul className="space-y-4">
            <li><strong>Next.js</strong>: A React-based framework for building static and dynamic web applications with server-side rendering and static site generation.</li>
            <li><strong>Tailwind CSS</strong>: A utility-first CSS framework that enables fast and efficient styling with a mobile-first, responsive approach.</li>
            <li><strong>UI Libraries:</strong> ShadCN, Hero UI, Aceternity UI, Tailwind UI, Flowbite to enhance the UI components and improve the overall user experience.</li>
            <li><strong>Data Fetching:</strong> Fetch API, TanStack Query (React Query), Axios, and Refine to retrieve and display data from the JSON Placeholder API.</li>
            <li><strong>Map Integration:</strong> Mapbox or Maplibre for integrating interactive maps and displaying user locations.</li>
            <li><strong>Data Visualization:</strong> ApexCharts to create interactive, responsive charts to visualize user, post, and comment statistics for admin users.</li>
            <li><strong>Form Validation:</strong> Zod for input validation, ensuring the registration form meets specified criteria before submission.</li>
            <li><strong>Authentication:</strong> JSON Placeholder API is used for implementing user authentication.</li>
          </ul>
        </section>

        {/* Project Structure Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Project Structure</h2>
          <p className="text-lg text-gray-700 mb-6">
            The project is structured into reusable components, making the code modular and maintainable:
          </p>
          <ul className="space-y-4">
            <li><strong>Pages:</strong> Contains the main application pages such as the home page, user dashboard, admin dashboard, and authentication pages.</li>
            <li><strong>Components:</strong> Includes all the UI elements, such as the navigation bar (UsersNavbar), user profile components, post listings, and comment sections.</li>
            <li><strong>API Services:</strong> Organizes data-fetching logic and the integration of third-party APIs like JSON Placeholder.</li>
            <li><strong>Styles:</strong> Managed through Tailwind CSS with custom configurations for responsiveness and design tweaks.</li>
          </ul>
        </section>

        {/* Challenges Overcome Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Challenges Overcome</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Throughout the development process, several challenges were tackled:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Role-based Access Control:</strong> Implementing secure and dynamic access to posts and comments based on user roles (admin vs. regular users).</li>
            <li><strong>State Management:</strong> Managing state across different components efficiently, especially when dealing with API responses and user interactions.</li>
            <li><strong>Data Visualization:</strong> Integrating ApexCharts to visualize dynamic data and ensuring the charts respond appropriately to changing data.</li>
            <li><strong>Authentication:</strong> Implementing a lightweight authentication system using JSON Placeholder API and ensuring a seamless user experience.</li>
          </ul>
        </section>

        {/* Deployment & Hosting Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Deployment & Hosting</h2>
          <p className="text-lg text-gray-700">
            The application is deployed on <strong>Vercel</strong>, ensuring fast and reliable hosting. Vercel's built-in CI/CD pipelines allow for automatic deployment upon pushing updates to the codebase. This setup ensures a smooth development workflow and quick iteration on features.
          </p>
        </section>

        {/* How to Contribute Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How to Contribute</h2>
          <p className="text-lg text-gray-700 mb-4">
            We welcome contributions! Here's how you can get started:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clone the repository to your local machine:</li>
            <pre className="bg-gray-200 p-4 rounded-lg font-mono">
              <code>git clone https://github.com/username/dynamic-web-app.git</code>
            </pre>
            <li>Install dependencies:</li>
            <pre className="bg-gray-200 p-4 rounded-lg font-mono">
              <code>npm install</code>
            </pre>
            <li>Start the development server:</li>
            <pre className="bg-gray-200 p-4 rounded-lg font-mono">
              <code>npm run dev</code>
            </pre>
            <li>Feel free to submit issues, feature requests, or pull requests.</li>
          </ul>
        </section>

        {/* Demo or Screenshots Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Demo or Screenshots</h2>
          <p className="text-lg text-gray-700 mb-4">
            Check out the live demo or explore the screenshots below to see the application in action.
          </p>
          <ul className="space-y-2">
            <li><a href="https://demo-link.com" className="text-indigo-600 hover:underline">Live Demo</a></li>
            <li>
              <img src="screenshot1.png" alt="User Dashboard" className="rounded-lg shadow-lg mb-4"/>
            </li>
            <li>
              <img src="screenshot2.png" alt="Admin Dashboard" className="rounded-lg shadow-lg"/>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
