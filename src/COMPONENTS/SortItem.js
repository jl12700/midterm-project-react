import React, { useState } from 'react';
import './styles/SortItem.css';

function SortItems({ items }) {
  const [sortBy, setSortBy] = useState('quantity');
  const [order, setOrder] = useState('ascending');
  
  const handleSort = () => {
    let sortedItems = [...items];
    sortedItems.sort((a, b) => {
      const aValue = sortBy === 'quantity' ? a.quantity : a.price;
      const bValue = sortBy === 'quantity' ? b.quantity : b.price;

      if (order === 'ascending') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
    return sortedItems;
  };

  const sortedItems = handleSort();

  return (
    <div className="container">
      <div className="sort-items-box">
        <h2>Sort Items</h2>
        <form>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </form>
        
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SortItems;
