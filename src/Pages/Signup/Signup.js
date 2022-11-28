import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider";
import image from "../../Resourses/SignUp-removebg 4.png";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const {  setUserRole, signUpUser, updateUser, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();
  
  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError("");
    signUpUser(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('User Created Successfully.')
        const userInfo = {
            displayName: data.name
        }
        updateUser(userInfo)
            .then(() => {
            saveUserInDb(data.name, data.email, data.role)
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  const saveUserInDb = (name, email, role) =>{
    const user = {name, email, role};
    fetch(`http://localhost:5000/users?email=${email}`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
         getJwtToken(email);
       
    })
  }

  const verifyUserRole = (email) =>{
    fetch(`http://localhost:5000/users/role/${email}`)
            .then(res => res.json())
            .then(data=>{
                console.log(data.role);
                setUserRole(data.role);
                navigate('/');
            })
  }

  const getJwtToken = email =>{
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res => res.json())
    .then(data => {
        if(data.accessToken){
        localStorage.setItem('jwtToken', data.accessToken);
        verifyUserRole(email);
            
        }
    })
  }

  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        const role = 'Buyer';
        console.log(user.displayName, user.email, role);
        saveUserInDb(user.displayName, user.email, role);
        toast.success('User Created Successfully.');
    })
    .catch(error=> console.error(error))
        }
  return (
    <div className="hero w-full bg-gradient-to-r from-slate-300 via-stone-300 to-blue-400">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="hidden md:flex">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="w-full max-w-xl xl:px-8 mx-auto my-5 flex justify-center items-center">
          <div className="w-96 p-7">
            <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="input input-bordered rounded w-full max-w-xs"
                />
                {errors.name && (
                  <p className="text-error">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  className="input input-bordered rounded  w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-error">{errors.email.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password should be atleast 6 characters long",
                    },
                  })}
                  className="input input-bordered rounded  w-full "
                />
                {errors.password && (
                  <p className="text-error">{errors.password.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
              <label className="label">
                  {" "}
                  <span className="label-text text-black text-base">Role</span>
                </label>
              <select  {...register("role", {
                    required: "Role is Required",
                  })}
                  placeholder="Please select your role" className="select select-bordered rounded w-full max-w-xs">
              <option disabled>Please select your role</option>
  <option>Buyer</option>
  <option>Seller</option>
</select>
              </div>
              <input
                className="btn btn-secondary rounded  text-black w-full mt-6"
                value="Sign Up"
                type="submit"
              />
              {signUpError && <p className="text-error">{signUpError}</p>}
            </form>
            <p>
              Already have an account? Please <Link className="text-error" to="/login"> Login</Link>
            </p>
            <div className="divider">OR</div>
            <div className="flex items-center space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
              <p className="px-3 mb-4 text-sm text-gray-900">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <button
               onClick={handleGoogleSignIn}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center btn btn-outline w-full p-4 transition duration-200 bg-white text-black hover:bg-error focus:shadow-outline focus:outline-none rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:shadow-outline h-12"
            >
              <FaGoogle></FaGoogle>
              <p className="ml-3">Login with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
