import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GetData from "./../utils/GetData.tsx";

const Icon = "/Icon.png";

const SettingsDefault = {
  bg: "bg-sky-950",
  bgV2: "bg-sky-900",
  p: "p-2",
  gap: "gap-2",
  rounded: "rounded-lg",
  textColor: "text-white",
  font: "font-sans",
};

const data = GetData();

export default function PageDisplay() {
  const navigate = useNavigate();
  const [getName] = useState(data?.name ?? "");
  const [getAge] = useState(data?.age ?? "");

  useEffect(() => {
    if (!data) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  if (!data) {
    return null;
  }

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
        <article className={`flex flex-col ${SettingsDefault.gap} text-center`}>
          <p>{getName}</p>
          <p>{getAge}</p>
        </article>
        <footer className="text-center">
          <h6 className="italic">
            Developed by: <u className="font-bold">Guilhermme Soares marciel</u>
          </h6>
        </footer>
      </main>
    </div>
  );
}
