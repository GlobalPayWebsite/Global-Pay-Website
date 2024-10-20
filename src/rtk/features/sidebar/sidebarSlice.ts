import { createSlice } from '@reduxjs/toolkit'

export interface SidebarState {
  isSidebarOpen: boolean
}

const initialState: SidebarState = {
    isSidebarOpen: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
        state.isSidebarOpen = state.isSidebarOpen ? false : true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer