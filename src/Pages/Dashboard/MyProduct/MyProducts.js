import { useQuery } from "@tanstack/react-query";
import { useContext } from 'react';
import toast from "react-hot-toast";
import { AuthContext } from '../../../Context/Authprovider';

const MyProducts = () => {
    const user = useContext(AuthContext);
    const {data: products = [], refetch}= useQuery({
        queryKey: ['products', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://bike-paradise-server.vercel.app/products?email=${user.user.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwtToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })

    const handleDeleteProduct = (id) => {
        const agree = window.confirm("Are you sure you want to delete the product?");
        if (agree) {
          fetch(`https://bike-paradise-server.vercel.app/products/delete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                toast.error("Product Deleted Successfully");
                refetch();
              }
            });
        }
      }

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
    <th>Category</th>
    <th>Posted Time</th>
    <th>Delete a product</th>
  </tr>
</thead>
<tbody>
 
 {
    products?.map((product, i) => 
        <tr key={product._id}>
        <th>{i + 1}</th>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>{product.category}</td>
        <td>{product.time}</td>
        <td><button 
         onClick={() =>handleDeleteProduct(product._id)}className='btn-secondary px-4 py-1 rounded'>Delete Product</button></td>
      </tr>
    )
 }
 

</tbody>
</table>
</div>
    </div>
    );
};

export default MyProducts;