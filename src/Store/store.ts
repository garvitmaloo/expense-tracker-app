import { configureStore, createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "Expenses Slice",
  initialState: { expenses: [] },
  reducers: {},
});

const expenseLimitSlice = createSlice({
  name: "Expense Limit",
  initialState: { limit: null },
  reducers: {
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
    expenseLimit: expenseLimitSlice.reducer,
  },
});

export const expenseLimitActions = expenseLimitSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
