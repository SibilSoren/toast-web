import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
function SignIn() {
  let navigate = useNavigate();
  let [userNameError, setUserNameError] = useState(false);
  let [emailError, setEmailError] = useState(false);
  let [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (formData) => {
    console.log(formData);
    if (formData.username === "") {
      setUserNameError(true);
    }
    if (formData.email === "") {
      setEmailError(true);
    }
    if (formData.username && formData.email) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/app");
      }, 3000);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 border-slate-700 w-2/6 h-fit p-5 rounded-lg shadow-2xl">
        <h2 className="text-center w-full text-2xl font-bold m-2 mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col">
          <label htmlFor="username" className="font-semibold text-lg mb-2">
            User name
          </label>
          <input
            className={`border-2 ${
              userNameError ? "border-rose-800" : "border-slate-700"
            }  h-12 rounded-md p-2 mb-4`}
            placeholder="Tom"
            {...register("username", {
              onBlur: (e) => {
                if (e.target.value !== "") {
                  setUserNameError(false);
                } else {
                  setUserNameError(true);
                }
              },
            })}
          />
          <label htmlFor="email" className="font-semibold text-lg mb-2">
            Email
          </label>
          <input
            className={`border-2 ${
              emailError ? "border-rose-800" : "border-slate-700"
            } h-12 rounded-md p-2 mb-1`}
            placeholder="mail@gmail.com"
            {...register("email", {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors?.email?.type === "pattern" && (
            <p className="text-rose-600">Please enter valid email id</p>
          )}
          {/* <input type="submit" className="rounded-lg bg-indigo-500 p-4" /> */}

          <button
            type="submit"
            className={`bg-slate-600 ${
              loading ? "w-fit" : "w-1/5"
            }  m-auto mt-3 h-12 rounded-lg text-white hover:bg-slate-800 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-100 transition duration-500 ease-in signInBtn`}
          >
            {loading ? (
              <div className="flex items-center ">
                <Oval
                  height={25}
                  width={25}
                  color="#FFFFFF"
                  wrapperStyle={{}}
                  wrapperClass="ml-2"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#d7d7d9"
                  strokeWidth={4}
                  strokeWidthSecondary={5}
                />
                <p className="m-3 ">Processing...</p>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
