import React, { useState } from 'react';
import './category.css';

function DisplayByCategory({ items }) {
  const [categoryFilter, setCategoryFilter] = useState('');

  // Define your fixed categories
  const categories = ['Clothing', 'Electronics', 'Entertainment'];

  // Filter items based on selected category
  const filteredItems = categoryFilter
    ? items.filter(item => item.category === categoryFilter)
    : items;

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <div className="table-container">
      <div className="table-box">
        <h2>Display Items by Category</h2>
        
        {/* Dropdown for selecting category */}
        <label htmlFor="category-select">Choose a category:</label>
        <select 
          id="category-select" 
          value={categoryFilter} 
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

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
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  {categoryFilter ? 'No current items in this category.' : 'No items available.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayByCategory;
