// App.js

import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

const App = () => {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    // Load components from local storage on mount
    const savedComponents =
      JSON.parse(localStorage.getItem("components")) || [];
    setComponents(savedComponents);
  }, []);

  useEffect(() => {
    // Save components to local storage whenever they change
    localStorage.setItem("components", JSON.stringify(components));
  }, [components]);

  const handleDragStart = (e, componentType) => {
    e.dataTransfer.setData("componentType", componentType);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData("componentType");
    const { clientX, clientY } = e;
    const newComponent = {
      type: componentType,
      x: clientX - 50, // Adjust for the component's width
      y: clientY - 50, // Adjust for the component's height
      text: "Your Text",
      fontSize: "14px",
      fontWeight: "normal",
    };
    setComponents([...components, newComponent]);
  };

  const handleElementClick = (index) => {
    setSelectedComponent(index);
  };

  const handleConfigUpdate = (x, y, text, fontSize, fontWeight) => {
    if (selectedComponent !== null) {
      setComponents((prevComponents) => {
        const updatedComponents = [...prevComponents];
        updatedComponents[selectedComponent] = {
          ...updatedComponents[selectedComponent],
          x,
          y,
          text,
          fontSize,
          fontWeight,
        };
        return updatedComponents;
      });
    }
  };

  const handleDelete = () => {
    if (selectedComponent !== null) {
      setComponents((prevComponents) => {
        const updatedComponents = [...prevComponents];
        updatedComponents.splice(selectedComponent, 1);
        return updatedComponents;
      });
      setSelectedComponent(null);
    }
  };

  return (
    <div className="app">
      <div
        className="page"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => e.preventDefault()}
      >
        {components.map((component, index) => (
          <div
            key={index}
            className={`page-component${
              selectedComponent === index ? " selected" : ""
            }`}
            style={{
              left: component.x,
              top: component.y,
              fontSize: component.fontSize,
              fontWeight: component.fontWeight,
            }}
            onClick={() => handleElementClick(index)}
          >
            {component.type === "label" && <span>{component.text}</span>}
            {component.type === "input" && (
              <input type="text" placeholder={component.text} />
            )}
            {component.type === "button" && <button>{component.text}</button>}
          </div>
        ))}
      </div>

      <Sidebar handleDragStart={handleDragStart} />

      {selectedComponent !== null && (
        <Modal
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
          handleConfigUpdate={handleConfigUpdate}
          handleDelete={handleDelete}
          components={components}
        />
      )}
    </div>
  );
};

export default App;

