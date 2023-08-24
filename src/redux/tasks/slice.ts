import { createSlice } from "@reduxjs/toolkit";
import { TasksProps } from "./types";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [] as TasksProps[],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(
        {
          id: action.payload.id,
          text: action.payload.text,
          isEdit: action.payload.isEdit,
          isChecked: action.payload.isChecked,
        },
      )
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, text, isEdit, isChecked } = action.payload;
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            isEdit,
            isChecked,
            text
          };
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
