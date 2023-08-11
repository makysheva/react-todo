interface FilterNamesProps {
  id: number;
  title: string;
  completed: string;
}

export const filterNames: FilterNamesProps[] = [
  { id: 1, title: "Все", completed: "all" },
  { id: 2, title: "Выполненные", completed: "completed" },
  {
    id: 3,
    title: "Невыполненные",
    completed: "uncompleted",
  },
];
