import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-no-repeat bg-cover bg-center relative bg-emerald-700">
        <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          {/* text part */}
          <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <img src="" className="mb-3" />
              <h1 className="mb-3 font-bold text-5xl">
                Log in for a personalized experience tailored just for you.{" "}
              </h1>
              <p className="pr-3 font-semibold">
                Your gateway to a world of possibilities. Join us behind the
                login screen. Your key to a world of convenience awaits.
              </p>
            </div>
          </div>
          {/* LOGIN FORM */}
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Sign In{" "}
                </h3>
                <p className="text-gray-500">Please sign in to your account.</p>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  {/* email input field  */}
                  <input
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
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
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
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
                  <div className="text-sm">
                    <a href="#" className="text-red-400 hover:text-green-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <input
                    type="submit"
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  />
                  <p className="m-2 ">
                    {" "}
                    New to SmileCraft Dentistry ?{" "}
                    <Link
                      className="my-1 text-primary font-bold"
                      to="/register"
                    >
                      {" "}
                      Create new account
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
