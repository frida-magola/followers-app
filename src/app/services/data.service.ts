import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

/**
 * Reusable data service
 */
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  getAll() {
    return this.http.get(this.url, {
      // reportProgress: boolean,
      responseType: 'json',
      // withCredentials?: boolean
    });
    // .pipe(
    //   map((response) => response.toString())
    //   // catchError(this.handleError)
    // );
  }

  // tslint:disable-next-line: typedef
  create(resource) {
    // return Observable.throw(new AppError()); //Pessimistic
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  // tslint:disable-next-line: typedef
  update(resource) {
    return this.http
      .patch(`${this.url}/${resource.id}`, JSON.stringify({ isRead: true }))
      .pipe(
        // map((response) => response),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line: typedef
  findBy(id) {
    return this.http.get(`${this.url}/${id}`).pipe(
      // map((response) => response),
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line: typedef
  delete(id) {
    // return Observable.throw(new AppError()); //Pessimistic
    return this.http.delete(`${this.url}/${id}`).pipe(
      map((response) => response),
      retry(3),
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line: typedef
  private handleError(error: Response) {
    if (error.status === 400) {
      // tslint:disable-next-line: deprecation
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404) {
      // tslint:disable-next-line: deprecation
      return Observable.throw(new NotFoundError());
    }
    // tslint:disable-next-line: deprecation
    return Observable.throw(new AppError(error));
  }
}
