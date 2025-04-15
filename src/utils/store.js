import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import searchReducer from './searchSlice';
import searchResultsReducer from './searchResultsSlice'

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    searchResults: searchResultsReducer,
  }
})

export default store;