
import { useState } from "react";

export default function ExpenseTracker(params) {
    
    const [expenses, setExpenses] = useState([
    { id: 1, title: "Groceries", amount: 450, category: "Food" },
    { id: 2, title: "Gas", amount: 1200, category: "Transport" },
    ]);


  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");


 const handleAddExpense = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(), 
      title: title,
      amount: parseFloat(amount), 
      category: category,
    };

    // Update state by spreading the existing array and appending the new object
    setExpenses([...expenses, newExpense]);

    // Reset input fields
    setTitle("");
    setAmount("");
  };



    const handleDeleteExpense = (id) => {
    // Filter out the item with the matching ID
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };


  // 4. Calculate total using array.reduce()
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);



  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
        <h2 className="text-center fw-bold mb-4 text-dark">💰 Expense Tracker</h2>

        {/* Display Total Balance */}
        <div className="bg-light text-center py-3 rounded-3 mb-4 border">
          <span className="text-muted text-uppercase small fw-semibold d-block">Total Spend</span>
          <span className="fs-2 fw-bold text-primary">₹{totalExpenses.toFixed(2)}</span>
        </div>

        {/* Expense Input Form */}
        <form onSubmit={handleAddExpense} className="row g-2 mb-4">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Expense title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Food">🍔 Food</option>
              <option value="Transport">🚗 Transport</option>
              <option value="Entertainment">🎬 Entertainment</option>
              <option value="Utilities">💡 Utilities</option>
            </select>
          </div>
          <div className="col-12 mt-2">
            <button type="submit" className="btn btn-primary w-100 fw-semibold rounded-3">
              ➕ Add Expense
            </button>
          </div>
        </form>

        {/* Expense Display List */}
        <h5 className="fw-bold mb-3 text-secondary">History</h5>
        {expenses.length === 0 ? (
          <p className="text-muted text-center my-3 small">No expenses added yet.</p>
        ) : (
          <ul className="list-group list-group-flush border-top">
            {expenses.map((expense) => (
              <li
                key={expense.id}
                className="list-group-item d-flex justify-content-between align-items-center px-0 py-3"
              >
                <div>
                  <span className="fw-semibold text-dark d-block">{expense.title}</span>
                  <span className="badge bg-secondary-subtle text-secondary small-xs">
                    {expense.category}
                  </span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="fw-bold text-danger">-₹{expense.amount.toFixed(2)}</span>
                  <button
                    onClick={() => handleDeleteExpense(expense.id)}
                    className="btn btn-outline-danger btn-sm rounded-circle py-1 px-2 border-0"
                    title="Delete item"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


