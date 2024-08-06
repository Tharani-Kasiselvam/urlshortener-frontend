import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Register from "./components/Register";
import Login from "./components/Login";
import ActivateAccount from "./components/ActivateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "/activateAccount/:userId/:tokenStr",
        element: <ActivateAccount />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;