import { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider';

const MyBookings = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <div className='text-center'>
            <h3 className='text-2xl font-bold my-6'> All Bookings of {user.user.displayName} </h3>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    
    <thead className='bg-slate-300'>
      <tr >
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td><button className='btn-secondary px-4 py-1 rounded'>Buy Now</button></td>
      </tr>
     

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBookings;