import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/store/userSlice";

const store = configureStore({
  reducer: {
    userState: userSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
