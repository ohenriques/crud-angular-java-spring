import { CoursesService } from './courses/services/courses.service';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-angular';

  constructor(
    public coursesService: CoursesService
  ) { }


  onKey(nomeDoCurso: any) {
    try {
      this.coursesService.getone(nomeDoCurso.target.value).subscribe(
        pipe(
          res => {
            console.log(res);
          }
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

}
