import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { postMiddleware } from "Middleware";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValue = { email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const[isSubmit,setIsSubmit] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin/");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const callback = (res) => {
    if (res.status === 200) {
      dispatch({
        type: "registerUser",
        payload: {
          userData: res.data,
        },
      });

      localStorage.setItem("token", res.data.token);
      navigate("/admin/");
     
    } else {
      const errors = {};
      var message;

      if (res.response.data.message) {
        message = res.response.data.message;
      } else {
        message = res.message;
      }
      errors.main = message ;
      setFormErrors(errors);
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    setIsSubmit(true);

    const errors = validate(formValues);
    setFormErrors(errors);

    // if (Object.keys(errors).length === 0) {
    //   setEmailState("");
    //   setPasswordState("");

    //   alert("logging In");

      // postMiddleware("/user/login", formValues, callback, false);
    // }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "*Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "*Please enter valid email";
    }
    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password.length < 6) {
      errors.password = "*Password is too small";
    } else if (values.password.length > 12) {
      errors.password = "*Password is too large";
    }

    return errors;
  };

  useEffect(()=>{

    if(Object.keys(formErrors).length === 0 && isSubmit){
      postMiddleware("/user/login", formValues, callback, false);
    }

  },[formErrors])

 

  return (
    <div className="mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <p className="my-2 text-sm font-medium text-red-300 dark:text-red-600">
          {formErrors.main}
        </p>

        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-1"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
          value={formValues.email}
          handleChange={handleChange}
        />
        <p className="mb-2 text-sm font-medium text-red-300 dark:text-red-600">
          {formErrors.email}
        </p>

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-1"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
          value={formValues.password}
          handleChange={handleChange}
        />
        <p className="mb-2 text-sm font-medium text-red-300 dark:text-red-600">
          {formErrors.password}
        </p>

        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Sign In
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <Link
            to="/auth/sign-up"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
