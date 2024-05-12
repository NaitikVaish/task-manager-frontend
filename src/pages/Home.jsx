import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo1 from "../assets/logo1.png";
import { features } from "../constants";
import { testimonials } from "../constants";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Home = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
    
  return (
    <nav className="top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto lg:text-sm py-4 bg-cyan-300">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-15 mr-2" src={logo1} alt="Logo" />
            <span className="text-3xl font-bold tracking-tight cursor-pointer">Taskify</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-xl">
            <li className="hover:text-blue-700 hover:font-bold"><a href="#features">Features</a></li>
            <li className="hover:text-blue-700 hover:font-bold"><a href="#test">Testimonials</a></li>
            <li className="hover:text-blue-700 hover:font-bold"><a href="#contact">Contact Us</a></li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="/log-in" className="py-2 px-3 border rounded-md bg-gradient-to-r from-blue-500 to-blue-700 font-bold text-white">
              Sign In
            </a>
            <a
              href="/sign-up"
              className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-3 rounded-md font-bold text-white"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 mb-5">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="/login" className="py-2 px-3 border rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                Sign In
              </a>
              <a
                href="/signup"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-white"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex flex-col items-center hero p-10 bg-cyan-100">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Taskly assign task 
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          for users
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-gray-600 max-w-4xl">
        Assign, edit, and track the status of the task very easily with our website.
        Get started today and assign the task to your clients online!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="/sign-up"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md font-bold text-white"
        >
          Start for free
        </a>
        <a href="/docu" className="py-3 px-4 mx-3 rounded-md border bg-blue-400 font-bold text-white">
          Documentation
        </a>
      </div>
      <div className="flex mt-40 justify-center">
       
        <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d" className="rounded-lg w-1/3 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"/>
        <img src="https://images.unsplash.com/photo-1634078111133-a1e12d6131b6" className="rounded-lg w-1/3 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"/>
      </div>
    </div>


    <div id="features" className="relative border-b border-t border-neutral-800 min-h-[800px] bg-blue-100">
      <div className="text-center p-10">
        <span className="bg-blue-700 text-white rounded-full h-6 mt-4 text-xl font-medium px-4 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily assign{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            the task
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-violet-700 text-white justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div id="test" className="mt-20 tracking-wide border-b border-black">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center mb-20">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-blue-50 rounded-md p-6 text-md border border-blue-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div id="contact">
        <div className="text-center">
          <h1 className="text-6xl mt-10">Contact Us</h1>
        </div>
        <div class="flex flex-col md:flex-row justify-center max-w-7xl ml-40 mt-20">
            <div class="flex flex-col px-7 py-2 bg-slate-300  w-full rounded-tl-3xl">
                <div class="text-lg font-semibold">
                    <h1 className="text-3xl font-bold mb-4">Send a message</h1>
                </div>
                <div class="flex flex-col md:flex-row ">
                    <div>
                      <input type="text" name="" id="" placeholder="Enter first name" class="w-full border-2 border-white px-3 py-1 text-sm outline-none placeholder:text-black placeholder:opacity-40 mt-4 mr-2 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>
                    </div>
                    <div>
                      <input type="text" name="" id="" placeholder="Enter last name" class="w-full md:w-[95%] border-2 border-white px-3 py-1 text-sm outline-none placeholder:text-black placeholder:opacity-40 mt-4 md:ml-2 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>
                    </div>
                </div>
                  <input type="email" name="" id="" placeholder="Enter email address" class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>
                  <input type="tel" name="" id="" placeholder="Phone Number" class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>
                  <input type="text" name="" id="" placeholder="Subject" class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>
                  <textarea id="message" name="message" placeholder="Write us a message" class="mb-3 w-full border-2 border-white h-44 text-sm outline-none placeholder:text-black placeholder:opacity-40 focus:border-blue-500 py-1 px-3 mt-4 resize-none leading-6 duration-200 ease-in-out rounded-lg"></textarea>
                  <button class="bg-sky-800 hover:bg-blue-600 px-4 font-semibold text-white w-1/2 text-center mx-auto my-3 rounded-tr-lg rounded-bl-lg">Send</button>
            </div>
            <div class="flex flex-col bg-cyan-300 text-black md:w-[65%] rounded-br-3xl">
              <h1 class="font-semibold px-5 my-5 text-3xl">Contact info</h1>
              <div class="flex px-5 space-x-2">
                <ion-icon name="call-sharp" class="text-stone-700 mt-1 my-3"></ion-icon>
                <span class="text-md font-bold mb-4">+91 95484 05497</span>
              </div>
              <div class="flex px-5 space-x-2">
                <ion-icon name="mail" class="text-stone-700 mt-1 my-3"></ion-icon>
                  <span class="text-md font-bold mb-4">infotaskify1234@gmail.com</span>
              </div>
              <div class="flex px-5 space-x-2 mb-40">
                <ion-icon name="home" class="text-stone-700 mt-1 my-3" ></ion-icon>
                <span class="text-md font-bold mb-4">GLA University 17km Stone,NH-2,Mathura-Delhi Road Mathura,Uttar Pradesh 281406</span>
              </div>
              <div class="px-5 space-x-5 mt-7 mx-auto mb-5" >
                  <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f text-white bg-blue-600 text-2xl p-2 rounded-xl"></i></a>
                  <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram text-white bg-gradient-to-bl from-indigo-800 via bg-fuchsia-500 to-amber-400 p-2 rounded-xl text-2xl"></i></a>
                  <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin text-white bg-blue-900 text-2xl p-2 rounded-xl"></i></a>
              </div>
            </div>
        </div>
    </div>
    <script src="https://kit.fontawesome.com/290d4f0eb4.js" crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                                     
      
    <footer id="footer" className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl font-bold mb-4 ml-10">Resources</h3>
          <ul className="space-y-2 ml-10">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-black hover:text-blue-900"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 ml-10">Platform</h3>
          <ul className="space-y-2 ml-10">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-black hover:text-blue-900"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 ml-10">Community</h3>
          <ul className="space-y-2 ml-10">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-black hover:text-blue-900"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="text-white font-medium mt-10 mb-0 text-md text-center bg-blue-500 p-5 space-y-0"> Copyright 2024. All rights reserved by <a href="#" class="text-white hover:text-black">Taskify</a></div>
    </footer>
    </nav>
  )
}

export default Home