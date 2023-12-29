import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  NonNullableFormBuilder,
  UntypedFormArray,
  Validators,
} from '@angular/forms';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Course } from '../../model/course.interface';
import { Lesson } from '../../model/lesson.interface';
import { CoursesService } from '../../service/courses.service';
import { FormUtilsService } from 'src/shared/services/form-utils.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form!: FormGroup;
  // form = this.fb.group({
  //   _id: [''],
  //   name: [
  //     '',
  //     [Validators.required, Validators.minLength(4), Validators.maxLength(100)],
  //   ],
  //   category: ['', [Validators.required]],
  // });
  course!: Course;

  constructor(
    public formUtils: FormUtilsService,
    private fb: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location,
  ) {
    this.course = this.route.snapshot.data['course'];
    // this.route.data.subscribe((data: any) => {
    //   this.course = data.course;
    // });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      _id: [this.course._id],
      name: [
        this.course.name,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100),
        ],
      ],
      category: [this.course.category, [Validators.required]],
      lessons: this.fb.array(this.retrieveLessons(this.course), Validators.required),
    });
    // this.form.setValue(this.course);
  }
  getLessonsFormArray() {
    return (<FormArray>this.form.get('lessons')).controls;
  }
  addNewLesson(): void {
    const lessons = this.form.get('lessons') as UntypedFormArray;
    lessons.push(this.createLesson());
  }
  removeLesson(index: number): void {
    const lessons = this.form.get('lessons') as UntypedFormArray;
    lessons.removeAt(index);
  }
  private retrieveLessons(course: Course) {
    const lessons = [];
    if (course?.lessons) {
      course.lessons.forEach((lesson) =>
        lessons.push(this.createLesson(lesson))
      );
    } else {
      lessons.push(this.createLesson());
    }
    return lessons;
  }
  private createLesson(lesson: Lesson = { id: '', name: '', youtubeUrl: '' }) {
    return this.fb.group({
      id: [lesson.id],
      name: [
        lesson.name,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      youtubeUrl: [
        lesson.youtubeUrl,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
        ],
      ],
    });
  }
  onCancel() {
    this.location.back();
  }
  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe({
        next: () => {
          this.onSuccess(), this.onCancel();
        },
        error: () => this.onError(),
      });
    } else {
     this.formUtils.validateAllFormField(this.form)
    }
  }
  onError() {
    this._snackBar.open('Error on save course.', 'OK', {
      duration: 3000,
    });
  }

  onSuccess() {
    this._snackBar.open('Course successful saved.', 'OK', {
      duration: 3000,
    });
  }

}
