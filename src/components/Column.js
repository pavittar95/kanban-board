import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Grid, Paper, List, Typography } from "@material-ui/core";
import Task from "./Task";
export default function Column({ column, tasklist, index }) {
  return (
    <Draggable key={column.id} draggableId={column.id} index={index}>
      {(columnProvided) => (
        <Grid
          item
          md
          ref={columnProvided.innerRef}
          {...columnProvided.draggableProps}
        >
          <Paper style={{ margin: "10px", padding: "10px" }}>
            <Typography
              variant="h6"
              {...columnProvided.dragHandleProps}
              style={{ padding: "5px 10px" }}
            >
              {column.title}
            </Typography>
            {
              <Droppable droppableId={column.id} type="task">
                {(provided) => (
                  <List ref={provided.innerRef} {...provided.droppableProps}>
                    {tasklist && tasklist.map((task, index) => (
                      <Task key={task.id} {...task} index={index} />
                    ))}
                    {provided.placeholder}
                  </List>
                )}
              </Droppable>
            }
          </Paper>
        </Grid>
      )}
    </Draggable>
  );
}
