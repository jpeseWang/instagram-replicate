"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import bg1 from "./images/loginBg1.png";
import bg2 from "./images/loginBg2.png";
import bg3 from "./images/loginBg3.png";
import insText from "./images/instagram-new (1).png";
import iPFrame2 from "./images/frame.png";
import "./style.scss";

export default function LoginPage() {
  const images = [bg1, bg2, bg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="image-container relative">
            <Image
              src={iPFrame2}
              alt=""
              className="w-[500px] h-auto image-fade"
            />
            <Image
              src={images[currentImageIndex]}
              alt=""
              className="w-[275px] h-auto image-fade absolute top-6 left-[165px]"
            />
          </div>

          <div className="block mt-6">
            <form action="">
              Instagram
              <input
                type="text"
                className="ring-1 ring-gray-200 rounded-sm text-sm"
                placeholder="Phone number, username or email"
              />
            </form>
          </div>
        </div>
      </div> */}
      <div className="mt-10 flex justify-center ">
        {/* Images */}
        <div className="image-container relative hidden sm:flex ">
          <Image
            src={iPFrame2}
            alt=""
            className="image-fade h-auto w-[500px]"
          />
          <Image
            src={images[currentImageIndex]}
            alt=""
            className="image-fade absolute left-[165px] top-6 h-auto w-[275px]"
          />
        </div>{" "}
        {/* Form */}
        <div className="mt-6 block">
          <form action="" className=" flex-col px-16 ring-1 ring-gray-300">
            <Image
              src={insText}
              alt="logo"
              className="my-4 w-[175px] justify-center"
            />
            <input
              type="text"
              className="block h-[40px] w-[260px] rounded-sm px-2 text-xs placeholder-gray-500 ring-1 ring-gray-200"
              placeholder="Phone number, username or email"
            />
            <input
              type="text"
              className="mt-2 h-[40px] w-[260px] rounded-sm  px-2  text-xs placeholder-gray-500 ring-1 ring-gray-200"
              placeholder="Password"
            />
            <button className="mt-4 block w-[260px] rounded-md bg-[#0295F6]  py-1 text-center text-sm font-medium text-white hover:opacity-70">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
