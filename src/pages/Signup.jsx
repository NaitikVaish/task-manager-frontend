import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import Textbox from '../components/Textbox';
const ServerUrl = import.meta.env.VITE_SERVER_URL;

const Signup = () => {
    const {user} = useSelector((state) => state.auth);
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (data)=> {
    try{
        await axios.post(`${ServerUrl}/api/user/register`, {...data, role: userType, isAdmin: userType === "Admin"}).then(() => {
            navigate("/login");
        });
    } catch(error) {
        console.log("Error Signup Page :: " + error);
    }
  }
  console.log(user);
  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-cyan-100">
        <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
            {/* left side  */}
            <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
                <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
                    <span className="flex gap-1 py-1 px-3 border-4 rounded-full text-sm md:text-base border-blue-800 text-white bg-blue-400">
                    Manage all your task in one place</span>
                    <p className="flex flex-col gap-0 md:gap-4 text-4xl md:6xl 2xl:text-7xl font-black text-center text-black">
                        <span>Assign Task On</span>
                        <span className="bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">Taskify</span>
                    </p>
                    <div className="cell">
                        <div className="circle rotate-in-up-left"></div>
                    </div>
                </div>
            </div>

            {/* right side  */}
            <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit(submitHandler)} 
                className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14">
                    <div className="">
                        <p className="text-blue-600 text-4xl font-bold text-center mb-4">Register</p>
                        <p className="text-center text-base text-gray-900">Create your Account on Taskify</p>
                    </div>

                    <div>
                        <p className="font-bold">Register As: </p>
                        <input className="ml=10" type="radio" name="userType" value="User" onChange={(e) => setUserType(e.target.value)} /> User
                        <input className="ml-10" type="radio" name="userType" value="Admin" onChange={(e) => setUserType(e.target.value)} /> Admin
                    </div>

                    {userType == "Admin" ? (<Textbox 
                            placeholder="Secret Key"
                            type="password"
                            name="sec"
                            label="Secret Key"
                            className="w-full rounded-full"
                            register={register("sec", {required: "Secret key is required!"})}
                            error={errors.sec ? errors.sec.message : ""}
                        />) : null }

                    <div className="flex flex-col gap-y-5 font-bold">
                        <Textbox 
                            placeholder="Name"
                            type="text"
                            name="name"
                            label="Name"
                            className="w-full rounded-full"
                            register={register("name", {required: "Name is required!"})}
                            error={errors.name ? errors.name.message : ""}
                        />
                        <Textbox 
                            placeholder="Title"
                            type="text"
                            name="title"
                            label="Title"
                            className="w-full rounded-full"
                            register={register("title", {required: "Title is required!"})}
                            error={errors.title ? errors.title.message : ""}
                        />
                        <Textbox 
                            placeholder="email@example.com"
                            type="email"
                            name="email"
                            label="Email Address"
                            className="w-full rounded-full"
                            register={register("email", {required: "Email Address is required!"})}
                            error={errors.email ? errors.email.message : ""}
                        />
                        <Textbox 
                            placeholder="create password"
                            type="password"
                            name="password"
                            label="Password"
                            className="w-full rounded-full"
                            register={register("password", {required: "Password is required!"})}
                            error={errors.password ? errors.password.message : ""}
                        />

                        <Button 
                            type="submit"
                            label="Register Me"
                            className="w-full- h-10 bg-blue-700 text-white rounded-full hover:bg-blue-900 font-bold"
                        />
                        <p className="text-center">Already have an account ? {" "}<a href="/log-in" className="font-bold cursor-pointer hover:text-blue-600 hover:underline">Sign In</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Signup
