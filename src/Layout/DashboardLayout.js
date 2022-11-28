import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {userRole} = useContext(AuthContext);
    console.log(userRole?.role);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   <div className='flex justify-center'> <label htmlFor="dashboard-drawer" className="btn btn-secondary btn-sm rounded-none  lg:hidden">Dashboard Menu</label></div>
  <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-52 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      {
        userRole?.role === 'Admin' && <>
         <li><Link to= '/dashboard/buyers'>Buyers</Link></li>
      <li><Link to= '/dashboard/sellers'>Sellers</Link></li>
        </>
      }
      {
        userRole?.role === 'Buyer' && <>
         <li><Link to= '/dashboard/bookings'>My Bookings</Link></li>
        </>
      }
      {
        userRole?.role === 'Seller' && <>
         <li><Link to= '/dashboard/addproduct'>Add a product</Link></li>
        </>
      }
      
     
     
    </ul>
  
  </div>
</div>
            
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;