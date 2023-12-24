import React from "react";
import {
  PhotoIcon,
  GifIcon,
  AdjustmentsHorizontalIcon,
  ChatBubbleLeftIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
export default function PostCard() {
  return (
    <div>
      {" "}
      {/* Card */}
      <div className="mx-auto mt-6 max-w-md rounded-lg border p-4 ring-1 ring-gray-100 dark:border-none dark:bg-black  dark:ring-gray-700 sm:max-w-xl">
        <div>
          <Link href="" className="flex items-center px-4 py-3">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1701589623520-4fb55453094c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="ml-3 ">
              <span className="text-sm font-semibold leading-tight antialiased dark:text-gray-400">
                jpese_wang
              </span>
              <span className="text-xs text-gray-600"> • </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                2 days ago
              </span>
            </div>
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1701839339549-c19ef662105f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="aspect-w-1 aspect-h-1 my-2 h-[468px] w-full object-cover"
        />
        <div className=" mb-2 mt-3 flex items-center justify-between">
          <div className="flex gap-4">
            {/* <span
                className=" h-6 w-6 cursor-pointer "
                onClick={() => {
                  handleUpdateReact(post._id)
                }}
              >
                {post.react.some(
                  (rating) => rating.userID === session.data.id,
                ) ? (
                  <SolidHeartIcon className="h-6 w-6 text-[#FF3140]" />
                ) : (
                  <HeartIcon className="h-6 w-6" />
                )}
              </span> */}
            <HeartIcon className="h-6 w-6" />

            <ChatBubbleOvalLeftIcon
              className="h-6 w-6 cursor-pointer"
              // onClick={() => {
              //   setViewModalParams(post._id)
              //   setViewModalIsOpen(true)
              // }}
            />
          </div>

          <div className="flex">
            <TrashIcon
              className="h-6 w-6 cursor-pointer hover:text-red-500"
              //   onClick={() => {
              //     handleDelete(post._id)
              //   }}
            />
          </div>
        </div>
        <div className=" mb-2 mt-2 text-sm font-semibold">99 likes</div>
        <div className="flex">
          <div className="text-sm font-semibold  antialiased dark:text-gray-400">
            jpese_wang
          </div>{" "}
          <span className="ml-1 text-sm text-gray-800 dark:text-white">
            Nice
          </span>
        </div>

        <div className="text-sm font-medium text-gray-500">
          <p
            className="cursor-pointer font-normal"
            // onClick={() => {
            //   setViewModalParams(post._id)
            //   setViewModalIsOpen(true)
            // }}
          >
            View all 3 comments
          </p>

          <div>
            <input
              // onClick={() => {
              //   setViewModalParams(post._id)
              //   setViewModalIsOpen(true)
              // }}
              placeholder="Add a comment..."
              className="my-2 bg-transparent font-normal text-gray-800 placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
