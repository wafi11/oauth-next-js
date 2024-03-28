"use client";
import React from "react";
import { DataCategories } from "./dataCategories";
import CategoriesBox from "./CategoriesBox";
import { usePathname, useSearchParams } from "next/navigation";
import Container from "../utils/Container";

const Categories = () => {
  const params = useSearchParams();
  const genre = params?.get("genre");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-2 flex flex-row items-center justify-between overflow-x-auto">
        {DataCategories.map((item, index) => (
          <CategoriesBox
            key={item.label}
            label={item.label}
            token={genre === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
