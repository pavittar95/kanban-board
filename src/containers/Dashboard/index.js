import React, { Fragment, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Flex } from "./style";
import { data } from "../../constants";
import Column from "../../components/Column";

export default function Dashboard() {
  const [tasks, setTasks] = useState(data.tasks);
  const [columnOrder, setColumnOrder] = useState(data.columnOrder);
  const [columns, setColumns] = useState(data.columns);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!result.destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.droppableId
    ) {
      return;
    }

    if (type === "column") {
        let newColumnOrder = [...columnOrder];
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);
        setColumnOrder(newColumnOrder);
    } else {
      const sourceColumn = { ...columns[source.droppableId] };
      const destinationColumn = { ...columns[destination.droppableId] };
      if (sourceColumn.id === destinationColumn.id) {
        sourceColumn.taskIds.splice(source.index, 1);
        sourceColumn.taskIds.splice(destination.index, 0, draggableId);
        setColumns({
          ...columns,
          [sourceColumn.id]: sourceColumn,
        });
      } else {
        sourceColumn.taskIds.splice(source.index, 1);
        destinationColumn.taskIds.splice(destination.index, 0, draggableId);
        setColumns({
          ...columns,
          [sourceColumn.id]: sourceColumn,
          [destinationColumn.id]: destinationColumn,
        });
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <Flex ref={provided.innerRef} {...provided.droppableProps}>
            {columnOrder.map((colId, i) => {
              const column = columns[colId];
              const tasklist = column.taskIds.map((taskId) => tasks[taskId]);
              return (
                <Column key={i} index={i} column={column} tasklist={tasklist} />
              );
            })}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </DragDropContext>
  );
}
