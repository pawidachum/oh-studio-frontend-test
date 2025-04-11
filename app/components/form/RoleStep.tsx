interface RoleStepProps {
  onNext: () => void;
  selectedRole: string;
  onSelectRole: (role: string) => void;
}

function RoleStep({ onNext, selectedRole, onSelectRole }: RoleStepProps) {
  const roles = [
    "Founder",
    "Executive",
    "Product Manager",
    "Product Owner",
    "Software Engineer",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">What is your role?</h2>
      <p className="text-[#64748c] mb-6">
        Please select one of the following options:
      </p>

      <div className="space-y-3 mb-6">
        {roles.map((role) => (
          <div
            key={role}
            className="flex items-center border border-gray-300 rounded-md p-3 cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={() => onSelectRole(role)}
          >
            <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center mr-3">
              {selectedRole === role && (
                <div className="h-3 w-3 rounded-full bg-gray-500"></div>
              )}
            </div>
            <span>{role}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onNext}
          disabled={!selectedRole}
          className={`bg-[#64748c] text-white px-4 py-2 rounded-md ${
            selectedRole ? "hover:bg-gray-700" : "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RoleStep;
