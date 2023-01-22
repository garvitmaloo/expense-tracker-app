import ExpenseDetailsForm from "../Components/ExpenseDetailsForm";
import classes from "./home.module.css";
import { useAppSelector } from "../Hooks/hooks";
import ExpensesCard from "../Components/ExpensesCard";

const Home = () => {
  const expensesState = useAppSelector((state) => state.expenses);
  const expenseLimit = useAppSelector((state) => state.expenseLimit);

  const remainingAmount =
    expenseLimit.limit && expenseLimit.limit - expensesState.totalExpenseAmount;

  return (
    <main className={classes["main-container"]}>
      <aside>
        <h2>Add New Expense</h2>
        <ExpenseDetailsForm />
        <br></br>
        <h3>Expense Limit: {expenseLimit.limit}</h3>
        <h3>Expenses this month: {expensesState.totalExpenseAmount}</h3>
        <h3>Remaining amount: {remainingAmount}</h3>
      </aside>
      <section>
        {expensesState.expenses.length > 0 &&
          expensesState.expenses.map((expense) => (
            <ExpensesCard key={expense.id} data={expense} />
          ))}
      </section>
    </main>
  );
};

export default Home;
