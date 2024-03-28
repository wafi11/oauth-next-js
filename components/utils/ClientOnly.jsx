"use client";
import React, { Children, useEffect, useState } from "react";

const ClientOnly = ({ Children }) => {
  const [HasMousnted, setHasmounted] = useState(false);

  useEffect(() => {
    setHasmounted(!HasMousnted);
  }, []);
  if (!HasMousnted) {
    return null;
  }
  return <>{Children}</>;
};

export default ClientOnly;
