import React from "react";
import useSWR from "swr";
import { FaSquareFacebook } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

import logoText from "@/assets/images/InsText.png";
import EmailConfirmation from "../../images/EmailConfirmation.png";
import downloadAS from "../../images/downloadAppStore.png";
import downloadGP from "../../images/downloadGooglePlay.png";
import Footer from "@/components/Footer/Footer";

import { fetcher } from "@/lib/fetch";

export default function ConfirmationForm() {
  return (
    <>
      <div className="mt-10 flex justify-center">
        {/* Images */}
        <div className=" mt-2 ">
          <form
            action=""
            className="w-[350px] flex-col justify-center text-center ring-1 ring-gray-300"
          >
            <div className="flex justify-center py-6 ">
              <Image
                src={EmailConfirmation}
                alt="logo"
                className="mt-2 w-[92px] "
              />
            </div>
            <h1 className=" mb-4 text-center text-sm font-semibold text-gray-900">
              Enter Confirmation Code
            </h1>
            <div className="justify-center">
              <p className="my-2 text-sm text-black">
                Enter the confirmation code we sent to camblyfree06@gmail.com.
                <span className="font-semibold text-[#0095F6]">
                  &nbsp;Resend Code.
                </span>
              </p>
            </div>
            {/* Input */}
            <input
              type="text"
              className="mt-2 h-[40px] w-[260px] rounded-sm  bg-gray-50 px-2 text-sm placeholder-gray-500 ring-1 ring-gray-200 placeholder:text-sm"
              placeholder="Confirmation Code"
            />
            <div className="text-center">
              <button className="mb-2 mt-4 w-[260px] justify-center rounded-md bg-[#0295F6]  py-1.5 text-center text-sm font-medium text-white hover:opacity-70">
                Next
              </button>
              <button className="mb-4 w-[260px] justify-center rounded-md py-1.5  text-center text-sm font-semibold text-[#0295F6]  hover:opacity-70">
                Go Back
              </button>
            </div>
          </form>
          {/* Box 2 */}
          <div className="mt-4  w-[350px] justify-center py-6 text-center text-sm ring-1 ring-gray-300">
            Have an account?&nbsp;
            <span className="font-semibold text-[#0095F6]">
              <Link href="/accounts/login">Login</Link>
            </span>
          </div>
          {/* App download */}
          <div className=" mt-2 px-6 py-6 text-center text-sm">
            <p>Get the app.</p>
            <div className="mt-4 flex gap-x-2">
              <Link href="https://itunes.apple.com/app/instagram/id389801252?ct=igweb.loginPage.badge&mt=8&pt=428156&vt=lo">
                <Image src={downloadAS} alt="App Store" className="w-[136px]" />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D2EF76FB1-184C-42C4-B676-06971B6EBB81%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
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
