import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/utils/classNames";
const navigation = [
  { name: "Home", href: "#", icon: FaInstagram, current: true },
  { name: "Home", href: "#", icon: GoHomeFill, current: true },
  { name: "Popular", href: "#", icon: FiSearch, current: false },
  { name: "Communities", href: "#", icon: FaRegCompass, current: false },
  { name: "Trending", href: "#", icon: RiMessengerLine, current: false },
  { name: "Trending", href: "#", icon: FaRegHeart, current: false },
  { name: "Trending", href: "#", icon: CgAddR, current: false },
];

export default function SideBar() {
  return (
    <div>
      {" "}
      <div className="col-span-3 mr-36 hidden h-screen w-[60px] border-r bg-[#FFFFFF] lg:block xl:col-span-4 xl:w-[160px]">
        <nav
          aria-label="Sidebar"
          className="sticky top-4 divide-y divide-gray-300"
        >
          <div className="space-y-1 pb-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center rounded-md px-2 py-4 text-sm font-medium"
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-black"
                      : "text-black group-hover:text-gray-500",
                    "-ml-1 mr-3 h-7 w-7 flex-shrink-0",
                  )}
                  aria-hidden="true"
                />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
