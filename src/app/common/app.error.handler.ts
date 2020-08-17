import { ErrorHandler } from '@angular/core';
export class AppErrorHandler implements ErrorHandler {
  handleError(error): void {
    alert('Enexcepcted Error occured from the server');
    console.log(error);
  }
}
