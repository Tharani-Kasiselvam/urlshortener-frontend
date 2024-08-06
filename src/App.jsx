import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Register from "./components/Register";
import Login from "./components/Login";
import ActivateAccount from "./components/ActivateAccount";
import ForgotPassowrd from "./components/ForgotPassowrd";
import AccountRecovery from "./components/AccountRecovery";

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
      },
      {
        path : "/forgotpwd",
        element : <ForgotPassowrd />
      },
      {
        path : "/password-reset/:userId/:tokenStr",
        element : <AccountRecovery />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;