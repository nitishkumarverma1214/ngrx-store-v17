import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AddBook, RemoveBook } from '../books/book.action';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { IAppState } from '../app.state';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books$: Observable<Book[]>;
  bookForm = this.formBuilder.group({
    id: ['', [Validators.required]],
    title: ['', [Validators.required]],
    author: ['', [Validators.required]]
  })
  constructor(private store: Store<IAppState>, private formBuilder: FormBuilder){
    this.books$ = this.store.pipe(select('book'))
  }

  onSubmit(){
    const newBook = this.bookForm.value;
    if(newBook){
      this.addBook(newBook.id as string,newBook.title as string, newBook.author as string);
      this.bookForm.reset();
    }
  }

  addBook(id: string, title: string, author: string ){
    this.store.dispatch(AddBook({id, title, author}));
  }

  removeBook(bookId: string){
    this.store.dispatch(RemoveBook({bookId}));
  }
}
