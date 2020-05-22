import styled from "styled-components";

export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  flex: 1;
  background-color: white;
`;

export const Title = styled.h3`
  padding: 8px;
`;

export const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "#fff")};
`;

export const Flex = styled.div`
  display: flex;
`;
