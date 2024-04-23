import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import Layout from "./routes/layout/Layout";
import List from "./routes/list/List";
import Login from "./routes/login/Login";
import Single from "./routes/single/Single";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }, {
          path: "list",
          element: <List />
        },
        {
          path: "/:id",
          element: <Single />
        },
        {
          path: "login",
          element: <Login />
        }
      ]
    },
    {
      path: "list",
      element: <List />,
    },
  ]);

  return (

    <RouterProvider router={router} />
  );
}

export default App;
