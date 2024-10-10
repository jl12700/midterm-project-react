import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddItem from './COMPONENTS/AddItem';
import DisplayItems from './COMPONENTS/DisplayItem';
import UpdateItem from './COMPONENTS/UpdateItem';
import DisplayByCategory from './COMPONENTS/DisplaybyCategory';
import RemoveItem from './COMPONENTS/RemoveItem';
import InventorySidebar from './COMPONENTS/InventorySideBar';
import SearchItem from './COMPONENTS/SearchItem';
import SortItems from './COMPONENTS/SortItem'; 
import DisplayLowStockItems from './COMPONENTS/LowStockItem'; 
import './App.css';

function App() {
  const [inventory, setInventory] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  return (
    <Router>
      <div className="App">
        <InventorySidebar setCategoryFilter={setCategoryFilter} />
        <div className="content">
          <Routes>
            <Route path="/add-item" element={<AddItem addItem={(item) => setInventory([...inventory, item])} />} />
            <Route path="/update-item" element={<UpdateItem inventory={inventory} setInventory={setInventory} />} />
            <Route path="/remove-item" element={<RemoveItem inventory={inventory} setInventory={setInventory} />} />
            <Route path="/display-items" element={<DisplayItems items={inventory} categoryFilter={categoryFilter} />} />
            <Route path="/display-by-category" element={<DisplayByCategory items={inventory} />} />
            <Route path="/search-item" element={<SearchItem items={inventory} />} />
            <Route path="/sort-items" element={<SortItems items={inventory} />} />
            <Route path="/display-low-stock-items" element={<DisplayLowStockItems items={inventory} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
