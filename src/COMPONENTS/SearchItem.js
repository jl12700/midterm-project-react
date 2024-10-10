import React, { useState } from 'react';
import './styles/search.css';
function SearchItem({ items }) {
  const [searchId, setSearchId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    const item = items.find((item) => item.id === searchId);
    if (item) {
      setFoundItem(item);
      setErrorMessage('');
    } else {
      setFoundItem(null);
      setErrorMessage('Item not found!');
    }
  };

  return (
    <div className="container">
      <div className="search-item-box">
        <h2>Search Item</h2>
        <form>
          <input 
            type="text" 
            placeholder="Enter item ID" 
            value={searchId} 
            onChange={(e) => setSearchId(e.target.value)} 
          />
          <button type="button" onClick={handleSearch}>
            Search Item
          </button>
        </form>

        {foundItem && (
          <div className="item-details">
            <p><strong>ID:</strong> {foundItem.id}</p>
            <p><strong>Name:</strong> {foundItem.name}</p>
            <p><strong>Quantity:</strong> {foundItem.quantity}</p>
            <p><strong>Price:</strong> {foundItem.price}</p>
            <p><strong>Category:</strong> {foundItem.category}</p>
          </div>
        )}

        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default SearchItem;
