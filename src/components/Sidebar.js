// Sidebar.js
// This sidebar contains all the elements we can drag and drop
import React from "react";

const Sidebar = (props) => {
  const { handleDragStart } = props;

  return (
    <div className="sidebar">
      <div className="sidebar-item-heading">BLOCKS</div>
      <div
        className="sidebar-item"
        draggable
        onDragStart={(e) => handleDragStart(e, "label")}
      >
        <img src="/icons/grip-vertical.svg" />
        Label
      </div>
      <div
        className="sidebar-item"
        draggable
        onDragStart={(e) => handleDragStart(e, "input")}
      >
        <img src="/icons/grip-vertical.svg" />
        Input
      </div>
      <div
        className="sidebar-item"
        draggable
        onDragStart={(e) => handleDragStart(e, "button")}
      >
        <img src="/icons/grip-vertical.svg" />
        Button
      </div>
    </div>
  );
};

export default Sidebar;
