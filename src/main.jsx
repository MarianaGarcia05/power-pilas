import './index.css';
import React from "react";
import Home from './pages/Home';
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Banner from './components/Banner';
import Marcas from './components/Marcas';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Section from './components/Section';
import Products from './components/Products';
import ProductsView from './pages/ProductsView';
import Categories from './components/Categories';
import ProductDetails from './components/ProductDetails';
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
  {
    path: "/productDetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/section",
    element: <Section />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/marcas",
    element: <Marcas />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
