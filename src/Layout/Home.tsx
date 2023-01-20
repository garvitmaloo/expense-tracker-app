import classes from "./home.module.css";

const Home = () => {
  return (
    <main className={classes["main-container"]}>
      <aside>
        <h2>Add New Expense</h2>

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
      </aside>
      <section>
        <h2>Nothing to show</h2>
      </section>
    </main>
  );
};

export default Home;
