import { createSlice } from "@reduxjs/toolkit";
import { TasksProps } from "./types";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as TasksProps[],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        isEdit: action.payload.isEdit,
        isChecked: action.payload.isChecked,
      });
    },
    deleteTask: (state, action) => {
      state = state.filter((_, index) => index !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, text, isEdit, isChecked } = action.payload;
      state = state.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isEdit,
            isChecked,
            text,
          };
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
