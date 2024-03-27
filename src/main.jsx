import './index.css';
import React from "react";
import Home from './pages/Home';
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import Footer from './components/Footer';
import ProductsView from './pages/ProductsView';
import Categories from './components/Categories';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/productsView",
    element: <ProductsView />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/banner",
    element: <Banner />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
