import { configureStore } from '@reduxjs/toolkit'

import gitUsersSlice from './slices/gitUsersSlice.js';

const reducer = {
    gitUsersReducer: gitUsersSlice
}

const store = configureStore({ reducer: reducer });

export default store;