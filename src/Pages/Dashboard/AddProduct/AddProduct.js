import { useForm } from "react-hook-form";
import image from '../../../Resourses/signup2.png';

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const handleAddProduct= () => {
    
    }

    return (
        <div className="hero w-full ">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="hidden md:flex">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="w-full max-w-xl xl:px-8 mx-auto my-5 flex justify-center items-center">
          <div className="w-96 p-7">
            <h2 className="text-2xl font-semibold text-center">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Product Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="input input-bordered rounded w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Price</span>
                </label>
                <input
                  type="text"
                  {...register("price", {
                    required: true,
                  })}
                  className="input input-bordered rounded  w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Location</span>
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
                  type="text"
                  {...register("contactNo", {
                    required: true,
                  })}
                  className="input input-bordered rounded  w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Year of Purchase</span>
                </label>
                <input
                  type="text"
                  {...register("purchaseYear", {
                    required: true,
                  })}
                  className="input input-bordered rounded  w-full max-w-xs"
                />
              </div>

              <div className="form-control w-full max-w-xs">
              <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Product Condition</span>
                </label>
              <select  {...register("condition", {
                    required: "Condition is Required",
                  })}
                  placeholder="Please select your role" className="select select-bordered rounded w-full max-w-xs">
              <option disabled>Please select product condition</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
              <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Bike Category</span>
                </label>
              <select  {...register("category", {
                    required: "Category is Required",
                  })}
                  placeholder="Please select bike category" className="select select-bordered rounded w-full max-w-xs">
              <option disabled>Please select bike category</option>
                <option>Sports</option>
                <option>Scooter</option>
                <option>Cruiser</option>
                <option>Commuter</option>
                <option>Dirt</option>
</select>
              </div>
              <input
                className="btn btn-secondary rounded  text-black w-full mt-6"
                value="Sign Up"
                type="submit"
              />
              
            </form>
            
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddProduct;