import React, { useState } from 'react';
import AddItem from './COMPONENTS/AddItem';
import DisplayItems from './COMPONENTS/DisplayItem';
import UpdateItem from './COMPONENTS/UpdateItem';
import DisplayByCategory from './COMPONENTS/DisplaybyCategory';
import RemoveItem from './COMPONENTS/RemoveItem';
import InventorySidebar from './COMPONENTS/InventorySideBar';
import SearchItem from './COMPONENTS/SearchItem';
import SortItems from './COMPONENTS/SortItem'; // Import SortItems component
import DisplayLowStockItems from './COMPONENTS/LowStockItem'; // Import DisplayLowStockItems component
import './App.css';

function App() {
  const [inventory, setInventory] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [activeComponent, setActiveComponent] = useState('displayItems'); // Default component

  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="App">
      <InventorySidebar 
        setCategoryFilter={setCategoryFilter} 
        setActiveComponent={handleComponentChange} 
      />
      <div className="content">
        {activeComponent === 'addItem' && <AddItem addItem={addItem} />}
        {activeComponent === 'displayItems' && <DisplayItems items={inventory} categoryFilter={categoryFilter} />}
        {activeComponent === 'displayByCategory' && <DisplayByCategory items={inventory} />}
        {activeComponent === 'updateItem' && <UpdateItem inventory={inventory} setInventory={setInventory} />} 
        {activeComponent === 'removeItem' && <RemoveItem inventory={inventory} setInventory={setInventory} />} 
        {activeComponent === 'searchItem' && <SearchItem items={inventory} />}
        {activeComponent === 'sortItems' && <SortItems items={inventory} />} {/* Add SortItems component */}
        {activeComponent === 'displayLowStockItems' && <DisplayLowStockItems items={inventory} />} {/* Add DisplayLowStockItems component */}
      </div>
    </div>
  );
}

export default App;
