"use client";

import React from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Filter} from "../components/Filter";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {TasksProps} from "@/redux/tasks/types";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";

export default function HomePage() {
    const [mainList, setMainList] = React.useState<TasksProps[]>([]);
    const [filter, setFilter] = React.useState("all");
    const [theme, setTheme] = React.useState('light');
    const dispatch = useAppDispatch()
    const tasks = useAppSelector((state) => state.tasks);

    const onShowTodo = (obj: TasksProps) => {
        setMainList([...mainList, obj]);
    };

    // const filteredTasks = filterTasks(tasks, filter);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Card className={`max-w-xl w-full ${theme === "light" ? "bg-white text-black" : "bg-sky-900 text-white"}`}>
            <CardContent>
                <div className={"p-2.5"}>
                    <div className={"flex flex-row items-center justify-between mb-5"}>
                        <h2 className={"text-2xl"}>React Todo</h2>
                        {theme === 'light' ? <DarkModeIcon onClick={toggleTheme}/> :
                            <WbSunnyIcon onClick={toggleTheme}/>}
                    </div>
                    <Form onShow={onShowTodo}/>
                </div>

                <div className={"m-2 p-2.5"}>
                    <h2 className={"mb-5"}>Задачи</h2>
                    <div className={"flex flex-row justify-between items-center mb-2"}>
                        <Filter filter={filter} setFilter={setFilter}/>
                    </div>

                    <TodoList />
                </div>
            </CardContent>
        </Card>
    )
}