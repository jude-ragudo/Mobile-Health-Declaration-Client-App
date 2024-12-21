import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available globally
})
export class HealthInfoStepProgressService {
  private currentStep = 1;

  setCurrentStep(step: number) {
    this.currentStep = step;
  }

  getCurrentStep() {
    return this.currentStep;
  }
}