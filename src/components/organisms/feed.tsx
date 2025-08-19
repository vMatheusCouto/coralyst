import Card from "../molecules/card";

export default function Feed() {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
  );
}
