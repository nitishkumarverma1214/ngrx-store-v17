import { createReducer, on } from "@ngrx/store";
import { Book } from "../models/book";
import { AddBook, AddBookError, AddBookSuccess, RemoveBook } from "./book.action";

const initialState: Array<Book> = []
export const BookReducer = createReducer(initialState,
    on(AddBook, (state)=> state),
    on(AddBookSuccess, (state, {id, title, author})=> [...state, {id, title, author}]),
    on(AddBookError, (state, {error})=>{
        console.error(error)
        return state;
    }),
    on(RemoveBook, (state, {bookId})=> state.filter(book => book.id !== bookId))
)