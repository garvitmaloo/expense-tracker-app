import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface ExpenseDetails {
  id: string;
  date: string;
  title: string;
  amount: number;
  category: string;
}

const expenses: ExpenseDetails[] = [];

const expensesSlice = createSlice({
  name: "Expenses Slice",
  initialState: { expenses, totalExpenseAmount: 0 },
  reducers: {
    addExpense(state, action) {
      state.expenses.unshift(action.payload);
      state.totalExpenseAmount += +action.payload.amount;
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
