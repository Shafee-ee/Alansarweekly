import { createBrowserRouter, RouterProvider } from "react-router-dom"; // router 
import React from "react"; //done 
import ReactDOM from 'react-dom/client' // done 
import App from './App.jsx'
import './index.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import KeliNodi from "./pages/KeliNodi";
import Smaniyaru from "./pages/Smaniyaru";
import IslamicHistory from "./pages/IslamicHistory";
import Hadees from "./pages/Hadees";
import Fiqh from "./pages/Fiqh";
import VismayaJagattu from "./pages/VismayaJagattu";
import Vishleshanegalu from "./pages/Vishleshanegalu";
import Article from "./pages/Article";
import AdminPage from "./pages/AdminPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "keli-nodi", element: <KeliNodi /> },
      { path: "smaniyaru", element: <Smaniyaru /> },
      { path: "islamic-history", element: <IslamicHistory /> },
      { path: "hadees", element: <Hadees /> },
      { path: "fiqh", element: <Fiqh /> },
      { path: "vismaya-jagattu", element: <VismayaJagattu /> },
      { path: "vishleshanegalu", element: <Vishleshanegalu /> },
      { path: "article/:id", element: <Article /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
