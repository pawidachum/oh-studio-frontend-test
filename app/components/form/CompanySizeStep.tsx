interface CompanySizeStepProps {
  onNext: () => void;
  onBack: () => void;
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

function CompanySizeStep({ onNext, onBack, selectedSize, onSelectSize }: CompanySizeStepProps) {
  const sizes = ["only me", "1-5 employees", "6-10 employees", "11-100 employees", "over 100 employees"];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">What's your company size?</h2>
      <p className="text-[#64748c] mb-6">Please select one of the following options:</p>
      
      <div className="space-y-3 mb-6">
        {sizes.map((size) => (
          <div 
            key={size}
            className="flex items-center border border-gray-300 rounded-md p-3 cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={() => onSelectSize(size)}
          >
            <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center mr-3">
              {selectedSize === size && (
                <div className="h-3 w-3 rounded-full bg-gray-500"></div>
              )}
            </div>
            <span>{size}</span>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-white shadow-sm text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
        
        <button
          onClick={onNext}
          disabled={!selectedSize}
          className={`bg-[#64748c] text-white px-4 py-2 rounded-md shadow-sm ${
            selectedSize ? "hover:bg-gray-700" : "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CompanySizeStep