import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "./app.state";
import { BookReducer } from "./books/book.reducer";



export const appReducer: ActionReducerMap<IAppState> = {
    book: BookReducer
}