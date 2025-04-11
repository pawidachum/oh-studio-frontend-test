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
          className="flex items-center justify-center bg-[#64748c] text-white px-6 py-2 rounded-md hover:bg-[#748499]"
        >
          Next
        </button>
          <span className="ml-2 text-[#64748c]">Press Enter ↵</span>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>Powered by Formbricks</p>
        <div className="w-full h-1 bg-gray-300 mt-2"></div>
      </div>
    </div>
  );
}

export default WelcomeStep;
