import React from 'react'

interface SourceStepProps {
  onNext: () => void;
  onBack: () => void;
  selectedSource: string;
  onSelectSource: (source: string) => void;
}

function SourceStep({ onNext, onBack, selectedSource, onSelectSource }: SourceStepProps) {
  const sources = ["Recommendation", "Social Media", "Ads", "Google Search", "In a Podcast"];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">How did you hear about us first?</h2>
      <p className="text-[#64748c] mb-6">Please select one of the following options:</p>
      
      <div className="space-y-3 mb-6">
        {sources.map((source) => (
          <div 
            key={source}
            className="flex items-center border border-gray-300 rounded-md p-3 cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={() => onSelectSource(source)}
          >
            <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center mr-3">
              {selectedSource === source && (
                <div className="h-3 w-3 rounded-full bg-gray-500"></div>
              )}
            </div>
            <span>{source}</span>
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
          disabled={!selectedSource}
          className={`bg-[#64748c] text-white px-4 py-2 rounded-md shadow-sm ${
            selectedSource ? "hover:bg-gray-700" : "opacity-50 cursor-not-allowed"
          }`}
        >
          Finish
        </button>
      </div>
    </div>
  );
}


export default SourceStep