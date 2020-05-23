import React, { Fragment } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Grid } from "@material-ui/core";
import Column from "../../components/Column";
import { fetchTaskAction } from "../../actions/task";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchColumnAction,
  fetchColumnOrderAction,
  updateColumnOrder,
  setColumnTasks,
} from "../../actions/column";

export default function TaskBoard() {
  const { columnOrder, columns, tasks } = useSelector((state) => state);

  const dispatch = useDispatch();

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
      dispatch(updateColumnOrder(newColumnOrder));
    } else {
      const sourceColumn = { ...columns[source.droppableId] };
      const destinationColumn = { ...columns[destination.droppableId] };
      if (sourceColumn.id === destinationColumn.id) {
        sourceColumn.taskIds.splice(source.index, 1);
        sourceColumn.taskIds.splice(destination.index, 0, draggableId);
        dispatch(setColumnTasks(sourceColumn));
      } else {
        sourceColumn.taskIds.splice(source.index, 1);
        if (!destinationColumn.taskIds) {
          destinationColumn.taskIds = [];
        }
        destinationColumn.taskIds.splice(destination.index, 0, draggableId);

        dispatch(setColumnTasks(sourceColumn));
        dispatch(setColumnTasks(destinationColumn));
      }
    }
  };

  const getTasks = () => {
    dispatch(fetchColumnAction());
    dispatch(fetchColumnOrderAction());
    dispatch(fetchTaskAction());
  };

  return (
    <Fragment>
      {columnOrder.length !== 0 && Object.keys(columns).length !== 0 && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
              <Grid
                container
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {columnOrder.map((colId, i) => {
                  const column = columns[colId];
                  column.id = colId;
                  const tasklist = column.taskIds
                    ? column.taskIds.map((taskId) => ({
                        id: taskId,
                        ...tasks[taskId],
                      }))
                    : [];
                  return (
                    <Column
                      key={i}
                      index={i}
                      column={column}
                      tasklist={tasklist}
                    />
                  );
                })}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </Fragment>
  );
}
