"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CategoryContextType {
  selectedCategory: "male" | "female" | "anime";
  setSelectedCategory: (category: "male" | "female" | "anime") => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};

interface CategoryProviderProps {
  children: ReactNode;
}

const CategoryProvider: React.FC<CategoryProviderProps> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<"male" | "female" | "anime">("female");

  return (
    <CategoryContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;