import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Wordcounter from "./pages/Wordcounter";
import ImageCard from "./pages/ImageCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <Error />
      },
      {
        path: "/wordcount",
        element: <Wordcounter />,
        errorElement: <Error />
      },
      {
        path: "/image",
        element: <ImageCard />,
        errorElement: <Error />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
