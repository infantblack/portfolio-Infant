import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { 
    darkMode: false,
    isDark: false,
    animationsEnabled: true
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;