import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider";
import useVerifyRole from "../../hooks/useVerifyRole";
import image from "../../Resourses/SignUp-removebg-preview.png";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const [loggedUserEmail, setLoggedUserEmail]= useState()
  const [role] = useVerifyRole(loggedUserEmail);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const {  setUserRole, logIn, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");

  if(role){
    navigate('/')
  }

  const handleLogin = (data) => {
    // console.log(data);
    setLoginError("");
    logIn(data.email, data.password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        getJwtToken(data.email);
        
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
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

  
  const getJwtToken = email =>{
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res => res.json())
    .then(data => {
        if(data.accessToken){
        localStorage.setItem('jwtToken', data.accessToken);
        setLoggedUserEmail(email)
        navigate(from, {replace: true})
        // verifyUserRole(email);
        }
    })
  }

  // const verifyUserRole = email =>{
  //   fetch(`http://localhost:5000/users/role/${email}`)
  //           .then(res => res.json())
  //           .then(data=>{
  //               console.log(data.role);
  //               setUserRole(data)
  //               navigate('/');
  //           })
  // }

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
    <div className="hero w-full min-h-screen bg-gradient-to-r from-slate-300 via-stone-300 to-blue-400">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="hidden md:flex">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="w-full max-w-xl xl:px-8 mx-auto my-5 flex justify-center items-center">
          <div className="w-96 p-7">
            <h2 className="text-2xl font-semibold text-center">Log In</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
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
                  <span className="label-text text-black text-base">
                    Password
                  </span>
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

              <input
                className="btn btn-secondary rounded  text-black w-full mt-6"
                value="LogIn"
                type="submit"
              />
              {loginError && <p className="text-error">{loginError}</p>}
            </form>
            <p>
              Don't have an account? Please{" "}
              <Link className="text-error" to="/signup">
                {" "}
                Sign Up
              </Link>
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

export default Login;
