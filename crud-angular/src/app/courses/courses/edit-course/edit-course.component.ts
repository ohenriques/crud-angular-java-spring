import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})


export class EditCourseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditCourseComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditClick() {
    console.log('onEditClick is clicked');
  }
}
