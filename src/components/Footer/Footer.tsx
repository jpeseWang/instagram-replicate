import React from "react";

interface Navigation {
  main: { name: string; href: string }[];
}

const navigation: Navigation = {
  main: [
    { name: "Meta", href: "#" },
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Help", href: "#" },
    { name: "API", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Locations", href: "#" },
    { name: "Instagram Lite", href: "#" },
    { name: "Threads", href: "#" },
    { name: "Meta Verified", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white ">
      <div className="flex lg:flex-1 items-center"></div>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 border-t mt-6">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-xs leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className="mt-4 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Instagram from Meta
        </p>
      </div>
    </footer>
  );
}
