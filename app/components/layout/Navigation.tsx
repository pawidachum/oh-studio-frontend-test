import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <div className="flex items-center justify-center leading-10">
      <nav className="flex bg-[#e8e5e480] rounded-full shadow-sm gap-6 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full transition-colors ${
              isActive ? "bg-white" : "hover:bg-white/50"
            }`
          }
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full transition-colors ${
              isActive ? "bg-white" : "hover:bg-white/50"
            }`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full transition-colors ${
              isActive ? "bg-white" : "hover:bg-white/50"
            }`
          }
        >
          Form
        </NavLink>
      </nav>
    </div>
  );
}
