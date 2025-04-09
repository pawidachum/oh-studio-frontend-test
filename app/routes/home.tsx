import { NavLink, useFetcher, useLoaderData } from "react-router";
import type { Route } from "./+types/home";
import { log } from "node:console";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  if (!response.ok) throw new Error("Failed to fetch cats");
  return response.json();
}

export default function Home() {
  const categoryButtons = [
    { name: "Expertise", path: "/" },
    { name: "Branding", path: "/" },
    { name: "Product", path: "/" },
    { name: "DesignSystems", path: "/"},
  ];

//   const cats = useFetcher();
// const response =  cats.load("https://api.thecatapi.com/v1/images/search?limit=10");

// console.log("response ",response);

const cats = useLoaderData() as {url: string}[];
console.log("cats ",cats);

  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen leading-20 ">
          <p className="text-5xl sm:text-6xl px-20 text-center leading-20">
            A brand and product designer working with clients globally
          </p>

          <nav className="flex rounded-full w-82 h-12 items-center justify-center gap-4">
      {categoryButtons.map((button) => (
        <NavLink
          key={button.name}
          to={button.path}
          end
          className={({ isActive }) =>
            `px-6 py-3 w-24 h-10 bg-[#e8e5e480] rounded-full  flex items-center text-sm justify-center transition-colors ${
              isActive ? "bg-white" : "hover:bg-white/50"
            }`
          }
        >
          {button.name}
        </NavLink>
      ))}
      </nav>
        </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
  {cats.map((cat, index) => (
        <img
          key={index}
          src={cat.url}
          alt={`Cat ${index}`}
          className="rounded-lg shadow-md"
        />
      ))}
      </div>
    </>
  );
}
