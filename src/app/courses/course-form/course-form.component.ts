import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form: FormGroup = this.fb.group({
    // _id:[null],
    name: [null],
    category: [null],
  });
  constructor(private fb: FormBuilder) { }

  onCancel() { }
  onSubmit() {

  }
}
