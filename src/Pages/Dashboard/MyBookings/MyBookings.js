import { useQuery } from "@tanstack/react-query";
import { useContext } from 'react';
import toast from "react-hot-toast";
import { AuthContext } from '../../../Context/Authprovider';

const MyBookings = () => {
    const user = useContext(AuthContext);
    const {data: bookings = [], refetch}= useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://bike-paradise-server-faisal-al-fatha.vercel.app/bookings?email=${user.user.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwtToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })
    const handleBuyNow = (id) => {
        fetch(`https://bike-paradise-server-faisal-al-fatha.vercel.app/bookings/buy/${id}`, {
          method: "PUT",
          headers: {
            authorization: `bearer ${localStorage.getItem("jwtToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success("Buy Successful");
              refetch();
            }
          });
      };

    const handleDeleteBooking = (id) => {
        const agree = window.confirm("Are you sure you want to delete the booking?");
        if (agree) {
          fetch(`https://bike-paradise-server-faisal-al-fatha.vercel.app/bookings/delete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                toast.error("Booking Deleted Successfully");
                refetch();
              }
            });
        }
      };

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
        <th>Booking Status</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
        bookings?.map((booking, i) => 
            <tr key={booking._id}>
            <th>{i + 1}</th>
            <td>{booking.productName}</td>
            <td>${booking.price}</td>
            <td>{booking?.status}</td>
            <td><button onClick={()=> handleBuyNow} className='btn-accent px-4 py-1 rounded'>Buy Now</button></td>
            <td><button 
             onClick={() => handleDeleteBooking(booking._id)}className='btn-secondary px-4 py-1 rounded'>Delete Booking</button></td>
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