import { useQuery } from "@tanstack/react-query";

const AllSellers = () => {
    const {data: sellers = []} =useQuery({
        queryKey: ['Seller'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data
        }
    })
    return (
        <div>
           <div className="text-center">
           <p className="text-2xl font-semibold my-6">All sellers List</p>
           </div>
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email Address</th>
        <th>Verify Seller</th>
        <th>Delete Seller</th>
      </tr>
    </thead>
    <tbody>
     
     {
        sellers?.map((seller, i) =>  <tr key={seller._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{seller.name}</div>
            </div>
          </div>
        </td>
        <td>
          {seller.email}
        </td>
        <td><button className="btn btn-accent btn-sm px-5 rounded">Verify</button></td>
        <th>
        <button className="btn btn-secondary btn-sm px-5  rounded">Delete</button>
        </th>
      </tr>)
     }
    </tbody>
    
  </table>
</div>

        </div>
    );
};

export default AllSellers;