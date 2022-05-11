import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // coursesService: CoursesService;

  constructor(
    public dialog: MatDialog,
    private coursesService: CoursesService
  ) {
    // pode ser inicializado dentro do contructor/ngOnInit também
    // this.courses = [];
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          console.log(error);
          this.onError('Erro ao carregar os cursos.');
          return of([]);
        })
      );

    // this.coursesService = new CoursesService();
    // this.courses = this.coursesService.list();
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
