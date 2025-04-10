import { NavLink } from "react-router";

export default function Navigation() {
  const tabs = [
    { name: "Home", path: "/" },
    // { name: "Profile", path: "" },
    { name: "Contact", path: "/contact" },
    { name: "Form", path: "/form" },
  ];
  return (
    <div className="flex items-center justify-center h-20">
      {/* <nav className="flex bg-[#e8e5e480] rounded-full w-110 h-12 items-center justify-center gap-4"> */}
      <nav className="flex bg-[#e8e5e480] rounded-full w-82 h-12 items-center justify-center gap-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            end
            className={({ isActive }) =>
              `px-6 py-3 w-24 h-10 rounded-full flex items-center text-sm justify-center transition-colors ${
                isActive ? "bg-white" : "hover:bg-white/50"
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
