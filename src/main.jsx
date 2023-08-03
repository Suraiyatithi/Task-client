import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homelayout from './LayOut/Homelayout';
import Addtask from './AddTask/Addtask';
import Addtasklayout from './LayOut/Addtasklayout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>
  },{
    path:'/addtask',
    element:<Addtasklayout></Addtasklayout>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
