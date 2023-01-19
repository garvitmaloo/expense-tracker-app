import { configureStore, createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "Expenses Slice",
  initialState: { expenses: [] },
  reducers: {},
});

const expenseLimitSlice = createSlice({
  name: "Expense Limit",
  initialState: { limit: null },
  reducers: {},
});

const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
    expenseLimit: expenseLimitSlice.reducer,
  },
});

export default store;
