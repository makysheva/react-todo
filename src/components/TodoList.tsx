"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import {
  deleteTodo,
  toggleEdit,
  toggleChecked,
  updateTodoText,
} from "@/redux/tasks/slice";

type EditedTodoProps = {
  todoId: number | null;
  text: string;
};

const TodoList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const [editedTodo, setEditedTodo] = React.useState<EditedTodoProps>({
    todoId: null,
    text: "",
  });

  const handleToggleEditIcon = React.useCallback(
    (id: number) => {
      dispatch(toggleEdit({ id }));
    },
    [dispatch]
  );

  const handleUpdateText = (id: number, text: string) => {
    setEditedTodo({ todoId: id, text });
  };

  const handleSaveTodo = React.useCallback(
    (id: number) => {
      dispatch(updateTodoText({ id, text: editedTodo.text }));
    },
    [dispatch, editedTodo]
  );

  const handleCheckedTodo = (id: number) => {
    dispatch(toggleChecked({ id }));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <Card>
      <CardContent>
        <Box className={"flex flex-col items-center justify-between"}>
          {tasks.length ? (
            tasks.map(item => {
              return (
                <List
                  key={item.id}
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgColor: "background.paper",
                  }}
                  className={"max-w-500 w-full"}
                >
                  <ListItem
                    secondaryAction={
                      <div
                        className={"flex flex-row items-center justify-between"}
                      >
                        {item.isEdit ? (
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            className={"mr-2.5"}
                            onClick={() => handleSaveTodo(item.id)}
                          >
                            <SaveIcon />
                          </IconButton>
                        ) : (
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            className={"mr-2.5"}
                            onClick={() => handleToggleEditIcon(item.id)}
                          >
                            <EditIcon />
                          </IconButton>
                        )}
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleDelete(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    }
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox  onClick={() => handleCheckedTodo(item.id)} edge="start" tabIndex={-1} disableRipple />
                      </ListItemIcon>
                      {item.isEdit ? (
                        <Input
                          autoFocus
                          value={
                            item.id === editedTodo.todoId
                              ? editedTodo.text
                              : item.text
                          }
                          onChange={(e) =>
                            handleUpdateText(item.id, e.target.value)
                          }
                        ></Input>
                      ) : (
                        <ListItemText>
                          <div
                            className={`${
                              item.isChecked ? "line-through" : " "
                            } whitespace-pre-wrap`}
                          >
                            {item.text}
                          </div>
                        </ListItemText>
                      )}
                    </ListItemButton>
                  </ListItem>
                </List>
              );
            })
          ) : (
            <div>Список пуст</div>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodoList;
