import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  NonNullableFormBuilder,
  UntypedFormArray,
  Validators,
} from '@angular/forms';

import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course.interface';
import { CoursesService } from '../../service/courses.service';
import { Lesson } from '../../model/lesson.interface';

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
    private fb: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
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
      lessons: this.fb.array(this.retrieveLessons(this.course)),
    });
    // this.form.setValue(this.course);
    console.log(this.form.value);
  }
  getLessonsFormArray() {
    return (<UntypedFormArray>this.form.get('lessons')).controls;
  }
  private retrieveLessons(course: Course) {
    const lessons = [];
    if (course?.lessons) {
      course.lessons.forEach((lesson) => lessons.push(lesson));
    } else {
      lessons.push(this.createLesson());
    }
    return lessons;
  }
  private createLesson(lesson: Lesson = { id: '', name: '', youtubeUrl: '' }) {
    return this.fb.group({
      id: [lesson.id],
      name: [lesson.name],
      youtubeUrl: [lesson.youtubeUrl],
    });
  }
  onCancel() {
    this.location.back();
  }
  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: () => {
        this.onSuccess(), this.onCancel();
      },
      error: () => this.onError(),
    });
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
  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);
    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }
    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors
        ? field.errors['minlength']['requiredLength']
        : 4;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }
    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors
        ? field.errors['maxlength']['requiredLength']
        : 100;
      return `Tamanho máximo precisa ser de ${requiredLength} caracteres.`;
    }
    return 'Campo invalido';
  }
}
