import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})
export class FormFieldDirective {

  constructor(elemento: ElementRef) {

    let campo:HTMLInputElement = elemento.nativeElement;

    campo.id = campo.name;
    campo.placeholder = ' ';
    campo.classList.add('mdl-textfield__input');

  }

}
