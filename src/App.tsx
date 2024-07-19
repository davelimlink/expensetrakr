import React, { useState } from "react";
import ExpenseList from "./components/expense-tracker/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  return (
    <div>
      <ExpenseList expense={expenses} onDelete={(id) => console.log(id)} />
    </div>
  );
};

export default App;