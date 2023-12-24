"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import bg1 from "../images/loginBg1.png";
import bg2 from "../images/loginBg2.png";
import bg3 from "../images/loginBg3.png";
import iPFrame2 from "../images/frame.png";
import logoText from "@/assets/images/InsText.png";
import downloadAS from "../images/downloadAppStore.png";
import downloadGP from "../images/downloadGooglePlay.png";

import Footer from "@/components/Footer/Footer";
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
      <div className="mt-10 flex justify-center ">
        {/* Images */}
        <div className="image-container relative mt-2 hidden lg:flex">
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
        </div>
        {/* Form */}
        <div className="mt-6 block">
          <form action="" className=" flex-col px-16 ring-1 ring-gray-300">
            <div className="flex justify-center py-6">
              {" "}
              <Image src={logoText} alt="logo" className="my-4 w-[175px] " />
            </div>

            <input
              type="text"
              className="block h-[40px] w-[260px] rounded-sm bg-gray-50 px-2 text-xs placeholder-gray-500 ring-1 ring-gray-200"
              placeholder="Phone number, username or email"
            />
            <input
              type="text"
              className="mt-2 h-[40px] w-[260px] rounded-sm  bg-gray-50 px-2 text-xs placeholder-gray-500 ring-1 ring-gray-200"
              placeholder="Password"
            />
            <button className="mt-4 block w-[260px] rounded-md bg-[#0295F6]  py-1.5 text-center text-sm font-medium text-white hover:opacity-70">
              Log in
            </button>

            <div className="my-4 flex items-center">
              <hr className="flex-grow border-t border-gray-200" />
              <span className=" px-4 text-sm font-medium text-gray-500">
                OR
              </span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="text-center">
              <button className="text-sm font-semibold text-[#385185]">
                <FaSquareFacebook className="mb-1 inline h-5 w-6" /> Log in with
                Facebook
              </button>
              <br />
              <button className="my-6 text-xs text-[#00376B]">
                Forgot password?
              </button>
            </div>
          </form>

          {/* Box 2 */}
          <div className=" mt-4 justify-center py-6 text-center text-sm ring-1 ring-gray-300">
            Don&apos;t have an account?&nbsp;
            <span className="font-semibold text-[#0095F6]">
              <Link href="/accounts/signup"> Sign up</Link>
            </span>
          </div>

          {/* App download */}
          <div className=" mt-2 px-16 py-6 text-center text-sm ">
            <p>Get the app.</p>
            <div className="mt-4 flex gap-x-2">
              <Link href="https://itunes.apple.com/app/instagram/id389801252?ct=igweb.loginPage.badge&mt=8&pt=428156&vt=lo">
                {" "}
                <Image src={downloadAS} alt="App Store" className="w-[136px]" />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D2EF76FB1-184C-42C4-B676-06971B6EBB81%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
                {" "}
                <Image src={downloadGP} alt="App Store" className="w-[136px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
