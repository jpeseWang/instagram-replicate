import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import logoText from "../images/737566.png";
import downloadAS from "../images/downloadAppStore.png";
import downloadGP from "../images/downloadGooglePlay.png";
export default function SignUpPage() {
  return (
    <div className="mt-10 flex justify-center ">
      {/* Images */}
      <div className=" mt-2 ">
        {" "}
        <form action="" className=" flex-col px-16 ring-1 ring-gray-300">
          <div className="flex justify-center py-6 ">
            <Image src={logoText} alt="logo" className="mt-2 w-[175px] " />
          </div>
          <h1 className=" mb-4 text-center font-semibold text-gray-500">
            Sign up to see photos and videos<br></br> from your friends.
          </h1>
          <button className="my-4 block w-[260px] rounded-md bg-[#0295F6]  py-1.5 text-center text-sm font-medium text-white hover:opacity-70">
            <FaSquareFacebook className="mb-1 inline h-5 w-6" /> Log in with
            Facebook
          </button>
          <div className="my-4 flex items-center">
            <hr className="flex-grow border-t border-gray-200" />
            <span className=" px-4 text-sm font-medium text-gray-500">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          {/* Input */}
          <input
            type="text"
            className="block h-[40px] w-[260px] rounded-sm bg-gray-50 px-2 text-xs placeholder-gray-500 ring-1 ring-gray-200"
            placeholder="Phone number, username or email"
          />
          <input
            type="text"
            className="mt-2 h-[40px] w-[260px] rounded-sm  bg-gray-50 px-2 text-xs placeholder-gray-500 ring-1 ring-gray-200"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="mt-2 block h-[40px] w-[260px] rounded-sm bg-gray-50 px-2 text-xs placeholder-gray-500 ring-1 ring-gray-200"
            placeholder="Username"
          />
          <input
            type="text"
            className="mt-2 h-[40px] w-[260px] rounded-sm  bg-gray-50 px-2 text-xs placeholder-gray-500 ring-1 ring-gray-200"
            placeholder="Password"
          />

          <div className="text-center">
            <p className="my-6 max-w-[260px] text-xs text-gray-500">
              People who use our service may have uploaded your contact
              information to Instagram.
              <span className="text-[#00376B]">&nbsp;Learn More</span>
            </p>
            <p className="my-6 max-w-[260px] text-xs text-gray-500">
              By signing up, you agree to our
              <span className="text-[#00376B]">
                &nbsp;Terms , Privacy Policy and Cookies Policy .
              </span>
            </p>
            <button className="mt-4 block w-[260px] rounded-md bg-[#0295F6]  py-1.5 text-center text-sm font-medium text-white hover:opacity-70">
              Sign up
            </button>
            <br></br>
            <br></br>
          </div>
        </form>
        {/* Box 2 */}
        <div className=" mt-4 justify-center py-6 text-center text-sm ring-1 ring-gray-300">
          Have an account?&nbsp;
          <span className="font-semibold text-[#0095F6]">
            <Link href="/accounts/login">Login</Link>
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
  );
}
