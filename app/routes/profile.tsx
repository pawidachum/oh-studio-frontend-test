import LetUsWork from "~/components/layout/LetUsWork";

function profile() {
  return (
    <>
      <div className="text-3xl flex flex-col items-center justify-center h-100 gap-2">
      <p className="text-gray-300">No profile data available.</p>
        <LetUsWork />
      </div>
    </>
  );
}

export default profile;
