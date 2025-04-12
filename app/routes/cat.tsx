import { Link, useSearchParams } from "react-router";
import LetUsWork from "~/components/layout/LetUsWork";

function Cat() {
  const [searchParams] = useSearchParams();
  const imageUrl = searchParams.get("img");
  const catId = searchParams.get("id");

  return (
    <div className="flex flex-col items-center justify-center w-full mx-[5%] my-[5%]">
      {/* close and navigate to home page */}
      <button className="top-4 sticky z-10">
        <Link to="/">
          <i className="bx bx-x text-2xl p-3 mb-8 rounded-full bg-[#e8e5e480] backdrop-blur-sm hover:bg-black hover:text-white" />
        </Link>
      </button>

      <p className="px-4 py-2 bg-[#e8e5e480] mb-8 rounded-full ">
        Cat Id: {catId}
      </p>

      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Cat"
          className="rounded-lg w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <p>No image URL provided.</p>
      )}

      <div className="text-3xl flex flex-col items-center justify-center h-100 gap-2">
        <LetUsWork />
      </div>
    </div>
  );
}

export default Cat;
