import React from "react";
import { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["home", "profile", "settings"];

  return (
    <div>
      <h1>Tabs Component</h1>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="content">
        {activeTab === 0 && <p>Home content</p>}
        {activeTab === 1 && <p>Profile content</p>}
        {activeTab === 2 && <p>Settings content</p>}
      </div>
    </div>
  );
};
export default App;
