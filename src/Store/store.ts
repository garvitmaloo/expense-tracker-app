import { configureStore, createSlice } from "@reduxjs/toolkit";

interface ExpenseDetails {
  id: number;
  date: string;
  title: string;
  amount: number;
  category: string;
}

const expenses: ExpenseDetails[] = [];

const expensesSlice = createSlice({
  name: "Expenses Slice",
  initialState: expenses,
  reducers: {
    addExpense(state, action) {
      state.unshift(action.payload);
    },
  },
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
export const expenseActions = expensesSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
