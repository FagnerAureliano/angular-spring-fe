import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CoursesService } from '../service/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form: FormGroup = this.fb.group({
    // _id:[null],
    name: [null],
    category: [null],
  });
  constructor(
    private fb: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar, private location: Location
  ) {}

  onCancel() {
   this.location.back();
  }
  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: () => {
        this.onSuccess(), this.onCancel()
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
