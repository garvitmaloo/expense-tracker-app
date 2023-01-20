import ExpenseLimitForm from "./Components/ExpenseLimitForm";
import { useAppSelector } from "./Hooks/hooks";

function App() {
  const expenseLimit = useAppSelector((state) => state.expenseLimit.limit);

  return (
    <>
      {expenseLimit === null && <ExpenseLimitForm />}
      <h1>Home Page</h1>
    </>
  );
}

export default App;
