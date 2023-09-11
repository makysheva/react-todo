"use client";

import React from "react";
import { Button } from "@mui/material";
import { filterNames } from "@/constants/filterNames";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setFilter } from "../redux/tasks/filterSlice";

export const Filter= () => {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  
  const handleFilterChange = (filterType: string) => {
    dispatch(setFilter(filterType));
  };

  return (
    <div className={"relative flex flex-row items-center mb-2 w-full"}>
      {filterNames.map((item) => (
        <div key={item.id} className="m-2.5">
          <Button
            variant={item.completed === filter ? "outlined" : "contained"}
            key={item.id}
            onClick={() => handleFilterChange(item.completed)}
            className={`${item.completed === filter ? "bg-blue-500 text-white" : "bg-white text-blue-900"}`}
          >
            {item.title}
          </Button>
        </div>
      ))}
    </div>
  );
};
