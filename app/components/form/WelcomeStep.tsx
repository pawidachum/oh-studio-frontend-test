interface WelcomeStepProps {
  onNext: () => void;
}

function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-xl font-bold mb-2">Welcome!</p>
      <p className="text-[#64748c] mb-6">
        Thanks for providing your feedback - let's go!
      </p>
      <div className="flex items-center">
        <button
          onClick={onNext}
          className="flex items-center justify-center bg-[#64748c] text-white px-4 py-2 rounded-xl hover:bg-[#748499] hover:ring-[#748499] ring-2 ring-[#64748c] border border-[#64748c] ring-offset-2 ring-offset-white shadow-inner"
        >
          Next
        </button>
        <span className="ml-2 text-[#64748c]">Press Enter ↵</span>
      </div>

      <div className="mt-6 text-center text-[#64748c] text-sm">
        <p>
          <span className="text-[#95a0b0]">Powered by</span>{" "}
          <span className="font-bold">Formbricks</span>
        </p>
        <div className="w-full h-2 bg-[#64748c] mt-2 rounded-full"></div>
      </div>
    </div>
  );
}

export default WelcomeStep;
