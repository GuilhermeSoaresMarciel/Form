import { useState } from "react";

const Icon = "/Icon.png";

const SettingsDefault = {
  bg: "bg-[silver]",
  bgV2: "bg-sky-700",

  p: "p-2.5",

  inputStyle:
    "w-full rounded-lg bg-sky-950 p-1 text-center font-bold outline-none",
};

export default function PageDefault() {
  const [getName, setName] = useState("");
  const [getAge, setAge] = useState("");

  return (
    <div
      className={`
        flex flex-col
        items-center justify-center
        min-h-screen
        ${SettingsDefault.p}
        font-sans
        text-[silver]
        ${SettingsDefault.bg}
      `}
    >
      <main
        className={`
          flex w-full flex-col gap-1.5
          rounded-lg
          ${SettingsDefault.p}
          ${SettingsDefault.bgV2}

          sm:w-[90%]
          md:w-[80%]
          lg:w-[70%]
        `}
      >
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Form</h1>

          <img className="w-12.5" src={Icon} />
        </header>

        <article className="flex flex-col gap-1.5">
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
        </article>

        <footer className="text-center">
          <h6 className="font-bold">
            Developed by: <u>Guilhermme Soares marciel</u>
          </h6>
        </footer>
      </main>
    </div>
  );
}
