import { AbstractControl } from '@angular/forms';


export function overDraftProtectionValidator(value: number) {
  return (control: AbstractControl) => {

    if (value - control.value < -500) {
      return { overdraftProtection: true };
    }
    return null;
  };
}
