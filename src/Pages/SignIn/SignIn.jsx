import { useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="username">User name</label>
        <input placeholder="Tom" {...register("username")} />
        <label htmlFor="email">Email</label>
        <input
          placeholder="mail@mail.com"
          {...register("email", {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors?.email?.type === "pattern" && <p>Enter valid email</p>}
        <input type="submit" />
      </form>
    </>
  );
}

export default SignIn;
