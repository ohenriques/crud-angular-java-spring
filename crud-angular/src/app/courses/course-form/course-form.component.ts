import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from './../services/courses.service';

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
    private service: CoursesService,
    private activatedRouter: ActivatedRoute,
    private _snackBar: MatSnackBar
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
    this.service.save(this.form.value)
      .subscribe(data => console.log(data), error => this.onError());

    // console.log(this.form.value);// pegando todas as informações do formulário
  }

  onCancel() {
    console.log('OnCancel');
  }

  onBack() {
    this.router.navigate(['courses'])
  }

  onError() {
    this._snackBar.open('error ao salvar curso', 'Close', { duration: 3000 });
  }

}
