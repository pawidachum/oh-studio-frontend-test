import { Link } from "react-router";

function Footer() {
  return (
    <div className="flex justify-between flex-grow">
      <div className="flex items-center justify-center gap-2 mb-4">
        <i
          className="bx bx-copyright h-[100%]"
          style={{ fontSize: "18px", color: "#333" }}
        />
        <span className="text-sm text-gray-500">Cat Style 2025</span>
      </div>
      <div className="flex gap-2 text-sm">
        <Link to="https://x.com/" className="hover:text-gray-700">
          Twitter
        </Link>
        <Link
          to="https://www.linkedin.com/feed/"
          className="hover:text-gray-700"
        >
          LinkedIn
        </Link>
        <Link to="https://mail.google.com/" className="hover:text-gray-700">
          Mail
        </Link>
      </div>
    </div>
  );
}

export default Footer;
