// This is the modal that opens on clicking on the element

import React from "react";

const Modal = ({
  handleConfigUpdate,
  handleDelete,
  components,
  selectedComponent,
  setSelectedComponent,
}) => {
  return (
    <div className="config-modal-base">
      <div className="config-modal">
        <div className="modal-header">
          <h3>Edit</h3>
          <span onClick={() => setSelectedComponent(null)}>×</span>
        </div>
        <div className="modal-divider"></div>
        <label>Text</label>
        <input
          type="text"
          value={components[selectedComponent].text || ""}
          onChange={(e) =>
            handleConfigUpdate(
              components[selectedComponent].x,
              components[selectedComponent].y,
              e.target.value,
              components[selectedComponent].fontSize,
              components[selectedComponent].fontWeight
            )
          }
        />
        <label>X</label>
        <input
          type="text"
          value={components[selectedComponent].x}
          onChange={(e) =>
            handleConfigUpdate(
              e.target.value,
              components[selectedComponent].y,
              components[selectedComponent].text,
              components[selectedComponent].fontSize,
              components[selectedComponent].fontWeight
            )
          }
        />
        <label>Y</label>
        <input
          type="text"
          value={components[selectedComponent].y}
          onChange={(e) => {
            console.log(e.target.value, "y value");
            handleConfigUpdate(
              components[selectedComponent].x,
              e.target.value,
              components[selectedComponent].text,
              components[selectedComponent].fontSize,
              components[selectedComponent].fontWeight
            );
          }}
        />

        <label>Font Size</label>
        <input
          type="text"
          value={components[selectedComponent].fontSize || ""}
          onChange={(e) =>
            handleConfigUpdate(
              components[selectedComponent].x,
              components[selectedComponent].y,
              components[selectedComponent].text,
              e.target.value,
              components[selectedComponent].fontWeight
            )
          }
        />
        <label>Font Weight</label>
        <input
          type="text"
          value={components[selectedComponent].fontWeight || ""}
          onChange={(e) =>
            handleConfigUpdate(
              components[selectedComponent].x,
              components[selectedComponent].y,
              components[selectedComponent].text,
              components[selectedComponent].fontSize,
              e.target.value
            )
          }
        />
        <div className="modal-footer">
          {/* <button onClick={() => setSelectedComponent(null)}>Cancel</button> */}
          <button
            onClick={() => {
              handleConfigUpdate(
                components[selectedComponent].x,
                components[selectedComponent].y,
                components[selectedComponent].text,
                components[selectedComponent].fontSize,
                components[selectedComponent].fontWeight
              );
              setSelectedComponent(null);
            }}
          >
            Save Changes
          </button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
