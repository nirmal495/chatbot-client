import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Profile from './modules/profile/Prorfile';
import BlogHome from './modules/blogHome/BlogHome';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NudgeEditor from './modules/nudgeEditor/NudgeEditor';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/home',
        element: <App />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/blog',
        element: <BlogHome />,
    },
    {
        path: '/editor',
        element: <NudgeEditor />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
