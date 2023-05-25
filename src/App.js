import Layout from './Pages/Layout';
import SignIn from './Pages/SignIn';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  
]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
