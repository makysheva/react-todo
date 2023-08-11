import {createSlice} from '@reduxjs/toolkit';
import {generateUniqueId} from "@/utils/generateUniqueId";
import {TasksProps} from "./types";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [] as TasksProps[],
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks = [
                ...state.tasks,
                {
                    id: generateUniqueId(),
                    text: action.payload.text,
                    isEdit: action.payload.isEdit,
                    isChecked: action.payload.isChecked
                }
            ]
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((_, index) => index !== action.payload);
        },
        updateTask: (state, action) => {
            const { id, text } = action.payload;
            const task = state.tasks.find((itemTask) => itemTask.id === id);
            
            if (task) {
              task.isEdit = !task.isEdit;
              task.text = text;
            }

            return task
        },
    },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
