"use client";

import React from "react";
import { Button } from "@mui/material";
import { filterNames } from "@/constants/filterNames";

interface FilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  const handleFilterChange = (filterType: string) => {
    setFilter(filterType);
  };

  return (
    <div className={"relative flex flex-row items-center mb-2 w-full"}>
      {filterNames.map((item) => (
        <div key={item.id}>
          <Button
            variant={item.completed === filter ? "outlined" : "contained"}
            key={item.id}
            onClick={() => handleFilterChange(item.completed)}
            className={`
              mr-2.5 
              ${item.completed === filter ? "bg-blue-500 text-white" : "bg-white text-blue-900"}
              hover:bg-sky-700
              hover:text-white
             `}
          >
            {item.title}
          </Button>
        </div>
      ))}
    </div>
  );
};
