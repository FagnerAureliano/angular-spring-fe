import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() exclude = new EventEmitter(false);
  readonly displayedColumns = ['name', 'category', 'actions'];

  handleAdd() {
    this.add.emit(true);
  }
  handleEdit(course: Course) {
    this.edit.emit(course);
  }
  handleExclude(course: Course) {
    this.exclude.emit(course);
  }
}
