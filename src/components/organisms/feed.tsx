import Card from "../molecules/card";

export default function Feed() {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <Card type="feed" />
      </li>
      <li>
        <Card type="feed" />
      </li>
      <li>
        <Card type="feed" />
      </li>
    </ul>
  );
}
