import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import { initWOW } from "../wowClientOnly";
import LetUsWork from "~/components/layout/LetUsWork";

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
  const [activeTab, setActiveTab] = useState("Expertise");

  const categoryButtons = [
    "Expertise",
    "Branding",
    "Product",
    "Design Systems",
  ];

  const cats = useLoaderData() as { id: string; url: string }[];

  useEffect(() => {
    if (typeof window !== "undefined") {
      initWOW();
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center leading-20 w-230 h-200 gap-8  wow animate__animated animate__slideInUp animation__faster">
          <p className="text-7xl font-medium px-20 text-center leading-20">
            A brand and product designer working with clients globally
          </p>

          <nav className="flex rounded-full h-12 items-center justify-center gap-2">
            {categoryButtons.map((name) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`px-4 py-2 rounded-full flex items-center text-sm justify-center transition-colors ${
                  activeTab === name ? "bg-white" : "bg-[#e8e5e480]"
                }`}
              >
                {name}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === "Expertise" && (
          // for responsive layout
          // <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="grid grid-cols-2 gap-4 w-full  wow animate__animated animate__slideInUp animation__faster">
            {cats.map((cat, index) => (
              <div
                key={index}
                className="relative w-full h-120 overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  key={index}
                  src={cat.url}
                  alt={`Cat ${index}`}
                  className="rounded-lg w-full h-full object-cover"
                  loading="lazy"
                />

                <Link
                  to={`/cat?img=${encodeURIComponent(cat.url)}&id=${cat.id}`}
                >
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                  <div className="absolute top-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {`Cat ${cat.id}`}
                  </div>

                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <i className="bx bx-right-top-arrow-circle text-white text-2xl"></i>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {activeTab !== "Expertise" && (
          <div className="h-100 mt-12 text-center text-2xl text-gray-500">
            {activeTab} section coming soon...
          </div>
        )}
{/* 
        <div className="flex flex-col items-center justify-center h-100 gap-2">
          <p className="text-3xl wow animate__animated animate__fadeInUp animate__fast animate__delay-1s">
            Let's work together.
          </p>
          <p className="text-3xl text-gray-400 wow animate__animated animate__fadeInUp animate__fast animate__delay-2s">
            Get in touch
          </p>
        </div> */}
        <div className="text-3xl flex flex-col items-center justify-center h-100 gap-2">
        <LetUsWork />
        </div>
      </div>
    </>
  );
}
