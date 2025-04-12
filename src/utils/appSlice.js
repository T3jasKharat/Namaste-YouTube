import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    openMenu: (state, action) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    }
  }
})

export const {toggleMenu, closeMenu, openMenu} = appSlice.actions;

export default appSlice.reducer;