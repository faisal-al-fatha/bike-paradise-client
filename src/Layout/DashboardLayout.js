import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import useVerifyRole from '../hooks/useVerifyRole';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {userRole, user} = useContext(AuthContext);
    const [role] = useVerifyRole(user?.email)
    // console.log(user.email);
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
        role === 'Admin' && <>
         <li><Link to= '/dashboard/buyers'>Buyers</Link></li>
      <li><Link to= '/dashboard/sellers'>Sellers</Link></li>
        </>
      }
      {
        role === 'Buyer' && <>
         <li><Link to= '/dashboard/bookings'>My Bookings</Link></li>
        </>
      }
      {
        role === 'Seller' && <>
         <li><Link to= '/dashboard/addproduct'>Add a product</Link></li>
         <li><Link to= '/dashboard/myproduct'>My products</Link></li>
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