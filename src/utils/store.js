import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import searchReducer from './searchSlice';
import searchResultsReducer from './searchResultsSlice'
import chatReducer from './chatSlice'

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    searchResults: searchResultsReducer,
    chat: chatReducer
  }
})

export default store;