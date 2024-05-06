import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import DragNDrop from "./components/DragNDrop";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragNDrop></DragNDrop>
      </div>
    </DndProvider>
  );
}

export default App;
