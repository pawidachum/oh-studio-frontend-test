import { NavLink, useLoaderData } from "react-router";
import type { Route } from "./+types/home";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  if (!response.ok) throw new Error("Failed to fetch cats");
  return response.json();
}

export default function Home() {
  const categoryButtons = [
    { name: "Expertise", path: "" },
    { name: "Branding", path: "" },
    { name: "Product", path: "" },
    { name: "DesignSystems", path: "" },
  ];

  const cats = useLoaderData() as { url: string }[];

  return (
    <>
      <div className="flex flex-col items-center justify-center w-400">
        <div className="flex flex-col items-center justify-center leading-20 w-150 h-200 gap-8">
          <p className="text-5xl font-semibold sm:text-6xl px-20 text-center leading-20">
            A brand and product designer working with clients globally
          </p>

          <nav className="flex rounded-full h-12 items-center justify-center gap-4">
            {categoryButtons.map((button) => (
              <NavLink
                key={button.name}
                to={button.path}
                end
                className={({ isActive }) =>
                  `w-32 h-10 rounded-full flex items-center text-sm justify-center transition-colors ${
                    isActive ? "bg-[#e8e5e480]" : "bg-white"
                  }`
                }
              >
                {button.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* for responsive layout */}
        {/* <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"> */}
        <div className="grid grid-cols-2 gap-4">
          {cats.map((cat, index) => (
            <div
              key={index}
              className="w-full h-120 overflow-hidden rounded-lg"
            >
              <img
                key={index}
                src={cat.url}
                alt={`Cat ${index}`}
                className="rounded-lg w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center h-100">
          <p className="text-3xl">Let's work together.</p>
          <p className="text-3xl text-gray-400">Get in touch</p>
        </div>
      </div>
    </>
  );
}
