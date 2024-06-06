/* eslint-disable no-unused-vars */
// import React from 'react'
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import axios from 'axios';


// export default function EmployeeTable() {
//   return (
//     <div className='className="w-full min-h-screen bg-[rgb(17,24,39)] "'>
//       <div className="" >
//       <h1 className='text-white text-3xl text-center font-bold'>EMPLOYEE TABLE</h1>
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-6">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th scope="col" className="px-6 py-3">
//                   Id
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   firstName
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   lastName
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   nationalIdentity
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   phoneNumber
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   email
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   department
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   position
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Laptop
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   manufacturer
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   model
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   serialNumber
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
   const history = useNavigate();

 
  

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all/employees");
        setEmployees(response.data); // Assuming response.data is an array of employees
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[rgb(17,24,39)]">
      <div className="">
        <h1 className="text-white text-3xl text-center font-bold">
          EMPLOYEE TABLE
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  National Identity
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Position
                </th>

                <th scope="col" className="px-6 py-3">
                  LaptopManufacturer
                </th>
                <th scope="col" className="px-6 py-3">
                  Model
                </th>
                <th scope="col" className="px-6 py-3">
                  Serial Number
                </th>
                <th className="bg-green-500 w-32 h-8 text-white text-md text-center">
                  <Link to="/employee">addEmployee</Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{employee.id}</td>
                  <td className="px-6 py-4">{employee.firstName}</td>
                  <td className="px-6 py-4">{employee.lastName}</td>
                  <td className="px-6 py-4">{employee.nationalId}</td>
                  <td className="px-6 py-4">{employee.telephone}</td>
                  <td className="px-6 py-4">{employee.email}</td>
                  <td className="px-6 py-4">{employee.department}</td>
                  <td className="px-6 py-4">{employee.position}</td>
                  {/* <td className="px-6 py-4">{employee.laptop}</td> */}
                  <td className="px-6 py-4">{employee.laptopManufacturer}</td>
                  <td className="px-6 py-4">{employee.model}</td>
                  <td className="px-6 py-4">{employee.serialNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
