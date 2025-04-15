import { createSlice } from '@reduxjs/toolkit';

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {
    results: []
  },
  reducers: {
    searchResults: (state, action) => {
      state.results = action.payload;
    }
  }
})

export const {searchResults} = searchResultsSlice.actions;
export default searchResultsSlice.reducer;