import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
