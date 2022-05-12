import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    private location: Location,
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
      .subscribe(data => this.onSuccess(), error => this.onError());

    // console.log(this.form.value);// pegando todas as informações do formulário
  }

  onBack() {
    this.router.navigate(['courses'])
  }

  onCancel() {
    this.location.back();
  }

  onSuccess() {
    this._snackBar.open('Categoria Salva com sucesso', 'Close', { duration: 3000 });
    this.onBack();
  }
  onError() {
    this._snackBar.open('error ao salvar curso', 'Close', { duration: 3000 });
  }

}
