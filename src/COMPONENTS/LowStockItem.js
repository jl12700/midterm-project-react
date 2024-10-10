import React from 'react';
import './LowStockItems.css';

function DisplayLowStockItems({ items }) {
  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div className="container">
      <div className="low-stock-items-box">
        <h2>Low Stock Items</h2>
        
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {lowStockItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayLowStockItems;
