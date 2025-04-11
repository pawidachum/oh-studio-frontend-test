interface CompletionStepProps {
  formData: {
    role: string;
    companySize: string;
    source: string;
  };
}

function CompletionStep(formData: CompletionStepProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">
        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      
      <h2 className="text-xl font-bold mb-2">Thank you!</h2>
      <p className="text-gray-700">We appreciate your feedback.</p>
    </div>
  );
}

export default CompletionStep