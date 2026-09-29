interface SaveData {
  name: string;
  age: number;
}

export default function SaveData(context: SaveData) {
  sessionStorage.setItem("Data", JSON.stringify(context));
}
