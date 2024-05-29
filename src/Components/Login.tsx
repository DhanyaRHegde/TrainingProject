import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaLogin, FormFieldsLogin } from './../Validators/Validator';

export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset} = useForm<FormFieldsLogin>({
    resolver: zodResolver(schemaLogin)
  }); // form

  const onSubmit: SubmitHandler<FormFieldsLogin> = async data => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
    reset();
  }

  const email = watch("email");
  const password = watch("password");

  const isFormValid = email && password;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="max-w-xl min-w-330px w-auto space-y-8 p-8 m-5 bg-white shadow-md rounded-md">
        <h2 className="text-2xl text-center text-gray-500">Sign in</h2>
        <form className="space-y-4 min-w-275px" onSubmit={handleSubmit(onSubmit)}>

          <div className="flex flex-col ">

            <div className="mb-4">
              <span className="text-gray-600">Email*</span>
              <input {...register("email")} type="text" placeholder="Email" className="h-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none" />
              {errors.email && (
                <div className="text-red-400 text-xs">{errors.email.message}</div>
              )}
            </div>

            <div>
              <span className="text-gray-600">Password*</span>
              <input {...register("password")} type="password" placeholder="Password" className="h-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none" />
              {errors.password && (
                <div className="text-red-400 text-xs">{errors.password.message}</div>
              )}
            </div>
          </div>

          <div>
            <button
              disabled={isSubmitting || !isFormValid}
              type="submit"
              className={`text-xl text-center h-10 w-full border rounded-md focus:outline-none
                ${isSubmitting || !isFormValid ? 'bg-gray-300 text-white' : 'bg-gray-400 text-black'}`}
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
        <div>
          <div className="text-start text-xs text-gray-500">forgot password?</div>
          <a href="/Signup" className="text-center text-gray-600">Create Account</a>
        </div>
      </div>
    </div>
  )
}

