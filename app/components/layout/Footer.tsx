import { Link } from "react-router";

function Footer() {
  return (
    <div className="flex justify-between flex-grow">
      <div className="flex items-center justify-center gap-1 mb-4">
        <i
          className="bx bx-copyright text-lg"
        />
        <span className="text-sm">Cat Style 2025</span>
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
