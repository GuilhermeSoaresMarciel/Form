export interface UserData {
  name: string;
  age: number;
}

export default function getData(): UserData | null {
  const data = sessionStorage.getItem("Data");

  if (!data) {
    return null;
  }

  try {
    const parsedData: unknown = JSON.parse(data);

    if (
      typeof parsedData === "object" &&
      parsedData !== null &&
      "name" in parsedData &&
      "age" in parsedData &&
      typeof parsedData.name === "string" &&
      typeof parsedData.age === "number"
    ) {
      return parsedData as UserData;
    }
  } catch {
    // A sessão corrompida não deve impedir o usuário de voltar ao formulário.
  }

  sessionStorage.removeItem("Data");
  return null;
}
