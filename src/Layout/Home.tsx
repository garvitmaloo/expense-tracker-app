import ExpenseDetailsForm from "../Components/ExpenseDetailsForm";
import classes from "./home.module.css";
import { useAppSelector } from "../Hooks/hooks";

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
        <h2>Nothing to show</h2>
      </section>
    </main>
  );
};

export default Home;
