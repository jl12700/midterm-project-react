import React, { useState } from 'react';
import './RemoveItem.css';

function RemoveItem({ inventory, setInventory }) {
  const [itemID, setItemID] = useState('');

  const handleRemove = (e) => {
    e.preventDefault();
    if (!itemID) {
      alert('Please enter an Item ID to remove.');
      return;
    }

    // Check if the item exists
    const itemToRemove = inventory.find(item => item.id === itemID);
    if (!itemToRemove) {
      alert('Item not found!');
      return;
    }

    // Filter out the item to remove and update inventory
    const updatedInventory = inventory.filter(item => item.id !== itemID);
    setInventory(updatedInventory);
    alert('Item removed successfully!');
    setItemID(''); // Reset input
  };

  return (
    <div className="container"> {/* Use the container class here */}
      <div className="remove-item-box"> {/* Use the remove-item-box class here */}
        <h2>Remove Item</h2>
        <form onSubmit={handleRemove}>
          <input 
            type="text" 
            placeholder="Enter Item ID to Remove" 
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
