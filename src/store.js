import { configureStore } from '@reduxjs/toolkit'

import githubSlice from './slices/githubSlice.js';

const reducer = {
    githubReducer: githubSlice
}

const store = configureStore({ reducer: reducer });

export default store;