/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { GrAppsRounded } from "react-icons/gr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { formatTimeStamp } from "@/lib/formatTimeStamp";
import LoadingE from "@/components/Loading/Loading";
import Sidebar2 from "../home/Sidebar2";
import { FaPlusCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
// import ViewForumModal from "@/app/forum/Modal/ViewForum";
import Footer from "@/components/Footer/Footer";
import "./profile.scss";
import Link from "next/link";

export default function Forum({ params }) {
  const session = useSession();
  const router = useRouter();
  const [viewModalIsOpen, setViewModalIsOpen] = useState(false);
  const [viewModalParams, setViewModalParams] = useState("");

  return (
    <>
      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}

        <div className="">
          <div className="mx-auto sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-8">
            <Sidebar2 />

            <main className="py-6 pl-9 lg:col-span-11">
              <div>
                <main className=" bg-opacity-25">
                  <div className="mb-8 lg:mx-auto lg:w-8/12">
                    <header className="mx-auto flex flex-wrap items-center p-4 md:py-8">
                      <div className="md:ml-16 md:w-3/12">
                        <img
                          className="h-20 w-20 rounded-full border-2 border-pink-600 object-cover
                   p-1 md:h-40 md:w-40"
                          src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="profile"
                        />
                      </div>

                      <div className="ml-4 w-8/12 md:w-7/12">
                        <div className="mb-4 md:flex md:flex-wrap md:items-center">
                          <h2 className="mb-2 inline-block text-xl  sm:mb-0 md:mr-2">
                            Leif le
                          </h2>

                          <span
                            className="fas fa-certificate fa-lg relative mr-4
                             inline-block -translate-y-2 transform text-xl text-blue-500"
                            aria-hidden="true"
                          >
                            <i
                              className="fas fa-check absolute inset-x-0 ml-1 mt-px
                             text-xs text-white"
                            ></i>
                          </span>

                          <Link
                            href="#"
                            className="block  rounded-lg 
                      bg-[#0295F6] px-5 py-1.5 text-center text-sm font-semibold text-white
                      hover:bg-[#1877F2] sm:inline-block"
                          >
                            Follow
                          </Link>
                          <Link
                            href="#"
                            className="ml-2 block rounded-lg
                      bg-[#EFEFEF] px-5 py-1.5 text-center text-sm font-semibold text-black
                      hover:bg-[#DBDBDB] sm:inline-block"
                          >
                            Message
                          </Link>
                        </div>

                        <ul className="mb-screen mb-4 hidden space-x-8 md:flex">
                          <li>
                            <span className="font-semibold"> 34</span>
                            {` `}
                            posts
                          </li>

                          <li>
                            <span className="font-semibold">989</span> {` `}
                            followers
                          </li>
                          <li>
                            <span className="font-semibold">345</span> {` `}
                            following
                          </li>
                        </ul>

                        <div className="hidden md:block">
                          <h1 className="font-semibold">des 1</h1>

                          <p>Another Fine Day Ruined By Responsibilities</p>
                        </div>
                      </div>

                      <div className="my-2 text-sm md:hidden">
                        <h1 className="font-semibold">Mr Travlerrr...</h1>

                        <p>LAnother Fine Day Ruined By Responsibilities</p>
                      </div>
                    </header>

                    <div className="px-px md:px-3 ">
                      <ul
                        className="mt-4 flex justify-around space-x-8 border-t 
              p-2 text-center text-sm leading-snug text-gray-600 md:hidden"
                      >
                        <li>
                          <span className="block font-semibold text-gray-800">
                            post 2
                          </span>
                          posts
                        </li>

                        <li>
                          <span className="block font-semibold text-gray-800">
                            40.5k
                          </span>
                          followers
                        </li>
                        <li>
                          <span className="block font-semibold text-gray-800">
                            302
                          </span>
                          following
                        </li>
                      </ul>

                      {/* Highlight section */}
                      <section className="my-16 flex gap-x-11">
                        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-full bg-[#FAFAFA] px-2 py-2 ring-1 ring-gray-200">
                          <PlusIcon className="h-12 w-12 text-[#C7C7C7]" />
                        </div>

                        <img
                          className="flex h-[77px] w-[77px] items-center justify-center rounded-full bg-[#FAFAFA] ring-1 ring-gray-200"
                          src="https://scontent.fdad3-6.fna.fbcdn.net/v/t45.1600-4/399673009_120201644770740346_9118095619695195598_n.png?stp=cp0_dst-jpg_fr_q90_spS444&_nc_cat=1&ccb=1-7&_nc_sid=0fa913&_nc_ohc=3uwCTiahWX8AX_b1w8s&_nc_ht=scontent.fdad3-6.fna&oh=00_AfD3BwcXJBz6k45KSQMcz58HICOmWBOEJlpbCxJnjqxjCw&oe=657880E2"
                        />
                      </section>

                      <ul
                        className="mt-9 flex items-center justify-around space-x-12  
                  border-t text-xs font-semibold uppercase tracking-widest
                  text-gray-600 md:justify-center"
                      >
                        <li className="md:-mt-px md:border-t md:border-gray-700 md:text-gray-700">
                          <a className="inline-block p-3" href="#">
                            <GrAppsRounded className="mb-1 mr-2 inline h-4 w-4" />
                            <span className="hidden md:inline">posts</span>
                          </a>
                        </li>
                        <li>
                          <a className="inline-block p-3" href="#">
                            <FaRegBookmark className="mb-1 mr-2 inline h-4 w-4" />

                            <span className="hidden md:inline">SAVED</span>
                          </a>
                        </li>
                        <li>
                          <a className="inline-block p-3" href="#">
                            <span className="hidden md:inline">tagged</span>
                          </a>
                        </li>
                      </ul>

                      <div className="container ">
                        <div className="gallery">
                          <div
                            className="gallery-item"
                            tabIndex="0"
                            // key={index}
                            onClick={() => {
                              setViewModalParams(post._id);
                              setViewModalIsOpen(true);
                            }}
                          >
                            <div>
                              <img
                                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="gallery-image"
                                alt=""
                              />
                              <div className="gallery-item-info">
                                <ul>
                                  <li className="gallery-item-likes text-sm">
                                    <span className="visually-hidden text-sm">
                                      Likes:
                                    </span>
                                    <HeartIcon className="inline h-6 w-6 pb-1" />
                                    34
                                  </li>
                                  <li className="gallery-item-comments text-sm">
                                    <span className="visually-hidden">
                                      Comments:
                                    </span>
                                    <ChatBubbleOvalLeftIcon className="inline h-6 w-6 pb-1" />{" "}
                                    23
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* {viewModalIsOpen && (
              <ViewForumModal
                isOpen={viewModalIsOpen}
                onClose={closeModal}
                reload={mutate}
                params={viewModalParams}
              />
            )} */}
                </main>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
