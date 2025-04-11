import { useEffect } from "react";
import { initWOW } from "../../wowClientOnly";

function LetUsWork() {
 useEffect(() => {
    if (typeof window !== "undefined") {
      initWOW();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-100 gap-2">
          <p className="text-3xl wow animate__animated animate__fadeInUp animate__fast animate__delay-1s">
            Let's work together.
          </p>
          <p className="text-3xl text-gray-400 wow animate__animated animate__fadeInUp animate__fast animate__delay-2s">
            Get in touch
          </p>
    </div>
  )
}

export default LetUsWork