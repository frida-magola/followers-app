import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  form = new FormGroup({
    // username: new FormControl('', Validators.required), //single validation
    // password: new FormControl('', Validators.required), //single validation

    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.shouldBeUnique,
      ]), // single validation
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]), // single validation
    }),
    comment: new FormControl(),
    topics: new FormArray([]),
    contact: new FormGroup({
      email: new FormControl({}),
      phone: new FormControl({}),
    }),
  });

  // form builder
  constructor(fb: FormBuilder) {
    // clear the initial form with the form builder
    this.form = fb.group({
      account: fb.group({
        username: [],
        password: [],
      }),
      comment: ['', Validators.required],
      topics: fb.array([]),
      contact: fb.group({
        email: ['', Validators.required],
        phone: ['', Validators.required],
      }),
    });
  }

  addTopic(topic: HTMLInputElement): void {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  // tslint:disable-next-line: typedef
  get username() {
    return this.form.get('account.username');
  }

  // tslint:disable-next-line: typedef
  get password() {
    return this.form.get('account.password');
  }

  // tslint:disable-next-line: typedef
  get comment() {
    return this.form.get('comment');
  }

  // tslint:disable-next-line: typedef
  get topics() {
    return this.form.get('topics') as FormArray;
  }

  login(): void {
    this.form.setErrors({
      invalidLogin: true,
    });
    console.log(this.form);
    // let isValid = authService.login(this.form.value);

    // if (!isValid) {
    //   //set error to the individual inputs
    //   // this.username.setErrors

    //   //set errors a the form level
    //   this.form.errors({
    //     invalidLogin: true,
    //   });
    // }
  }

  removeTopic(topic: FormControl): void {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
