import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [lastDroppedItemIndex, setLastDroppedItemIndex] = useState(null);

  // Load data from localStorage on initial render
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("rememberList")) || [];
    setItems(savedItems);
    setIsInitialized(true); // Set initialization flag after loading
  }, []);

  // Save data to localStorage whenever items change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("rememberList", JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addItem = () => {
    if (inputValue.trim() === "") {
      alert("Please enter an item!");
      return;
    }
    const newItem = { name: inputValue, bought: false };
    setItems([...items, newItem]);
    setInputValue("");
  };

  const markAsBought = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, bought: true } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
  };

  const handleDrop = (index) => {
    if (draggedItemIndex === null) return;

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(index, 0, draggedItem);
    setItems(updatedItems);

    setDraggedItemIndex(null);
    setLastDroppedItemIndex(index);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "10px auto",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div
        style={{
          gap: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "24px", margin: "0px" }}>To-Buy List</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter item"
            style={{
              width: "100%",
              padding: "8px",
              marginRight: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={addItem}
            style={{
              padding: "8px 16px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </div>
      <hr />
      <ul style={{ marginTop: "20px", listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              marginBottom: "8px",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor:
                draggedItemIndex === index
                  ? "#d3d3d3"
                  : lastDroppedItemIndex === index
                  ? "#d3d3d3"
                  : "#f9f9f9",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "grab",
            }}
          >
            <span
              style={{
                textDecoration: item.bought ? "line-through" : "none",
                color: item.bought ? "#999" : "#000",
              }}
            >
              {index + 1}. {item.name}
            </span>
            <div>
              {!item.bought && (
                <button
                  onClick={() => markAsBought(index)}
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Bought
                </button>
              )}
              <button
                onClick={() => removeItem(index)}
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
