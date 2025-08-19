import Input from "#/components/atoms/input";
import Feed from "#/components/organisms/feed";

export default function Home() {
  return (
    <div className="w-full bg-background text-lg px-4 py-12 flex flex-col gap-8 overflow-y-scroll">
      <Input style="default" placeholder="Insert the message..." />
      <Feed />
    </div>
  );
}
