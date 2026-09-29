import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SaveData from "./../utils/SaveData.tsx";

import Message from "../components/Message.tsx";

const Icon = "/Icon.png";

const SettingsDefault = {
  bg: "bg-sky-950",
  bgV2: "bg-sky-900",
  p: "p-2",
  gap: "gap-2",
  rounded: "rounded-lg",
  textColor: "text-white",
  font: "font-sans",
  inputStyle:
    "w-full rounded-lg bg-sky-800 p-2 text-center font-bold focus:border outline-none",
  buttonStyle: "w-full rounded-lg bg-sky-800 p-2 font-bold hover:bg-sky-700",
};

export default function PageDefault() {
  const navigate = useNavigate();

  const [getName, setName] = useState("");
  const [getAge, setAge] = useState("");

  const [getMessage, setMessage] = useState("");

  return (
    <div
      className={`
        min-h-screen
        grid
        place-items-center
        ${SettingsDefault.font}
        ${SettingsDefault.textColor}
        ${SettingsDefault.p}
        ${SettingsDefault.bg}
      `}
    >
      <main
        className={`
          w-full
          sm:w-[70%]
          md:w-[60%]
          lg:w-[50%]
          flex
          flex-col
          ${SettingsDefault.p}
          ${SettingsDefault.gap}
          ${SettingsDefault.bgV2}
          ${SettingsDefault.rounded}
          border
        `}
      >
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Form</h1>
          <img className="w-12.5" src={Icon} />
        </header>
        <article className={`flex flex-col ${SettingsDefault.gap}`}>
          <input
            className={SettingsDefault.inputStyle}
            type="text"
            value={getName}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name:"
          />
          <input
            className={SettingsDefault.inputStyle}
            type="number"
            value={getAge}
            onChange={(event) => setAge(event.target.value)}
            placeholder="Age:"
          />
          <button
            onClick={function () {
              const name = getName;
              const age = getAge;

              if (name == "" || age == "") {
                setMessage("filled in all the fields!");
                setTimeout(() => {
                  setMessage("");
                }, 3000);
              } else {
                SaveData({ name: name, age: Number(age) });
                navigate("/PageDisplay");
              }
            }}
            className={`${SettingsDefault.buttonStyle}`}
          >
            SEND
          </button>
        </article>
        <footer className="text-center">
          <h6 className="italic">
            Developed by: <u className="font-bold">Guilhermme Soares marciel</u>
          </h6>
        </footer>
      </main>
      {getMessage && <Message context={getMessage} />}
    </div>
  );
}
