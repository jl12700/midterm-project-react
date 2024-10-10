import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function InventorySidebar({ setCategoryFilter }) {
  const location = useLocation();

  return (
    <div className="Sidebar">
      <div className="SidebarTitle">Inventory System</div>
      <ul className="SidebarList">
        <li className={`row ${location.pathname === '/add-item' ? 'active' : ''}`}>
          <Link to="/add-item">Add Item</Link>
        </li>
        <li className={`row ${location.pathname === '/update-item' ? 'active' : ''}`}>
          <Link to="/update-item">Update Item</Link>
        </li>
        <li className={`row ${location.pathname === '/remove-item' ? 'active' : ''}`}>
          <Link to="/remove-item">Remove Item</Link>
        </li>
        <li className={`row ${location.pathname === '/display-items' ? 'active' : ''}`} onClick={() => setCategoryFilter('')}>
          <Link to="/display-items">Display All Items</Link>
        </li>
        <li className={`row ${location.pathname === '/display-by-category' ? 'active' : ''}`} onClick={() => setCategoryFilter('')}>
          <Link to="/display-by-category">Display by Category</Link>
        </li>
        <li className={`row ${location.pathname === '/search-item' ? 'active' : ''}`}>
          <Link to="/search-item">Search Item</Link>
        </li>
        <li className={`row ${location.pathname === '/sort-items' ? 'active' : ''}`}>
          <Link to="/sort-items">Sort Items</Link>
        </li>
        <li className={`row ${location.pathname === '/display-low-stock-items' ? 'active' : ''}`}>
          <Link to="/display-low-stock-items">Display Low Stock Items</Link>
        </li>
      </ul>
    </div>
  );
}

export default InventorySidebar;
