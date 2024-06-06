import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const LoginUser = async (event) => {
   event.preventDefault();

   const validationSchema = Yup.object().shape({
     email: Yup.string().email().required("Email is required"),
     password: Yup.string().required("Password is required")
   });

   try {
     await validationSchema.validate({ email, password });

     const user = { email, password };

     const response = await axios.post(
       "http://localhost:5000/user/login",
       user,
       {
        headers: {
          "Content-Type": "application/json"
        }
       }
     );
    console.log("response: " + response.data.token);

     if (response.data.token) {
       // Set the token in the headers
       axios.defaults.headers.common[
         "Authorization"
       ] = ` ${response.data.token}`;


       // Navigate to the employee component after successful login
       navigate("/employee");
     } else {
       console.error("Invalid response from the server");
     }
   } catch (error) {
     console.error("Error logging in:", error);
   }
 };

  return (
    <div className="w-full min-h-screen bg-[rgb(17,24,39)] flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="font-bold text-3xl text-white">
          WELCOME TO EQUIPMENT MANAGEMENT SYSTEM
        </h1>
        <h2 className="text-white font-bold text-2xl">SIGN IN</h2>
      </div>
      <div className=" bg-[rgb(17,24,39)] border border-solid w-[30%]  h-[40vh]  mt-6 rounded-2xl ">
        <form className="max-w-sm mx-auto" onSubmit={LoginUser}>
          <div className="mb-5 mt-10">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

