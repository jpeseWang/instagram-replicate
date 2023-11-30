"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "@/utils/classNames";

interface Navigation {
  id: number;
  title: string;
  url: string;
}

interface SessionData {
  id: string;
  fullname: string;
  avatar?: string;
}
const navigation: Navigation[] = [
  {
    id: 1,
    title: "Navigation 1",
    url: "/",
  },
  {
    id: 2,
    title: "Navigation 2",
    url: "/",
  },
  {
    id: 3,
    title: "Navigation 3",
    url: "/",
  },
  {
    id: 4,
    title: "Community",
    url: "/community",
  },
];

const Header: React.FC = () => {
  const session = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const handleSignOut = () => {
    signOut();
  };
  return (
    <div>
      <header className="bg-transparent border-b mb-6">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center">
            {" "}
            <Link href="#" className="-m-1.5 p-1.5 flex items-center">
              {" "}
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
              <p className="ml-2 font-semibold aton text-gray-600">
                Website Name
              </p>{" "}
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Menu as="div" className="hidden lg:flex lg:flex-1 lg:justify-end">
            {session.status === "authenticated" ? (
              <>
                <p className="text-gray-500 pt-1 text-base lg:text-sm pl-2">
                  Welcome! {session?.data?.fullname} &nbsp;
                </p>
                <div>
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    {session.data.avatar ? (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={session.data.avatar}
                        alt=""
                      />
                    ) : (
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"
                        alt=""
                      />
                    )}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={`/auth/profile/${session.data.id}`}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={`/community/message`}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Message
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={`/auth/setting/${session.data.id}`}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                          onClick={() => {
                            handleSignOut();
                          }}
                        >
                          Sign Out
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </>
            ) : (
              <>
                {" "}
                <Link
                  href="/auth/login"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              </>
            )}
          </Menu>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <Menu as="div" className="py-6">
                  {session.status === "authenticated" ? (
                    <>
                      <div className="flex">
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          {session.data.avatar ? (
                            <img
                              className="h-8 w-8 rounded-full "
                              src={session.data.avatar}
                              alt=""
                            />
                          ) : (
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"
                              alt=""
                            />
                          )}
                        </Menu.Button>
                        <span className="text-gray-600 pt-1 px-2 font-medium">
                          Welcome {session.data.fullname}!{" "}
                        </span>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href={`/auth/profile/${session.data.id}`}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href={`/community/message`}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Message
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href={`/auth/setting/${session.data.id}`}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                                onClick={() => {
                                  handleSignOut();
                                }}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href="/auth/login"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Log in <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};
export default Header;
