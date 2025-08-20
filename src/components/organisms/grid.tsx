import PostCard from "../molecules/card";

export default function Grid() {
  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
      {Array.from({ length: 10 }, (e: string) => {
        return <PostCard key={e} type="grid" />;
      })}
    </section>
  );
}
