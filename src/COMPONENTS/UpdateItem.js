import React, { useState } from 'react';
import './styles/updateItem.css';

const UpdateItem = ({ inventory, setInventory }) => {
  const [itemId, setItemId] = useState('');
  const [updateType, setUpdateType] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = () => {
    const itemIndex = inventory.findIndex(item => item.id === itemId);

    
    const value = parseFloat(newValue); 
    if (isNaN(value) || value <= 0) {
      setMessage('Please enter a value greater than 0 for the new value.');
      return;
    }

    if (itemIndex !== -1) {
      const item = inventory[itemIndex];
      const oldValue = updateType === 'quantity' ? item.quantity : item.price;

      const updatedItem = {
        ...item,
        [updateType]: value, 
      };

      const updatedInventory = [...inventory];
      updatedInventory[itemIndex] = updatedItem;
      setInventory(updatedInventory);

      setMessage(`The ${updateType} of Item ${item.name} is updated from ${oldValue} to ${value}.`);
    } else {
      setMessage('Item not found!');
    }

    setItemId('');
    setNewValue('');
  };

  return (
    <div className="update-item-container">
      <h2>Update Item</h2>
      <div>
        <label>Input ID:</label>
        <input 
          type="text" 
          value={itemId} 
          onChange={(e) => setItemId(e.target.value)} 
          placeholder="Enter item ID" 
        />
      </div>
      <div>
        <label>Update Type:</label>
        <select value={updateType} onChange={(e) => setUpdateType(e.target.value)}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div>
        <label>New Value:</label>
        <input 
          type="number" 
          value={newValue} 
          onChange={(e) => setNewValue(e.target.value)} 
          placeholder="Enter new value" 
        />
      </div>
      <button onClick={handleUpdate}>Update Item</button>
      {message && <p className={message.includes('not found') ? 'error-message' : ''}>{message}</p>}
    </div>
  );
};

export default UpdateItem;
