import { NavLink, useLoaderData } from "react-router";
import type { Route } from "./+types/home";

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
      <div className="flex flex-col items-center justify-center leading-20 h-screen">
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
                `px-6 py-3 w-24 h-10 bg-[#e8e5e480] rounded-full flex items-center text-sm justify-center transition-colors ${
                  isActive ? "bg-white" : "hover:bg-white/50"
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
      <div className="grid grid-cols-2 gap-4 p-4 ">
        {cats.map((cat, index) => (
          <div key={index} className="w-full h-120 overflow-hidden rounded-lg">
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
    </>
  );
}
