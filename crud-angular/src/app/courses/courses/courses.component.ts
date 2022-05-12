import { Component, OnInit, Pipe } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  // coursesService: CoursesService;

  constructor(
    public dialog: MatDialog,
    private coursesService: CoursesService,
    private router: Router,
    // para pegar a rota ativa
    private route: ActivatedRoute
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
    // TODO document why this method 'ngOnInit' is empty

  }

  onAdd() {
    // passando o path completo
    // this.router.navigate(['courses/new']);
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onDelete() {
    console.log('passando no delete');
    console.log(this.courses$);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditCourseComponent, {
      width: '80%', height: 'auto', hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
