import { Component } from '@angular/core';

import { Course } from '../model/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Course[] = [
    {
      _id: "1",
      name: "Introduction to Web Development",
      category: "Web Development"
    },
    {
      _id: "2",
      name: "Mobile App Development Fundamentals",
      category: "Mobile Development"
    },
    {
      _id: "3",
      name: "Data Structures and Algorithms in Python",
      category: "Python Development"
    },
    {
      _id: "4",
      name: "Full Stack Web Development",
      category: "Web Development"
    },
    {
      _id: "5",
      name: "Machine Learning for Beginners",
      category: "Data Science"
    }
  ];
  displayedColumns = ['name', 'category'];
}
