"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteTask, updateTask } from "@/redux/tasks/slice";
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

const TodoList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [editStates, setEditStates] = React.useState<boolean[]>(
    Array(tasks.length).fill(false)
  );
  const [editedTaskTexts, setEditedTaskTexts] = React.useState<string[]>(
    Array(tasks.length).fill("")
  );

  const onToggleIcon = (idx: number) => {
    const newEditStates = [...editStates];
    newEditStates[idx] = !newEditStates[idx];
    setEditStates(newEditStates);
  };

  const handleChangeCheckbox = (idx: number) => {
    // tasks.map((item, i) =>
    //     idx === i
    //         ? {
    //             ...item,
    //             isChecked: !item.isChecked,
    //         }
    //         : item
    // )
  };

  const editTodo = (id: number, text: string) => {
    dispatch(updateTask({id, text}));
  };

  const deleteTodo = (todoIndex: number) => {
    dispatch(deleteTask(todoIndex));
  };

  return (
    <Card>
      <CardContent>
        <Box className={"flex flex-col items-center justify-between"}>
          {tasks
            ? tasks.map((item, i) => {
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
                        <>
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            className={"mr-2.5"}
                          >
                            {editStates[i] ? (
                              <SaveIcon
                                onClick={() => {
                                  editTodo(item.id, editedTaskTexts[i]);
                                  onToggleIcon(i);
                                }}
                              />
                            ) : (
                              <EditIcon onClick={() => onToggleIcon(i)} />
                            )}
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => deleteTodo(i)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </>
                      }
                      disablePadding
                    >
                      <ListItemButton role={undefined} dense>
                        <ListItemIcon>
                          <Checkbox
                            checked={item.isChecked}
                            onChange={() => handleChangeCheckbox(i)}
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                          />
                        </ListItemIcon>
                        {editStates[i] ? (
                          <Input
                            autoFocus
                            onChange={(event) =>
                              setEditedTaskTexts((prevTexts) => {
                                const newTexts = [...prevTexts];
                                newTexts[i] = event.target.value;
                                return newTexts;
                              })
                            }
                            value={editedTaskTexts[i] ? editedTaskTexts[i] : item.text}
                          ></Input>
                        ) : (
                          <ListItemText>
                            <div
                              className={`${
                                item.isChecked ? "line-through" : " "
                              } whitespace-pre-wrap`}
                            >
                              {editedTaskTexts[i] ? editedTaskTexts[i] : item.text}
                            </div>
                          </ListItemText>
                        )}
                      </ListItemButton>
                    </ListItem>
                  </List>
                );
              })
            : "Список пуст"}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodoList;
