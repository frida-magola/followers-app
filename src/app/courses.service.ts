export class CoursesService {
  getCourses(): string[] {
    return ['course1', 'course2', 'course3', 'course4'];
  }
  getCourse(): {} {
    return {
      title: 'The complete Angular COurse',
      rating: 4.99999,
      students: 342345,
      price: 190.3,
      release: new Date(),
    };
  }
}
