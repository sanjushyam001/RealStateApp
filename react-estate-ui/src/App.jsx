import Navbar from "./components/navbar/Navbar";
import { listLoader, singleLoader } from "./loaders/loaders";
import Home from "./routes/home/Home";
import { Layout, RequireAuth } from "./routes/layout/Layout";
import List from "./routes/list/List";
import Login from "./routes/login/Login";
import NewPost from "./routes/newPost/NewPost";
import Profile from "./routes/profile/Profile";
import ProfileUpdate from "./routes/profileUpdate/ProfileUpdate";
import Register from "./routes/register/Register";
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
        },
        {
          path: "/list",
          element: <List />,
          loader: listLoader
        },
        {
          path: "/:id",
          element: <Single />,
          loader: singleLoader

        },
        {
          path: "/login",
          element: <Login />,

        },

        {
          path: "/register",
          element: <Register />
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [

        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />
        },
        {
          path: "/add",
          element: <NewPost />
        },

      ]
    },

  ]);

  return (

    <RouterProvider router={router} />
  );
}

export default App;
