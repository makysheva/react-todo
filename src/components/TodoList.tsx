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
import { TasksProps } from "@/redux/tasks/types";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <Card>
      <CardContent>
        <Box className={"flex flex-col items-center justify-between"}>
          {tasks.length ? (
            tasks.map((item, i) => {
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
                          >
                            <SaveIcon />
                          </IconButton>
                        ) : (
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            className={"mr-2.5"}
                          >
                            <EditIcon />
                          </IconButton>
                        )}
                        <div>
                          <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </div>
                    }
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          tabIndex={-1}
                          disableRipple
                        />
                      </ListItemIcon>
                      {item.isEdit ? (
                        <Input
                          autoFocus
                          value={item.isEdit ? item.text : item.text}
                        ></Input>
                      ) : (
                        <ListItemText>
                          <div
                            className={`${
                              item.isChecked ? "line-through" : " "
                            } whitespace-pre-wrap`}
                          >
                            {item.isEdit ? item.text : item.text}
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
