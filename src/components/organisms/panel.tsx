import Badge from "../atoms/badge";

export default function Panel() {
  return (
    <div className="w-[20vw] p-4 h-full">
      <h1>Topic</h1>
      <div className="text-sm">
        <Badge type="filled">Teste</Badge>
        <Badge type="outline">Teste</Badge>
        <Badge type="destructive">Teste</Badge>
      </div>
    </div>
  );
}
