import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
// import posrReducer from "../features/posts/postSlice";
import booksReducer from "../features/book/booksSlice";

const store = configureStore({
    reducer: {
        // counter: counterReducer,
        // posts: posrReducer,
        booksReducer: booksReducer,

    }
});

export default store;
