import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ 'Title: ' + getTitle() }}</h2>
    <p>{{ getP() | summary: 30 }}</p>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <!---Pipe---->
    <ul>
      <li>{{ course.title | uppercase }}</li>
      <li>{{ course.rating | number: '1.2-2' }}</li>
      <li>{{ course.students | number }}</li>
      <li>{{ course.price | currency: 'R' }}</li>
      <li>{{ course.release | date: 'shortDate' }}</li>
    </ul>
    <div>
      <!---// <img src="{{ imageUrl }}" alt="placeholder" />
      // proprety binding-->
      <img [src]="imageUrl" alt="placeholder" />

      <!--Tabble using Binding-->
      <table>
        <td [attr.colspan]="colSpan">ghdggdsh</td>
      </table>
      <!---Event Binding & templaple variable--->
      <!---<input #email (keyup.enter)="onKeyUp(email.value)" />--->
      <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
      <!---Class binding AND Event binding--->
      <button
        class="btn btn-primary"
        [class.active]="isActive"
        (click)="onSave($event)"
      >
        Save
      </button>

      <!---Style binding--->
      <p [style.backgroundColor]="isActive ? 'red' : 'unset'">
        Style Binding in Angular JS
      </p>
    </div>
  `,
})
export class CoursesComponent {
  title = 'List of Course';
  courses;
  course;
  imageUrl = 'https://loremflickr.com/640/360';
  colSpan = 2;
  isActive = false;
  isFavorite = false;
  email = 'me@example.com';
  paragraph =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, beatae! Voluptate ut adipisci aliquid vitae voluptatibus officia illo ipsum tempora repudiandae, consequuntur, qui corporis maxime ad obcaecati itaque illum sed?';

  onKeyUp(): void {
    // if ($event.keyCode === 13 || $event.which === 13)
    // angular you don't need this
    // console.log('Enter was clicked and the value is: ' + $event.target.value); //1. get value
    console.log(this.email); // 2.get email value with templaple variable
  }

  onSave($event): void {
    $event.stopPropagation(); // to stop event bubling
    alert('the button was clicked!');
    console.log($event);
  }

  getTitle(): string {
    return this.title;
  }

  getP(): string {
    return this.paragraph;
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    this.course = service.getCourse();
  }
}
