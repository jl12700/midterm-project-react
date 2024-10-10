import React, { useState } from 'react';
import './styles/RemoveItem.css';

function RemoveItem({ inventory, setInventory }) {
  const [itemID, setItemID] = useState('');

  const handleRemove = (e) => {
    e.preventDefault();
    if (!itemID) {
      alert('Please enter an Item ID to remove.');
      return;
    }

    const itemToRemove = inventory.find(item => item.id === itemID);
    if (!itemToRemove) {
      alert('Item not found!');
      return;
    }

    const updatedInventory = inventory.filter(item => item.id !== itemID);
    setInventory(updatedInventory);
    alert('Item removed successfully!');
    setItemID('');
  };

  return (
    <div className="container">
      <div className="remove-item-box">
        <h2>Remove Item</h2>
        <form onSubmit={handleRemove}>
          <input 
            type="text" 
            placeholder="Enter Item ID to remove" 
            value={itemID} 
            onChange={(e) => setItemID(e.target.value)} 
            required 
          />
          <button type="submit">Remove Item</button>
        </form>
      </div>
    </div>
  );
}

export default RemoveItem;
