import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectPage from './Components/ProjectPage';
import NotFound from './Components/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<NotFound></NotFound>
  },
  {
    path:"project/:projectId",
    element: <ProjectPage></ProjectPage>,
    errorElement:<NotFound></NotFound>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
