import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, pipe } from "rxjs";
import * as bookActions from "./book.action"
import { BookService } from "../service/book.service";

@Injectable()
export class BookEffects{


    constructor(
        private actions$: Actions, 
        private bookService: BookService
    ){}

    addBook$ = createEffect(()=> this.actions$.pipe(
        ofType(bookActions.AddBook),
        mergeMap((action) => this.bookService.addBook(action)
        .pipe(
            map(book => bookActions.AddBookSuccess(book)),
            catchError((error)=> of(bookActions.AddBookError({error})))
        ))
    ))
}