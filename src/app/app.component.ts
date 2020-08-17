import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My first App';
  categoryCourse;
  courses = [
    {
      id: 1,
      title: 'Math',
      teacher: 'Nyira Mwalila',
      release: 2020,
    },
    {
      id: 2,
      title: 'Physic',
      teacher: 'Mwalila',
      release: 2019,
    },
  ];

  viewMode = 'map';

  onFavoriteChange(): void {
    console.log('Favorite Changed!');
  }

  onAdd(): void {
    this.courses.push({
      id: 3,
      title: 'French',
      teacher: 'Vigne',
      release: 2017,
    });
  }

  onRemove(course): void {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses(): void {
    this.categoryCourse = [
      {
        id: 1,
        title: 'Development',
        teacher: 'Nyira Mwalila',
        release: 2020,
      },
      {
        id: 2,
        title: 'Web Design',
        teacher: 'Mwalila',
        release: 2019,
      },
    ];
  }

  // track category courses by their ID
  trackCategoryCourse(index, category): void {
    return category ? category.id : undefined;
  }
}
