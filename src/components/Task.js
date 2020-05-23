import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Paper, ListItem } from "@material-ui/core";

export default function Task({ id = "", title = "", index = 0 }) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          disableGutters
        >
          <Paper style={{ width: "100%", height: "100%", padding: "10px" }}>
            <span>{title}</span>
          </Paper>
        </ListItem>
      )}
    </Draggable>
  );
}
