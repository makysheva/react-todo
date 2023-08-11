import {TasksProps} from "@/redux/tasks/types";

export function filterTasks(tasks: TasksProps[], filter: string) {
  if (filter === 'completed') {
    return tasks.filter(task => task.isChecked);
  } else if (filter === 'uncompleted') {
    return tasks.filter(task => !task.isChecked);
  }
  return tasks;
}