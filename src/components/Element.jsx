/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";

const Element = ({ name, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <span
      ref={drag}
      className={`element border border-black p-2 h-10 w-14 rounded mx-2 ${
        isDragging && "hidden"
      }`}
    >
      {name}
    </span>
  );
};

export default Element;
