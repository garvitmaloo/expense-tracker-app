import ExpenseLimitForm from "./Components/ExpenseLimitForm";
import { useAppSelector } from "./Hooks/hooks";
import Home from "./Layout/Home";

function App() {
  const expenseLimit = useAppSelector((state) => state.expenseLimit.limit);

  return (
    <>
      {expenseLimit === null && <ExpenseLimitForm />}
      <Home />
    </>
  );
}

export default App;
