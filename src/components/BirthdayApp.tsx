import { useState, useCallback } from "react";
import { Step1Landing } from "./steps/Step1Landing";
import { Step2Question } from "./steps/Step2Question";
import { Step3Celebration } from "./steps/Step3Celebration";
import { Step4Message } from "./steps/Step4Message";
import { Step5Gallery } from "./steps/Step5Gallery";
import { Step6Finale } from "./steps/Step6Finale";
import { ProgressDots } from "./ui/ProgressDots";
import { birthdayConfig } from "@/config/birthdayConfig";

const TOTAL_STEPS = 6;

/**
 * BirthdayApp - Main container component for the interactive birthday experience
 * 
 * Architecture:
 * - Uses a step-based state machine to control the flow
 * - Each step is a separate component for maintainability
 * - Smooth transitions between steps using CSS animations
 * - Configuration driven through birthdayConfig.ts
 * 
 * Step Flow:
 * 1. Landing - Welcome screen with floating hearts
 * 2. Question - Interactive "Yes/No" with dodging button
 * 3. Celebration - Confetti, cake, and music toggle
 * 4. Message - Heartfelt message with typing animation
 * 5. Gallery - Photo grid with lightbox
 * 6. Finale - Curtain reveal with final message
 */
export const BirthdayApp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * Navigate to the next step with smooth transition
   */
  const goToNextStep = useCallback(() => {
    if (isTransitioning || currentStep >= TOTAL_STEPS - 1) return;

    setIsTransitioning(true);
    
    // Add a brief delay for transition effect
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
      setIsTransitioning(false);
    }, birthdayConfig.animations.stepTransition / 2);
  }, [currentStep, isTransitioning]);

  /**
   * Navigate to a specific step (for progress dots)
   * Only allows going to already visited steps
   */
  const goToStep = useCallback((step: number) => {
    if (isTransitioning || step > currentStep || step < 0) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(step);
      setIsTransitioning(false);
    }, birthdayConfig.animations.stepTransition / 2);
  }, [currentStep, isTransitioning]);

  /**
   * Render the current step component
   */
  const renderStep = () => {
    const stepProps = { onNext: goToNextStep };

    switch (currentStep) {
      case 0:
        return <Step1Landing {...stepProps} />;
      case 1:
        return <Step2Question {...stepProps} />;
      case 2:
        return <Step3Celebration {...stepProps} />;
      case 3:
        return <Step4Message {...stepProps} />;
      case 4:
        return <Step5Gallery {...stepProps} />;
      case 5:
        return <Step6Finale />;
      default:
        return <Step1Landing {...stepProps} />;
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Main step content with transition */}
      <div
        className={`transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {renderStep()}
      </div>

      {/* Progress indicator - shown after first step, hidden on finale */}
      {currentStep > 0 && currentStep < TOTAL_STEPS - 1 && (
        <ProgressDots
          total={TOTAL_STEPS}
          current={currentStep}
          onDotClick={goToStep}
        />
      )}
    </div>
  );
};
