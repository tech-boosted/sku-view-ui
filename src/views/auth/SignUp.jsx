import React, { useEffect, useState } from "react";
import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { postMiddleware } from "Middleware";
import { useDispatch } from "react-redux";
import { useToast } from '@chakra-ui/react'


const SignUp = () => {
  const toast = useToast()

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValue = {
    email: "",
    firstname: "",
    lastname: "",
    company: "",
    phone_number: "",
    password: "",
  };
  const initialInputState = {
    email: "",
    firstname: "",
    lastname: "",
    company: "",
    phone_number: "",
    password: "",
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin/");
    }
  }, []);

  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [inputState, setInputState] = useState(initialInputState);
  const [isSubmit, setIsSubmit] = useState(false);

  const callback = (res) => {
    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);

      dispatch({
        type: "registerUser",
        payload: {
          userData: res.data,
        },
      });

      navigate("/admin/");
      toast({
        title: 'Login Successfull.',
        status: 'success',
        duration: 5000,
        position:    'top-right',
        variant:'subtle',
        isClosable: true,
      })
    } else {
      const errors = {};
      var message;
      if (res.response.data.message) {
        message = res.response.data.message;
      } else {
        message = res.message;
      }
      errors.main = message;
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const errors = validate(formValues);
    setFormErrors(errors);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstname) {
      errors.firstname = "Firstname is required";
      setInputState.firstname = "error";
    }
    if (!values.company) {
      errors.company = "Company name is required";
      setInputState.company = "error";
    }
    if (!values.email) {
      errors.email = "Email is required";
      setInputState.email = "error";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter valid email";
      setInputState.email = "error";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required";
      setInputState.lastname = "error";
    }
    if (!values.password) {
      errors.password = "Password is required";
      setInputState.password = "error";
    } else if (values.password.length < 6) {
      errors.password = "Password is too small";
      setInputState.password = "error";
    } else if (values.password.length > 12) {
      errors.password = "Password is too large";
      setInputState.password = "error";
    }
    if (!values.phone_number) {
      errors.phone_number = "Phone No is required";
      setInputState.phone_number = "error";
    } else if (
      values.phone_number.length < 10 ||
      values.phone_number.length > 10
    ) {
      errors.phone_number = "Phone No must be of 10 digits";
      setInputState.phone_number = "error";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      postMiddleware("/user/register", formValues, callback, false);  
    }
  }, [formErrors]);

  return (
    <div className="  mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign Up
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your credentials to sign up into our app!
        </p>

        <p className="my-2 text-sm font-medium text-red-300 dark:text-red-600">
          {formErrors.main}
        </p>

        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-1"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
          value={formValues.email}
          state={inputState.email}
          handleChange={handleChange}
        />
        <p className="mb-2 text-sm font-medium text-red-300 dark:text-red-600">
          {formErrors.email}
        </p>
        <div className="flex items-center justify-between">
          {/* First-Name */}
          <div>
            <InputField
              variant="auth"
              extra="mb-1"
              label="FirstName*"
              placeholder="Firstname"
              id="firstname"
              type="text"
              value={formValues.firstname}
              state={inputState.firstname}
              handleChange={handleChange}
            />
            <p className="mb-2 text-sm font-medium text-red-300 dark:text-red-600">
              {formErrors.firstname}
            </p>
          </div>
          {/* Last-Name */}
          <div>
            <InputField
              variant="auth"
              extra="mb-1"
              label="LastName*"
              placeholder="Lastname"
              id="lastname"
              type="text"
              value={formValues.lastname}
              state={inputState.lastname}
              handleChange={handleChange}
            />
            <p className="mb-2 text-sm font-medium text-red-300 dark:text-red-600">
              {formErrors.lastname}
            </p>
          </div>
        </div>

        {/* Company-Name */}
        <InputField
          variant="auth"
          extra="mb-1"
          label="CompanyName*"
          placeholder="Companyname"
          id="company"
          type="text"
          value={formValues.company}
          state={inputState.company}
          handleChange={handleChange}
        />
        <p className="mb-2 text-sm font-medium text-red-300 dark:text-red-600">
          {formErrors.company}
        </p>
        {/* Phone-Number */}
        <InputField
          variant="auth"
          extra="mb-1"
          label="Phone No*"
          placeholder="Phone No."
          id="phone_number"
          type="number"
          value={formValues.phone_number}
          state={inputState.phone_number}
          handleChange={handleChange}
        />
        <p className="mb-2 text-sm font-medium text-red-300 dark:text-red-600">
          {formErrors.phone_number}
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
          state={inputState.password}
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
              Keep me Signed Up
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
          Sign Up
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
          </span>
          <Link
            to="/auth"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
