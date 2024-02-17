import { useState } from "react";

import accordionList from "./data.ts";
import Accordion from "./Accordion.tsx";

const AccordionWrapper = () => {
  const [selected, setSelected] = useState<string>("");

  const toggleMulti = () => {
    if (selected !== "multi") {
      setSelected("multi");
    } else {
      setSelected("");
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Accordion</h1>
      <div className="my-5 flex justify-center h-50 cursor-pointer">
        <button
          className={`rounded-xl shadow-sm   w-max bold bg-slate-600 p-3 text-white font-bold focus:outline-none  active:bg-violet-700 active:shadow-lg ${
            selected === "multi" && `ring`
          }`}
          onClick={toggleMulti}
        >
          Enable Multi Selection
        </button>
      </div>
      <div>
        {accordionList.map((accordion) => {
          return (
            <Accordion
              key={accordion.id}
              title={accordion.title}
              description={accordion.description}
              id={accordion.id}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
    </>
  );
};

export default AccordionWrapper;
