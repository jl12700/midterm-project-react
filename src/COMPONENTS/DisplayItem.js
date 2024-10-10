import React from 'react';
import './display.css';

function DisplayItems({ items, categoryFilter }) {
  const filteredItems = categoryFilter
    ? items.filter(item => item.category === categoryFilter)
    : items;

  return (
    <div className="table-container">
      <div className="table-box">
        <h2>Display Items</h2> {/* Optional heading */}
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
            {filteredItems.map((item) => (
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

export default DisplayItems;
