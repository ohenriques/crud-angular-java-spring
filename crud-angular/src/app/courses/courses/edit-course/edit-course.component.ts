import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from './../../services/courses.service';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})


export class EditCourseComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: CoursesService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,

  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      id: [this.data.course._id]
    });
    this.form.controls['name'].setValue(this.data.course.name);
    this.form.controls['category'].setValue(this.data.course.category);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.update(this.form.value)
      .subscribe(data => this.onSuccess(), error => this.onError());
  }

  onSuccess() {
    this._snackBar.open('Categoria Salva com sucesso', 'Close', { duration: 3000 });
    this.onNoClick();
  }

  onError() {
    this._snackBar.open('error ao salvar curso', 'Close', { duration: 3000 });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
