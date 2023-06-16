"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

interface FormData {
  duration: string;
  service: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}
const initialData: FormData = {
  duration: "",
  service: "",
  name: "",
  email: "",
  phone: "",
  city: "",
  message: "",
};

const FormContext = createContext({});

export const FormProvider = ({ children }: any) => {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(0);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  return (
    <FormContext.Provider value={{ data, page, setPage, updateFields }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
