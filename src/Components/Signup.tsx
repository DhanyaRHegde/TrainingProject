import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaSignup, FormFieldsSignup } from './../Validators/Validator';

export default function Signup() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } = useForm<FormFieldsSignup>({
    resolver: zodResolver(schemaSignup)
  });

  const onSubmit: SubmitHandler<FormFieldsSignup> = async data => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const email = watch("email");
  const password = watch("password");

  const isFormValid = firstName && lastName && email && password;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="max-w-xl w-full space-y-8 p-8 bg-white shadow-md rounded-md m-5 mobile:w-3/4">
        <h2 className="text-2xl text-center text-gray-500">Create Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex tablet:flex-row justify-between laptop:flex-row justify-between mobile:flex-col items-center gap-5">
            <div className="tablet:flex-grow laptop:w-1/2 mobile:w-full">
              <span className="text-gray-600">First name*</span>
              <input {...register("firstName")} type="text" placeholder="First Name" className="h-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none" />
              {errors.firstName && (
                <div className="text-red-400 text-xs">{errors.firstName.message}</div>
              )}
            </div>
            <div className="flex-grow laptop:w-1/2 mobile:w-full">
              <span className="text-gray-600">Last name*</span>
              <input {...register("lastName")} type="text" placeholder="Last Name" className="h-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none" />
              {errors.lastName && (
                <div className="text-red-400 text-xs">{errors.lastName.message}</div>
              )}
            </div>
          </div>
          <div className="w-full flex tablet:flex-row justify-between laptop:flex-row justify-between mobile:flex-col items-center gap-5">
            <div className="tablet:flex-grow laptop:w-1/2 mobile:w-full">
              <span className="text-gray-600">Email*</span>
              <input {...register("email")} type="email" placeholder="Email" className="h-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none" />
              {errors.email && (
                <div className="text-red-400 text-xs">{errors.email.message}</div>
              )}
            </div>
            <div className="flex-grow laptop:w-1/2 mobile:w-full">
              <span className="text-gray-600">Password*</span>
              <input {...register("password")} type="password" placeholder="Password" className="h-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none" />
              {errors.password && (
                <div className="text-red-400 text-xs">{errors.password.message}</div>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              disabled={isSubmitting || !isFormValid}
              type="submit"
              className={`mt-3 text-xl text-center h-10 w-full border rounded-md focus:outline-none ${isSubmitting || !isFormValid ? 'bg-gray-300 text-white' : 'bg-gray-400 text-black'}`}
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
        <div>
          <a href="/Login" className="text-center text-gray-600">Login instead</a>
        </div>
      </div>
    </div>
  );
}

