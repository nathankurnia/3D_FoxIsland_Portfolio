import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 z-50 flex justify-center items-center ">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-indigo-100 leading-none rounded-md lg:rounded-full flex lg:inline-flex items-center`}
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
