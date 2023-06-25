import React, { useState } from "react";

type StepProgressBarProps = {
  steps: string[];
  currentStep: number;
};

const StepProgressBar: React.FC<StepProgressBarProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="flex items-center justify-between w-96">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-center ${
            index < currentStep ? "text-green-500" : "text-gray-500"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              index < currentStep ? "bg-green-500" : "bg-gray-500"
            }`}
          ></div>
          <span className="ml-2">{step}</span>
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps: string[] = ["Step 1", "Step 2", "Step 3"];

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <StepProgressBar steps={steps} currentStep={currentStep} />
      <div className="flex mt-4">
        <button
          className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handlePreviousStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
