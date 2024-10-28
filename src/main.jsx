import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root';
import Movies from './Components/Movies/Movies';
import Anime from './Components/Anime/Anime';
import Games from './Components/Games/Games';
import Series from './Components/Series/Series';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "",
        element: <Home></Home>
      },
      {
        path: "/Movies",
        element: <Movies></Movies>
      },
      {
        path: "/Anime",
        element: <Anime></Anime>
      },
      {
        path: "/Games",
        element: <Games></Games>
      },
      {
        path: "/Series",
        element: <Series></Series>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
