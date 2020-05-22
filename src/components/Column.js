import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Container, Title, TaskList } from "../containers/Dashboard/style";
import Task from "./Task";
export default function Column({ column, tasklist, index }) {
  return (
    <Draggable key={column.id} draggableId={column.id} index={index}>
      {(columnProvided) => (
        <Container ref={columnProvided.innerRef} {...columnProvided.draggableProps}>
          <Title {...columnProvided.dragHandleProps}>{column.title}</Title>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasklist.map((task, index) => (
                  <Task key={task.id} {...task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}
