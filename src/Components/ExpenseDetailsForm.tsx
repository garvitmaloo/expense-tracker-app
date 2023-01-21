import classes from "./Styles/expense-details-form.module.css";

const ExpenseDetailsForm = () => {
  return (
    <form className={classes["new-expense-form"]}>
      <input type="text" required placeholder="Enter expense amount" />
      <input type="text" required placeholder="Enter expense title" />
      <select required name="exp-category" id="exp-category">
        <option selected>Select a category</option>
        <option value="books-and-stationary">Books and Stationary</option>
        <option value="food-and-travel">Food and travel</option>
        <option value="entertainment">Entertainment</option>
        <option value="grooming-and-shopping">Shopping and Grooming</option>
        <option value="miscellaneous">Miscellaneous</option>
      </select>

      <button type="submit">Enter Expense</button>
    </form>
  );
};

export default ExpenseDetailsForm;
