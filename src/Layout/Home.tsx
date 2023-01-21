import ExpenseDetailsForm from "../Components/ExpenseDetailsForm";
import classes from "./home.module.css";
import { useAppSelector } from "../Hooks/hooks";
import ExpensesCard from "../Components/ExpensesCard";

const Home = () => {
  const expenses = useAppSelector((state) => state.expenses);
  console.log(expenses);

  return (
    <main className={classes["main-container"]}>
      <aside>
        <h2>Add New Expense</h2>

        <ExpenseDetailsForm />
      </aside>
      <section>
        <ExpensesCard />
        <ExpensesCard />
        <ExpensesCard />
      </section>
    </main>
  );
};

export default Home;
