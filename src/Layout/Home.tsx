import { useState } from "react";

import ExpenseDetailsForm from "../Components/ExpenseDetailsForm";
import classes from "./home.module.css";
import { useAppSelector } from "../Hooks/hooks";
import ExpensesCard from "../Components/ExpensesCard";
import FilterForm from "../Components/FilterForm";

const Home = () => {
  const expensesState = useAppSelector((state) => state.expenses);
  const expenseLimit = useAppSelector((state) => state.expenseLimit);

  const [filteredExpenses, setFilteredExpenses] = useState(
    expensesState.expenses
  );
  const [filterValue, setFilterValue] = useState("all");

  const remainingAmount =
    expenseLimit.limit && expenseLimit.limit - expensesState.totalExpenseAmount;

  function submitHandler(filterValue: string) {
    if (filterValue === "all") {
      setFilterValue(filterValue);
      return;
    }

    setFilterValue(filterValue);
    const filteredExpenses = expensesState.expenses.filter(
      (expense) => expense.category === filterValue
    );
    setFilteredExpenses(filteredExpenses);
  }

  return (
    <main className={classes["main-container"]}>
      <aside>
        <h2>Add New Expense</h2>
        <ExpenseDetailsForm />
        <br />

        <FilterForm onSubmit={submitHandler} />
        <br />
        <br />

        <h3>Expense Limit: {expenseLimit.limit}</h3>
        <h3>Expenses this month: {expensesState.totalExpenseAmount}</h3>
        <h3>Remaining amount: {remainingAmount}</h3>

        {remainingAmount && remainingAmount < 0 && (
          <p>You have exceeded the monthly expense limit.</p>
        )}
      </aside>

      <section>
        {filterValue === "all" &&
          expensesState.expenses.map((expense) => (
            <ExpensesCard key={expense.id} data={expense} />
          ))}
        {filterValue !== "all" &&
          filteredExpenses.map((expense) => (
            <ExpensesCard key={expense.id} data={expense} />
          ))}
      </section>
    </main>
  );
};

export default Home;
