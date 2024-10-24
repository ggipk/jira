import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface userSliceState {
  user: {
    id: number;
    email: string;
    access_token: string;
    refresh_token: string;
  };
}
const initialState: userSliceState = {
  user: {
    id: 0,
    email: "",
    access_token: "",
    refresh_token: "",
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
