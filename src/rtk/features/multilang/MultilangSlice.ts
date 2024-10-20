import { createSlice } from "@reduxjs/toolkit";

interface MultlangType {
    currentLanguage: "en" | "jp";
}
const initialState: MultlangType = {
    currentLanguage: "en"
};

const multiLanguageSlice = createSlice({
    name: "multiLanguageSlice",
    initialState,
    reducers: {
        changeLanguage: (state, { payload }: { payload: "en" | "jp" }) => {
            state.currentLanguage = payload;
        },
    },

});

export const { changeLanguage } = multiLanguageSlice.actions;
export default multiLanguageSlice.reducer;
