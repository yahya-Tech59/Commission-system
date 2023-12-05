import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handleOpen = () => {
    setSidebarOpen(true);
  };

  const handleClose = () => {
    setSidebarOpen(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const values = {
    sidebarOpen,
    handleOpen,
    handleClose,
    currentPage,
    handlePageChange,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
