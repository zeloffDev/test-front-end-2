import { defaultValue } from "@/utils/constants";
import { createSlice } from "@reduxjs/toolkit";

export type genenral = {
  Campaign: string;
  Title?: string;
  Description?: string;
};

export type data = {
  Id: string;
  Discount?: string;
  Title?: string;
  Subtitle?: string;
  Label?: string;
  Quantity?: number;
  Amount?: number | null;
};

interface StoreState {
  genenral: genenral;
  data: data[];
}

const initialState: StoreState = {
  genenral: {} as genenral,
  data: defaultValue,
};

const StoreSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setGenenral: (state, action) => {
      state.genenral = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setGenenral, setData } = StoreSlice.actions;
export default StoreSlice.reducer;
