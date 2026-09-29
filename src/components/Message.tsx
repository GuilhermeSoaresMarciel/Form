type typeMessage = {
  context: string;
};

export default function Message({ context }: typeMessage) {
  return (
    <p className="fixed top-2.5 right-2.5 border rounded-lg p-2.5">{context}</p>
  );
}
