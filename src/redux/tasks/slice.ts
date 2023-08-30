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
    updateTodoText: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        todo.isEdit = false;
      }
    },
    toggleChecked: (state, action) => {
      const { id } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.isChecked = !todo.isChecked;
      }
    },
    toggleEdit: (state, action) => {
      const { id } = action.payload;
      return state.map((todo) => todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
  );
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      return state.filter(todo => todo.id !== id);
    },
  },
});

export const { addTask, updateTodoText, toggleChecked, toggleEdit, deleteTodo } = tasksSlice.actions;
export default tasksSlice.reducer;
