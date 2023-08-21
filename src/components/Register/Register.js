import { getAuth } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const imgUrl =
    "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  // const [registerError, setRegisterError] = useState("");
  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    setLoginError("");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true });
        toast.success("User Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
        toast.error(loginError ? loginError : error.message);
      });
  };

  const handleRegister = (data) => {
    console.log(data.userName);

    createUser(data.userEmail, data.userPassword)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("user create successfully");
        const userInfo = {
          displayName: data.userName,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));

        console.log("update user", auth.currentUser);

        navigate("/");
      })

      .catch((error) => {
        console.log(error);
        // setRegisterError(error.message);
        // toast.error(registerError ? registerError : "Something Wrong");
        toast.error(error.message);
      });

    resetField("userName");
    resetField("userEmail");
    resetField("userPassword");
  };

  return (
    <div className="max-w-7xl mx-auto py-28 lg:py-40 px-4 lg:px-4">
      <div className="lg:flex justify-between overflow-hidden">
        <div className="w-full lg:w-[47%] mb-5 lg:mb-0 hover:scale-105 duration-300">
          <div
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "500px",
            }}
            className="flex justify-center items-center bg-[rgb(0,0,0)] "
          >
            <div className="text-orange-200 bg-[rgba(0,0,0,0.5)]  mx-16 p-5">
              <h1 className="text-3xl font-raleWay font-thin text-justify">
                Please , Register for Order your favorite food. We are waiting
                for your order and give fresh food.
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[47%] border border-orange-200 px-10">
          {/* <div className="text-center ">
            <h2 className="text-3xl py-5 ">Login</h2>
            <from onSubmit={handleSubmit(onSubmit)} className="pb-5">
              <label className="label">
                <span className="label-text">What is your Username?</span>
              </label>
              <input
                {...register("firstName")}
                type="text"
                className="input input-bordered w-full max-w-xs mb-5"
              />

              <label className="label">
                <span className="label-text">What is your Password?</span>
              </label>
              <input
                {...register("password")}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs mb-5 border-rose-600"
              />

              <input type="submit" />
            </from>
          </div> */}
          <div className="flex justify-center items-center">
            <div className="w-full">
              <h2 className="text-3xl py-8 text-center  text-orange-400">
                Register
              </h2>
              <form onSubmit={handleSubmit(handleRegister)} className="">
                <input
                  {...register("userName", {
                    required: "User name is required",
                  })}
                  type="text"
                  placeholder="User name"
                  className="py-3 px-2 w-full border border-orange-200"
                />
                {errors.userName && (
                  <p role="alert" className="pt-2 flex  text-red-500  ">
                    <span className="flex justify-center items-center ">
                      <RiErrorWarningFill className="mr-2" />
                      {errors.userName?.message}
                    </span>
                  </p>
                )}

                <input
                  {...register("userEmail", {
                    required: "Email Address is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="py-3 px-2 mt-5 w-full  border border-orange-200"
                />
                {errors.userEmail && (
                  <p role="alert" className="pt-2 flex  text-red-500  ">
                    <span className="flex justify-center items-center ">
                      <RiErrorWarningFill className="mr-2" />
                      {errors.userEmail?.message}
                    </span>
                  </p>
                )}

                <input
                  {...register("userPassword", {
                    required: "Password is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length of password is 4",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="py-3 px-2 w-full mt-5 border border-orange-200"
                />
                {errors.userPassword && (
                  <p role="alert" className="pt-2 flex  text-red-500  ">
                    <span className="flex justify-center items-center ">
                      <RiErrorWarningFill className="mr-2" />
                      {errors.userPassword?.message}
                    </span>
                  </p>
                )}

                <input
                  type="submit"
                  className="px-12 py-2 mt-5 bg-orange-200 font-raleWay font-medium cursor-pointer"
                  value="Register"
                />
              </form>

              <div className="py-3 text-gray-500">
                <p>
                  Already Have An Account ?{" "}
                  <Link to="/login" className="text-orange-400">
                    Login
                  </Link>
                </p>
              </div>
              <div className="divider">OR</div>

              <div className="flex justify-center items-center bg-orange-200 w-full my-4 lg:w-1/2 mx-auto">
                <FcGoogle />
                <button
                  onClick={handleGoogleSignIn}
                  className="px-3 py-2 text-slate-500  font-raleWay font-semibold"
                >
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
