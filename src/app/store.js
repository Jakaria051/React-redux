import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import posrReducer from "../features/posts/postSlice";
const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: posrReducer,
    }
});

export default store;