import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book){
    return of(book);
    //  const error = new Error('error while adding the book')
    //  return throwError(()=> error)
    
  }

  removeBook(bookId: string){

  }
}
