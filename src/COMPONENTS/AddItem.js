import React, { useState } from 'react';
import './AddItem.css'; // Ensure the CSS file is named correctly

function AddItem({ addItem }) {
  const [itemID, setItemID] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ id: itemID, name: itemName, quantity, price, category });
    alert('Item added successfully!');
    setItemID('');
    setItemName('');
    setQuantity('');
    setPrice('');
    setCategory('');
  };

  return (
    <div className="add-item-container"> {/* Add this wrapper div */}
    <h2>ADD ITEM</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Item ID" 
          value={itemID} 
          onChange={(e) => setItemID(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Name" 
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required
        >
          <option value="">Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
