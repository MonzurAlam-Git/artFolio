import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit function
  const onSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(email, password);
    if (user) {
      navigate("/");
    }
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-no-repeat bg-cover bg-center relative bg-emerald-600">
          <div className="absolute opacity-75 inset-0 z-0"></div>
          <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            {/* text part */}
            <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
              <div className="self-start hidden lg:flex flex-col  text-white">
                <h1 className="mb-3 font-extrabold text-2xl ">
                  Your gateway to a world of possibilities. Join us behind the
                  login screen.{" "}
                  <span className="text-black block">
                    Your key to a WORLD OF CONVENIENCE awaits.
                  </span>
                </h1>
                <img
                  src="https://i.ibb.co/vs6QC03/Tablet-login.gif"
                  className="mb-3 w-5/6"
                />
              </div>
            </div>
            {/* LOGIN FORM */}
            <div className="flex justify-center self-center z-10">
              <div className="p-24 bg-white mx-auto rounded-2xl w-100 ">
                <div className="mb-4">
                  <h3 className="font-semibold text-4xl text-gray-800 text-center">
                    L O G I N
                  </h3>
                  <p className="text-gray-500 text-xl font-bold text-center">
                    Sign in for a personalized experience tailored just for you
                  </p>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Email
                    </label>
                    {/* email input field  */}
                    <input
                      className="input input-success  w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      type=""
                      placeholder="mail@gmail.com"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please provide Email correctly ",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]/i,
                          message: "Please provide Email correctly ",
                        },
                      })}
                    />
                    {/* email error  */}
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="text-red-500 font-bold ml-8">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="text-red-500 font-bold ml-8">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* password input field  */}
                  <div className="space-y-2">
                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                      Password
                    </label>
                    <input
                      className="input input-success w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      type="password"
                      placeholder="Enter your password"
                      autoComplete="on"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Please provide password correctly ",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                    />
                    {/* password error  */}
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="text-red-500 font-bold ml-8">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="text-red-500 font-bold ml-8">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                      />
                      <label
                        // for="remember_me"
                        className="ml-2 block text-sm text-gray-800"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                    />
                    <div className="mt-2 text-sm flex flex-col gap-2">
                      <a
                        href="#"
                        className="font-bold text-red-500 hover:text-green-500"
                      >
                        Forgot password?
                      </a>
                      <p className="">
                        {" "}
                        New to ArtFolio?{" "}
                        <Link
                          className="my-1 text-primary font-bold"
                          to="/register"
                        >
                          {" "}
                          Create new account
                        </Link>{" "}
                      </p>
                    </div>
                    <SocialLogin></SocialLogin>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
