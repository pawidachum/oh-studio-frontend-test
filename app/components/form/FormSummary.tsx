interface FormSummaryProps {
  formData: {
    role: string;
    companySize: string;
    source: string;
  };
}

function FormSummary({ formData }: FormSummaryProps) {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4 gap-2">
        <div className="flex items-center justify-center">
          <i className="bx bx-check-circle text-3xl text-[#64748c]" />
        </div>
        <p className="text-lg font-medium">Welcome Card</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center">
          <div>
            <p className="text-lg text-gray-500">What is your role?</p>
            <p className="font-medium text-xl text-gray-700">{formData.role}</p>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <p className="text-lg text-gray-500">What's your company size?</p>
            <p className="font-medium text-xl text-gray-700">
              {formData.companySize}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <p className="text-lg text-gray-500">
              How did you hear about us first?
            </p>
            <p className="font-medium text-xl text-gray-700">
              {formData.source}
            </p>
          </div>
        </div>

        <div className="flex items-center mb-4 gap-2">
          <div className="flex items-center justify-center">
            <i className="bx bx-check-circle text-3xl text-[#64748c]" />
          </div>
          <p className="text-lg font-medium bg-gray-100 rounded-full px-3">
            Completed
          </p>
        </div>
        
      </div>
    </div>
  );
}
export default FormSummary;
