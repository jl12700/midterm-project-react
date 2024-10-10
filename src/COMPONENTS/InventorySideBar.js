import React, { useState } from 'react'; // Import useState
import '../App.css'; // Make sure your CSS path is correct

function InventorySidebar({ setCategoryFilter, setActiveComponent }) {
  const [activeComponent, setActiveComponentState] = useState(''); // State to track active component

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setActiveComponentState(component); // Update active component state
  };

  return (
    <div className="Sidebar"> {/* Updated to match your CSS */}
      <div className="SidebarTitle">Inventory System</div> {/* Updated to match your CSS */}
      <ul className="SidebarList"> {/* Added ul for better styling */}
        <li onClick={() => handleComponentChange('addItem')} className={`row ${activeComponent === 'addItem' ? 'active' : ''}`}>Add Item</li>
        <li onClick={() => handleComponentChange('updateItem')} className={`row ${activeComponent === 'updateItem' ? 'active' : ''}`}>Update Item</li>
        <li onClick={() => handleComponentChange('removeItem')} className={`row ${activeComponent === 'removeItem' ? 'active' : ''}`}>Remove Item</li>
        <li onClick={() => { setCategoryFilter(''); handleComponentChange('displayItems'); }} className={`row ${activeComponent === 'displayItems' ? 'active' : ''}`}>Display All Items</li>
        <li onClick={() => { setCategoryFilter(''); handleComponentChange('displayByCategory'); }} className={`row ${activeComponent === 'displayByCategory' ? 'active' : ''}`}>Display by Category</li>
        <li onClick={() => handleComponentChange('searchItem')} className={`row ${activeComponent === 'searchItem' ? 'active' : ''}`}>Search Item</li>
        <li onClick={() => handleComponentChange('sortItems')} className={`row ${activeComponent === 'sortItems' ? 'active' : ''}`}>Sort Items</li>
        <li onClick={() => handleComponentChange('displayLowStockItems')} className={`row ${activeComponent === 'displayLowStockItems' ? 'active' : ''}`}>Display Low Stock Items</li>
      </ul>
    </div>
  );
}

export default InventorySidebar;
