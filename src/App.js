import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import Photos from "./Pages/Photos/Photos";
import Demo from "./Pages/Demo/Demo";
import Contact from "./Pages/Contact/Contact";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {

  const Layout = () =>{
    return(
      <div className="App">
      <Topbar />
      <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/fotos",
          element: <Photos />
        },
        {
          path:"/demo",
          element: <Demo />
        },
        {
          path:"/contacto",
          element: <Contact />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
