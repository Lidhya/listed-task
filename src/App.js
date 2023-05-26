import { useState } from "react";
import Layout from "./Pages/Layout";
import SignIn from "./Pages/SignIn";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [show, setShow] = useState(false)

  const ProtectedRoute = ({ children }) => {
    if (!show) {
      return <Navigate to="/signin" />;
    }
    return children;
  };

  const login=()=>{
    setShow(true)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signin",
      element: <SignIn login={login}/>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
