import { useState } from "react";
import Element from "./Element";
import { useDrop } from "react-dnd";

const people = [
  {
    id: 1,
    name: "Yamin",
  },
  {
    id: 2,
    name: "Raad",
  },
];

const DragNDrop = () => {
  const [board, setBoard] = useState([]);
  const [remainingItem, setRemainingItem] = useState(people);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => addNameToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addNameToBoard = (id) => {
    const selectedName = remainingItem.find((name) => name.id === id);
    setBoard((board) => [...board, selectedName]);
    setRemainingItem((people) => people.filter((person) => person.id !== id));
  };

  return (
    <>
      <div className="names">
        {remainingItem.map((person, idx) => (
          <Element key={idx} name={person.name} id={person.id}></Element>
        ))}
      </div>
      <div
        ref={drop}
        className="board border border-black w-60 h-60 m-10 grid grid-cols-3"
      >
        {board.map((person, idx) => (
          <Element key={idx} name={person.name} id={person.id}></Element>
        ))}
      </div>
    </>
  );
};

export default DragNDrop;
