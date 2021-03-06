import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorProcessorService {
  constructor() {}

  public handleError(error: HttpErrorResponse | any) {
    let errMsg = '';

    if (error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} : ${error.statusText || ' '} -- ${
        error.message
      }`;
    }

    return throwError(errMsg);
  }
}
