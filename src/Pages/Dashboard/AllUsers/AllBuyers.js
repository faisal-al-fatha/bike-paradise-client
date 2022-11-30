import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ["Buyer"],
        queryFn: async () => {
          const res = await fetch("https://bike-paradise-server-faisal-al-fatha.vercel.app/buyers");
          const data = await res.json();
          return data;
        },
      });
    
      const handleDeleteBuyer = (id) => {
        const agree = window.confirm("Are you sure you want to delete the buyer?");
        if (agree) {
          fetch(`https://bike-paradise-server-faisal-al-fatha.vercel.app/users/delete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                toast.error("Buyer Deleted Successfully");
                refetch();
              }
            });
        }
      };
    return (
        <div>
        <div className="text-center">
          <p className="text-2xl font-semibold my-6">All Buyers List</p>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email Address</th>
                <th>Delete Buyer</th>
              </tr>
            </thead>
            <tbody>
              {buyers?.map((buyer, i) => (
                <tr key={buyer._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{buyer.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{buyer.email}</td>
                  
                  <th>
                    <button
                      onClick={() => handleDeleteBuyer(buyer._id)}
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

export default AllBuyers;