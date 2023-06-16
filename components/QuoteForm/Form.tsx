"use client";

import { useState } from "react";
import { FormProvider } from "./FormContext";
import useFormContext from "./useFormContext";
import Duration from "./Duration";
import Service from "./Service";
import Info from "./Info";

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

const Form = () => {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(0);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const handleSubmit = async (data: FormData) => {
    try {
      const res = await fetch("https://eojpt8lgy3bv78f.m.pipedream.net", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      alert(error);
    }
  };
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Duration {...data} updateFields={updateFields} setPage={setPage} />
      );
    } else if (page === 1) {
      return (
        <Service {...data} updateFields={updateFields} setPage={setPage} />
      );
    } else {
      return <Info {...data} updateFields={updateFields} />;
    }
  };
  return (
    <div className="h-full flex flex-col justify-between rounded-xl px-4">
      {PageDisplay()}

      <div className="flex my-2 justify-center rounded-xl">
        {page === FormTitles.length - 1 ? (
          <button
            className="btn"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handleSubmit(data);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            Submit
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Form;
