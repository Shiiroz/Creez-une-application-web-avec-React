import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);
function App() {
  return  <RouterProvider router={routes} />;
  
}

export default App;
