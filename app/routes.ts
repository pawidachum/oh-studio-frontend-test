import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("contact", "routes/contact.tsx"),
    route("form", "routes/form.tsx"),
    route("profile", "routes/profile.tsx"),
    route("cat", "routes/cat.tsx"),
] satisfies RouteConfig;
