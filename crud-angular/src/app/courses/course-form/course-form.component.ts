import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  onSubmit() {
    console.log('OnSubmit');

  }

  onCancel() {
    console.log('OnCancel');
  }

  onBack() {
    this.router.navigate(['courses'])
  }

}
