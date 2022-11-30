import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Authprovider";

const BookingModal = ({product}) => {
    const {name,price,_id, sellerEmail } =product
const user = useContext(AuthContext);
const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const handleBooking= (data) => {
        console.log(data.name, data.email, data.productName, data.price,  data.location,  sellerEmail,  data.contactNo, _id);
        saveBookingInDb(data.name, data.email, data.productName, data.price,  data.location,  sellerEmail,  data.contactNo, _id)
        }
    
        const saveBookingInDb = (name, email, productName, price,  location, sellerEmail, contactNo, productId   ) =>{
           const booking = {name, email, productName, price,  location, sellerEmail, contactNo, productId  }
            fetch(`https://bike-paradise-server.vercel.app/bookings?email=${email}`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(booking)
            })
            .then(res => res.json())
            .then(data =>{
               toast.success('Booking Confirmed')
               navigate('/')
            })
            .catch(error => {
                toast.error('Cannot Book a now');
                navigate('/')
            })
          }



  return (
   <>
   <input type="checkbox" id="booking-product" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-product" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className="w-full max-w-xl xl:px-8 mx-auto my-5 flex justify-center items-center">
          <div className="w-96 p-7">
            <h2 className="text-2xl font-bold text-center">Book {product?.name}</h2>
            <form 
            onSubmit={handleSubmit(handleBooking)}
            >
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Your Name</span>
                </label>
                <input
                readOnly
                  type="text"
                  defaultValue= {user.user.displayName}
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="input input-bordered rounded w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Buy Price</span>
                </label>
                <input
                  readOnly
                  type="text"
                  defaultValue= {user.user.email}
                  {...register("email", {
                    required: true,
                  })}
                  className="input input-bordered rounded  w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Product's Name</span>
                </label>
                <input
                  readOnly
                  type="text"
                  defaultValue= {name}
                  {...register("productName", {
                    required: true,
                  })}
                  className="input input-bordered rounded  w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Price</span>
                </label>
                <input
                 readOnly
                 type="text"
                 defaultValue= {price}
                  {...register("price", {
                    required: true,
                  })}
                  className="input input-bordered rounded  w-full max-w-xs"
                />
              </div>
             
             
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Meeting Location</span>
                </label>
                <input
                  type="text"
                  {...register("location", {
                    required: true,
                  })}
                  className="input input-bordered rounded  w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Contact number</span>
                </label>
                <input
                  type="number"
                  {...register("contactNo", {
                    required: true,
                  })}
                  className="input input-bordered rounded  w-full max-w-xs"
                />
              </div>
              
             
              <input
                className="btn btn-secondary rounded  text-black w-full mt-6"
                value="Book Now"
                type="submit"
              />
              
            </form>
            
            
          </div>
        </div>
  </div>
</div>
   </>
  );
};

export default BookingModal;
