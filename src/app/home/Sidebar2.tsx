import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { classNames } from "@/utils/classNames";
const navigation = [
  { name: "", href: "#", icon: FaInstagram, current: true },
  { name: "Home", href: "#", icon: GoHomeFill, current: true },
  { name: "Popular", href: "#", icon: FiSearch, current: false },
  { name: "Communities", href: "#", icon: FaRegCompass, current: false },
  { name: "Trending", href: "#", icon: RiMessengerLine, current: false },
  { name: "Trending", href: "#", icon: FaRegHeart, current: false },
  { name: "Trending", href: "#", icon: CgAddR, current: false },
];

const communities = [
  { name: "Movies", href: "#" },
  { name: "Food", href: "#" },
  { name: "Sports", href: "#" },
  { name: "Animals", href: "#" },
  { name: "Science", href: "#" },
  { name: "Dinosaurs", href: "#" },
  { name: "Talents", href: "#" },
  { name: "Gaming", href: "#" },
];
export default function Sidebar2() {
  return (
    <div>
      <div className="mr-4 hidden h-screen border-r lg:block xl:w-[160px]">
        <nav
          aria-label="Sidebar"
          className="sticky top-4 divide-y divide-gray-300"
        >
          <div className="space-y-1 pb-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-regular group flex items-center rounded-md px-2 py-4 text-sm"
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-black"
                      : "text-black group-hover:text-gray-500",
                    "-ml-1 mr-3 h-6 w-6 flex-shrink-0",
                  )}
                  aria-hidden="true"
                />
                <span className="hidden truncate font-[400] xl:flex">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
