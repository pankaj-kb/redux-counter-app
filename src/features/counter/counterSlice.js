const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // action => action.TYPE, action.payload
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
    decrementByValue: (state, action) => {
      state.value -= action.payload;
    },
    resetValue: (state) => {
        state.value = 0;
    }
  },
});

export const { increment, decrement, incrementByValue, decrementByValue, resetValue } = counterSlice.actions;

export default counterSlice.reducer;
