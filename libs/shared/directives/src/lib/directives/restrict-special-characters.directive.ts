import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[restrictSpecialCharacters]',
  standalone: true,
})
export class RestrictSpecialCharactersDirective {
  private specialCharacterRegex =
    /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F1E0}-\u{1F1FF}]/gu;

  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement) {
      const currentValue = inputElement.value;

      inputElement.value = currentValue.replace(this.specialCharacterRegex, '');
    }
  }
}
