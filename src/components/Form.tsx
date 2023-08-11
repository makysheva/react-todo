"use client";

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {TasksProps} from "@/redux/tasks/types";
import {addTask} from "@/redux/tasks/slice";
import {useAppDispatch} from "@/redux/hooks";

interface FormProps {
  onShow: (obj: TasksProps) => void;
}

const Form: React.FC<FormProps> = ({ onShow }) => {
  const dispatch = useAppDispatch();
  const [task, setTask] = React.useState<TasksProps>({
    id: 0,
    text: "",
    isEdit: false,
    isChecked: false,
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value, isEdit: false, isChecked: false });
  };

  const handleClickAdd = () => {
    setTask({ id: 0, text: "", isEdit: false, isChecked: false });

    if (onShow) {
      dispatch(addTask({
        text: task.text,
        isChecked: task.isChecked,
        isEdit: task.isEdit,
      }));

      onShow(task);
    }
  };

  return (
    <Card className={"mb-5"}>
      <CardContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={"flex flex-col items-center justify-between"}
        >
          <TextField
            required
            id="outlined-required"
            value={task.text}
            name="text"
            onChange={onChangeInput}
            placeholder="Введите задачу"
            className={"w-full"}
          />

          <Button
            variant="contained"
            disabled={task.text.length === 0}
            className={"w-full visible bg-blue-500 mt-6 hover:bg-sky-700"}
            onClick={handleClickAdd}
          >
            Добавить
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Form;
