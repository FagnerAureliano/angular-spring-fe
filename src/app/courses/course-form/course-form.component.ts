import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';

import { CoursesService } from '../service/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form = this.fb.group({
    name: [''],
    category: [''],
  });
  constructor(
    private fb: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit(): void {}

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
}
