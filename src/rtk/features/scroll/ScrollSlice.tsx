import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ScrollState {
  isScroll: boolean
}

const initialState: ScrollState = {
    isScroll: false,
}

export const scrollSlice = createSlice({
  name: 'scrollpage',
  initialState,
  reducers: {
    updateScrollBar: (state,action: PayloadAction<boolean>) => {
        state.isScroll = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateScrollBar } = scrollSlice.actions

export default scrollSlice.reducer