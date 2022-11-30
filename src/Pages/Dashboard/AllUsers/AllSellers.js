import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllSellers = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["Seller"],
    queryFn: async () => {
      const res = await fetch("https://bike-paradise-server-faisal-al-fatha.vercel.app/sellers");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = (id) => {
    const agree = window.confirm("Are you sure you want to delete the seller?");
    if (agree) {
      fetch(`https://bike-paradise-server-faisal-al-fatha.vercel.app/users/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.error("Seller Deleted Successfully");
            refetch();
          }
        });
    }
  };

  const handleVerifySeller = (id) => {
    fetch(`https://bike-paradise-server-faisal-al-fatha.vercel.app/sellers/verify/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Seller Verification Successful");
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-semibold my-6">All sellers List</p>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Verify Seller</th>
              <th>Delete Seller</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{seller.name}</div>
                    </div>
                  </div>
                </td>
                <td>{seller.email}</td>
                <td>
                  {seller?.status ? (
                    <span className="ml-2 font-semibold"> Verified</span>
                  ) : (
                    <button
                      onClick={() => handleVerifySeller(seller._id)}
                      className="btn btn-accent btn-sm px-5 rounded"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDeleteSeller(seller._id)}
                    className="btn btn-secondary btn-sm px-5  rounded"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
