import { useEffect, useState } from "react";
import { Link } from "react-router";
import { initWOW } from "../../wowClientOnly";

function Footer() {
const iconVariants = ['bx bxs-sun', 'bx bx-sun'];
const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % iconVariants.length);
  }, 1000);

  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      initWOW();
    }
  }, []);

  return (
    <div className="flex justify-between flex-grow">
      <div className="flex items-center justify-center gap-1 mb-4">
        <i
          className={`bx ${iconVariants[index]} text-lg wow animate__animated animate__delay-1s animate__rotateIn animate__infinite animate__slow`}
        />
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
