import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useBuyer from '../CustomHook/useBuyer';
import useSeller from '../CustomHook/useSeller';
import Footer from '../Pages/Shared/Navber/Footer/Footer';
import Navber from '../Pages/Shared/Navber/Navber';

const DeshboardLayout = () => {

      const {user,loding} = useContext(AuthContext)
      const [isBuyer] = useBuyer(user?.email)
      const [isSeller] = useSeller(user?.email)
    return (
    <div >
     <Navber></Navber>
     <div className="drawer drawer-mobile">
      <input id="deshboard-drawer" type="checkbox" className="drawer-toggle" />
 
  <div className="drawer-content">
   <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="deshboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      
      {
          isBuyer &&   <li><Link to='/deshboard/myOrders' > My Orders</Link></li>
      }

         {
          isSeller && <> <li><Link to='/deshboard/addProduct' > Add Product</Link></li>
                       <li><Link to='/deshboard/myProduct' > my Product</Link></li></>
         }
           
    </ul>
  
  </div>
</div>
       <Footer></Footer>
</div>
    );
};

export default DeshboardLayout;