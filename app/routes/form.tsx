import { useState } from "react";
import WelcomeStep from "../components/form/WelcomeStep";
import RoleStep from "../components/form/RoleStep";
import CompanySizeStep from "../components/form/CompanySizeStep";
import SourceStep from "../components/form/SourceStep";
import CompletionStep from "../components/form/CompletionStep";
import FormSummary from "../components/form/FormSummary";

function form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    role: "",
    companySize: "",
    source: "",
  });

  const steps = [
    { id: 0, name: "Welcome" },
    { id: 1, name: "Role" },
    { id: 2, name: "Company Size" },
    { id: 3, name: "Source" },
    { id: 4, name: "Completed" },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep onNext={handleNext} />;
      case 1:
        return (
          <RoleStep
            onNext={handleNext}
            selectedRole={formData.role}
            onSelectRole={(role) => updateFormData("role", role)}
          />
        );
      case 2:
        return (
          <CompanySizeStep
            onNext={handleNext}
            onBack={handleBack}
            selectedSize={formData.companySize}
            onSelectSize={(size) => updateFormData("companySize", size)}
          />
        );
      case 3:
        return (
          <SourceStep
            onNext={handleNext}
            onBack={handleBack}
            selectedSource={formData.source}
            onSelectSource={(source) => updateFormData("source", source)}
          />
        );
      case 4:
        return <CompletionStep />;
      default:
        return <WelcomeStep onNext={handleNext} />;
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {renderStep()}

      {currentStep === 4 && <FormSummary formData={formData} />}
    </div>
  );
}

export default form;
