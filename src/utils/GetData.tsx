interface UserData {
  name: string;
  age: number;
}

export default function getData(): UserData {
  const data = sessionStorage.getItem("Data");

  return JSON.parse(data!);
}
