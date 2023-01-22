import React, { useRef } from "react";
import classes from "./Styles/filter-form.module.css";

const FilterForm: React.FC<{ onSubmit: (filterValue: string) => void }> = (
  props
) => {
  const filterValueRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (Event: React.FormEvent) => {
    Event.preventDefault();

    props.onSubmit(filterValueRef.current!.value);
  };

  return (
    <form className={classes["filter-form"]} onSubmit={submitHandler}>
      <label htmlFor="filter">See expenses in category -</label>

      <select name="filter" id="filter" ref={filterValueRef}>
        <option value="all">All</option>
        <option value="Books and Stationary">Books and Stationary</option>
        <option value="Food and Travel">Food and Travel</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Grooming and Shopping">Grooming and Shopping</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>

      <button type="submit">Apply Filter</button>
    </form>
  );
};

export default FilterForm;
