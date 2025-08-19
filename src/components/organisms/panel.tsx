import Badge from "../atoms/badge";

export default function Panel() {
  return (
    <div className="w-[20vw] p-4 h-full">
      <h1>Topic</h1>
      <div className="text-sm">
        <Badge style="filled">Teste</Badge>
        <Badge style="outline">Teste</Badge>
        <Badge style="destructive">Teste</Badge>
      </div>
    </div>
  );
}
