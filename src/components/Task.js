import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "#fff")};
  margin-bottom: 8px;
`;

export default function Task({ id = "", content = "", index = 0 }) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {content}
        </Container>
      )}
    </Draggable>
  );
}
