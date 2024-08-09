import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Contact from "../../pages/Contact/Contact";
import Profile from "../../pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path: 'registration',
                element: <Registration/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    },


    
])