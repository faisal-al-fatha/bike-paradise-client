import { useQuery } from "@tanstack/react-query";
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider';

const MyBookings = () => {
    const user = useContext(AuthContext);
    const {data: bookings = []}= useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user.user.email}`);
            const data = await res.json();
            return data;
        }

    })
    return (
        <div>
            <div className='text-center'>
            <h3 className='text-2xl font-bold my-6'> All Bookings of {user.user.displayName} </h3>
            </div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr >
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
        bookings.map((booking, i) => 
            <tr key={booking._id}>
            <th>{i + 1}</th>
            <td>{booking.productName}</td>
            <td>${booking.price}</td>
            <td><button className='btn-secondary px-4 py-1 rounded'>Buy Now</button></td>
          </tr>
        )
     }
     

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBookings;