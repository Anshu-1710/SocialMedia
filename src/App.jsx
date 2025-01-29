import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navBar/NavBar";
import RightBar from "./components/rightBar/RightBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import { Children } from "react";


function App() {

    const currentUser = false; 

    const Layout =()=>{
      return(
        <div>
          <NavBar/>
          <div style={{display:"flex"}}>
             <LeftBar/>
             <Outlet/>
             <RightBar/>
          </div>
        </div>
      )
    }

    const ProtectedRoute = ({children}) =>{
      if(!currentUser){
        return <Navigate to="/login"/>
      }

      return children
    };

    const router = createBrowserRouter([
      {
        path:"/",
        element: (
          <ProtectedRoute>
            <Layout/>
          </ProtectedRoute>
            ),
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/profile/:id",
            element:<Profile/>
          }
        ]
      },
      {
        path: "/login",
        element: <Login/>,
      },

      {
        path: "/register",
        element:<Register/>,
      },
    ])

  return <div>
      <RouterProvider router={router} />
  </div>;
}

export default App;
