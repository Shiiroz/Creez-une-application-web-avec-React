import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import LogementPage from "./pages/LogementPage";
import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/logement/:id",
        element: <LogementPage/>
      }
    ]
  }
]);
function App() {
  return  <RouterProvider router={routes} />;
  
}

export default App;
