import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Data {
    title: string;
    description: string;
    date: string;
    image: string;
}

export interface ModalState {
    isModalOpen: boolean
    data: Data | null;
}

const initialState: ModalState = {
    isModalOpen: false,
    data: null
}

export const popupModalSlice = createSlice({
    name: 'popupModal',
    initialState,
    reducers: {
        popupToggleModal: (state, action: PayloadAction<Data | null>) => {
            state.data = action.payload;
            state.isModalOpen = state.isModalOpen ? false : true;
        },
    },
})  

// Action creators are generated for each case reducer function
export const { popupToggleModal } = popupModalSlice.actions

export default popupModalSlice.reducer