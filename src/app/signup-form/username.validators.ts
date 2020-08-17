import { AbstractControl, ValidationErrors } from '@angular/forms';
export class UsernameValidators {
  // username cannot contain space
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      // there is a space in the value
      return {
        // minLength: {
        //   requiredLength: 10,
        //   actualLength: control.value.length,
        // },
        cannotContainSpace: true,
      };
    } else {
      return null;
    }
  }

  // username should be unique
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    // asynchronous
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'nyira') {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
