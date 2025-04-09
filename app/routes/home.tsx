import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen leading-20 ">
          <p className="text-5xl sm:text-6xl px-20 text-center leading-20">
            A brand and product designer working with clients globally
          </p>

          <div className="flex items-center justify-center mt-30 gap-6">
            <button className="bg-amber-500 rounded-full py-10 shadow-sm">
              Expertise
            </button>
            <button className="bg-primary rounded-full p-1 w-fit shadow-sm">
              Branding
            </button>
            <button className="bg-amber-500 rounded-full p-1 w-fit shadow-sm">
              product
            </button>
            <button className="bg-amber-500 rounded-full p-1 w-fit shadow-sm">
              Design Systems
            </button>
          </div>
        </div>
    </>
  );
}
