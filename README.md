# Getting Started with Mini Page Builder React

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Instructions to Run:

1. Clone the Repository:
git clone https://github.com/Aanchalll/Mini-page-builder-react.git
cd your-reposagdas
   
2. Install Dependencies:
npm install

3. Run the Application:
npm start


### How It Works:

1. Initialization:
The application starts with a blank page and a sidebar containing three draggable components: Label, Input, and Button.
The page has a local state components to store the components on the page, and selectedComponent to keep track of the selected component for editing.

2. Drag and Drop:
Components in the sidebar are draggable (draggable attribute) with the handleDragStart function storing the dragged component type.
The page has a drop area (onDrop event) that triggers the handleDrop function, adding a new component at the drop position with default configurations.

3. Rendering Components:
Components are rendered on the page using the map function on the components state.
Each component is a draggable element with its position, size, and content based on its type.

4. Selection and Editing:
Clicking on a component triggers the handleElementClick function, setting the selected component index.
The selected component is highlighted with a red border, and its configuration can be edited in the modal.

5. Editing Modal:
The modal is opened when a component is selected.
The modal contains input fields for X and Y coordinates, text content, font size, and font weight.
Changes can be made in the modal, and the "Save Changes" button updates the component's configuration.

6. Deletion:
The "Delete" button in the modal triggers the handleDelete function, removing the selected component.

7. Local Storage:
The useEffect hooks manage loading and saving components to local storage to persist changes across page reloads.
