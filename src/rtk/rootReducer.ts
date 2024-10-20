import { combineReducers } from "@reduxjs/toolkit";
import MultilangSlice from "./features/multilang/MultilangSlice";
import sidebarSlice from "./features/sidebar/sidebarSlice";
import modalSlice from "./features/modal/modalSlice";
import popupModalSlice from "./features/modal/popupModalSlice";
import { scrollSlice } from "./features/scroll/ScrollSlice";

const rootReducer = combineReducers({
  sidebar: sidebarSlice,
  scrollpage: scrollSlice.reducer,
  modal: modalSlice,
  popupModal: popupModalSlice,
  language: MultilangSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
