import React, { useState } from 'react';
import './styles/AddItem.css';

function AddItem({ addItem, existingItemIDs = [] }) {
  const [itemID, setItemID] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); 
    
    if (existingItemIDs.includes(itemID)) {
      setErrorMessage('Item ID already exists. Please use a different ID.');
      return;
    }

    if (quantity <= 0 || price <= 0) {
      setErrorMessage('Quantity and Price must be greater than zero.');
      return;
    }

    addItem({ id: itemID, name: itemName, quantity, price, category });
    alert('Item added successfully!');

    setItemID('');
    setItemName('');
    setQuantity('');
    setPrice('');
    setCategory('');
  };

  return (
    <div className="add-item-container">
      <h2>ADD ITEM</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
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
