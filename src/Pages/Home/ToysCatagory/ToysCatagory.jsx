import React, { useEffect, useState } from 'react';

const ToysCategory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setAllToys(data));
  }, []);
  console.log(allToys);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs text-center">
        <a
          className={`tab tab-lifted ${activeTab === 0 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </a>
        <a
          className={`tab tab-lifted ${activeTab === 1 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </a>
        <a
          className={`tab tab-lifted ${activeTab === 2 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </a>
      </div>

      {activeTab === 0 && (
        <div className="card">
          <h3>Card 1 Content</h3>
          <p>This is the content for Card 1.</p>
        </div>
      )}

      {activeTab === 1 && (
        <div className="card">
          <h3>Card 2 Content</h3>
          <p>This is the content for Card 2.</p>
        </div>
      )}

      {activeTab === 2 && (
        <div className="card">
          <h3>Card 3 Content</h3>
          <p>This is the content for Card 3.</p>
        </div>
      )}
    </div>
  );
};

export default ToysCategory;
