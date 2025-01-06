import { FormGroup } from '@angular/forms';

export class FormValidator {
  static intValidator(validationMessages: { [key: string]: { [key: string]: string } }): ErrorMessageProcessor {
    return new ErrorMessageProcessor(validationMessages);
  }
}

export class ErrorMessageProcessor {
  constructor(private validationMessages: { [key: string]: { [key: string]: string } }) {}

  processMessages(form: FormGroup): { [key: string]: string } {
    const messages: { [key: string]: string } = {};

    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);

      if (control && control.invalid && (control.dirty || control.touched)) {
        messages[field] = '';
        const controlErrors = control.errors;

        if (controlErrors) {
          Object.keys(controlErrors).forEach((key) => {
            if (this.validationMessages[field]?.[key]) {
              messages[field] = this.validationMessages[field][key];
            }
          });
        }
      }
    });

    return messages;
  }
}
