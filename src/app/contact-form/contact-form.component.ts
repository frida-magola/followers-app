import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor() {}

  contactMethods = [
    {
      id: 1,
      name: 'E-mail',
    },
    {
      id: 2,
      name: 'Phone',
    },
  ];

  log(x): void {
    console.log(x);
  }
  Submit(f: HTMLInputElement): void {
    // tslint:disable-next-line: no-unused-expression
    f.value;
    console.log(f);
  }
}
