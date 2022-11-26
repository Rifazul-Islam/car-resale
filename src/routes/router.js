import { createBrowserRouter } from "react-router-dom";
import DeshboardLayout from "../Layout/DeshboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Deshboard/AddProduct/AddProduct";
import Deshboard from "../Pages/Deshboard/Deshboard/Deshboard";
import MyOrders from "../Pages/Deshboard/MyOrders/MyOrders";
import MyProduct from "../Pages/Deshboard/MyProduct/MyProduct";
import Category from "../Pages/Home/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorCheck from "../Pages/Shared/ErrorCheck/ErrorCheck";
import Signup from "../Pages/Signup/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


export const router = createBrowserRouter([
     {path:'/', element: <Main></Main>, 
     errorElement:<ErrorCheck></ErrorCheck>, 
     children:[ 
        {path:'/', element:<Home></Home> },
        {path:'/login', element:<Login></Login>},
        {path:'/signup', element:<Signup></Signup>},

        {path:'/category/:id', element:<PrivateRouter><Category></Category> </PrivateRouter>  ,
        loader:({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
      },

        {path:'/blog',element:<Blog></Blog>}

     ] },

     {path:'/deshboard', element:<PrivateRouter> <DeshboardLayout></DeshboardLayout></PrivateRouter>, children:[

     {path:'/deshboard/myOrders', element: <MyOrders> </MyOrders>  },
     {path:'/deshboard/addProduct', element:<PrivateRouter> <AddProduct></AddProduct>  </PrivateRouter>   },
     {path:'/deshboard/myProduct', element: <PrivateRouter> <MyProduct></MyProduct>   </PrivateRouter>   },
     ] }
])