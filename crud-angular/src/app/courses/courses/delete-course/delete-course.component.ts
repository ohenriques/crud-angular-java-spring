import { CoursesService } from './../../services/courses.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.scss']
})
export class DeleteCourseComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DeleteCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private service: CoursesService,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      category: [''],
      id: [this.data.course._id]
    });
    this.form.controls['name'].setValue(this.data.course.name);
    this.form.controls['category'].setValue(this.data.course.category);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.delete(this.form.value)
      .subscribe(data => this.onSuccess(), error => this.onError());

    console.log(this.form.value);// pegando todas as informações do formulário
  }

  justBackToPage() {
    this.onNoClick();
  }


  onSuccess() {
    this._snackBar.open('Curso deletado com sucesso', 'Close', { duration: 3000 });
    this.onNoClick();
  }

  onError() {
    this._snackBar.open('error ao salvar curso', 'Close', { duration: 3000 });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
