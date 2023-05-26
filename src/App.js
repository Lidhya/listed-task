import Layout from "./Pages/Layout";
import SignIn from "./Pages/SignIn";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  const blah = true;
  // const ProtectedRoute = ({ children }) => {
  //   if (blah) {
  //     return <Navigate to="/signin" />;
  //   }
  //   return children;
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
          <Layout />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
