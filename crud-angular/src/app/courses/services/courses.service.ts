import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from './../model/course';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Course[]>(this.API)
      .pipe(
        // first() => Interessado em receber apenas a primeira resposta do servidor,
        first(),
        // delay(1000),
        // o tap serve par mostrar o que foi enviado pelo pipe
        // tap(courses => console.log(courses)
      )
      ;
  }

  save(record: Course) {
    console.log(record);
    return this.http.post<Course>(this.API, record);
  }

  update(updated: any) {
    return this.http.put<Course>(this.API + `/course/${updated.id}`, updated);
  }

  delete(obj: any) {
    return this.http.delete<any>(this.API + "/course/" + obj.id);
  }

  getone(name: any) {
    return this.http.get<Course>(this.API + "/course/name/" + name);
    // .pipe(tap(result => console.log(result)));
    // return this.http.get<Course>(this.API + "/course/name/" + name);
  }
}
