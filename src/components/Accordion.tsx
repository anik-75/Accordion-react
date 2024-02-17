import { useState } from "react";
type prop = {
  id: string;
  title: string;
  description: string;
  selected: string;
  setSelected: (id: string) => void;
};
const Accordion = ({ id, title, description, selected, setSelected }: prop) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const toggleSelected = () => {
    if (selected === "multi") {
      setCollapse(!collapse);
    } else {
      setSelected(id);
    }
  };
  return (
    <>
      <div className="m-7 flex flex-col justify-center items-center">
        <div className="bg-slate-400 w-[35rem] h-50 p-3">
          <div
            className="flex justify-between cursor-pointer"
            onClick={toggleSelected}
          >
            <h3>{title}</h3>
            <button className="font-bold" onClick={toggleSelected}>
              {"+"}
            </button>
          </div>
          {selected === "multi" && collapse ? (
            <p>{description}</p>
          ) : (
            selected === id && <p>{description}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
